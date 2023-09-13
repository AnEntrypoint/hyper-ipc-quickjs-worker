const crypto = require('hypercore-crypto');
const node = require('hyper-ipc-secure')();

const init = async (context) => {
    const createApiMethod = (callback) => {
        return async (...data)=>{
            const output = await callback(...data);
            const json = JSON.stringify(output)
            return context.newString(json)
        }
    }
    return {
        ipc: createApiMethod (
            async (publicKey, name, params) => {
                try {
                    return {data:await node.run(Buffer.from(publicKey, 'hex'), name, params)};
                } catch(e) {
                    console.error(e);
                }
            }
        )
    }
};
module.exports = { init }