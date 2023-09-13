const node = require('hyper-ipc-secure')();

setTimeout(async ()=>{
    const remotekey = kp.publicKey.toString('hex');
    //call hello.world on the server remotely from quickjs code
    const output = await node.run(kp.publicKey, 'exec',  {
        code:`const data = api('ipc', JSON.stringify(['${remotekey}', 'hello.world', {file:"data.json"}]))
            data`
    })
    console.log(output)
}, 2000)
