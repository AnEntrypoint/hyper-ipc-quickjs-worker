const { newAsyncContext } = require("quickjs-emscripten")
const Api = require('./api');
const node = require('hyper-ipc-secure')();

const run = async (input) => {
    const context = await newAsyncContext()
    const api = await Api.init(context);
    const apiHandle = context.newAsyncifiedFunction("api", async (iname, iparams) => {
        const name = context.getString(iname);
        const jparams = context.getString(iparams);
        const params = JSON.parse(jparams);
        const output = await api[name](...params)
        return output;
    })

    apiHandle.consume((fn) => context.setProp(context.global, "api", fn))
    const result = await context.evalCodeAsync(input)

    return new Promise(async (resolve) => {
        if (result.error) {
            resolve({ success: false, error: context.dump(result.error) })
            result.error.dispose()
        } else {
            resolve({ success: true, value: JSON.parse(context.dump(result.value)) })
            result.value.dispose()
        }
    });
};


const exec = (kp, name)=>{
    node.serve(kp, name, async (args) => {
        return run(args.code);
    });
}
module.exports = {
    exec
}

