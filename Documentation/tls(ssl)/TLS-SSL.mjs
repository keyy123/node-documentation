import * as https from 'node:https';
import * as fs from 'node:fs';

//  import fxn returns a promise NOT the import keyword
// try {
//     tls = await import('node:tls');
//     console.log(tls)
// } catch (error) {
//     console.log('tls support is disabled!');
// }

// enter this within the CLI 
// curl -k https://localhost:[port]

const options = {
    key: fs.readFileSync(new URL('my-key.pem', import.meta.url)),
    cert: fs.readFileSync(new URL('selfsignedcert.pem', import.meta.url))
};

https.createServer(options, (req, res) => {
    console.log("localhost:3000");
    // res.writeHead(200).write('hello world\n');
    res.writeHead(200).write(JSON.stringify(1 + 1))
}).listen(3000);