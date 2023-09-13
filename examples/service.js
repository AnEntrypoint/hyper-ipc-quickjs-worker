//expose a remote service for quickjs code to use
const node = require('hyper-ipc-secure')();

const fs = require('fs');
node.serve(kp, 'hello.world', async (args) => {
    return JSON.parse(fs.readFileSync(args.file));
});
