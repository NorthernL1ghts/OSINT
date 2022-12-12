// Import packages.
import * as IPFS from 'ipfs-core'
import fs from 'fs';

// Initialize IPFS node.
const ipfs = await IPFS.create();

// Creates object when adding data to IPFS. Object consists of path (the cid
// but in string format), cid, size, node, & mtime. Note that the commented way
// works too.
const results = await ipfs.add('hello world');
console.log(results.cid.toString());
// const results = ipfs.add('hello world');
// for await (const { cid } of results) {
//     console.log(cid.toString());
// }

// Stream down the data from the ipfs path. Here, the commented code doesnt 
// really work.
const stream = ipfs.cat(results.path);
const decoder = new TextDecoder();
let data = '';

for await (const chunk of stream) {
    data += decoder.decode(chunk, {stream: true});
}
console.log(data);

// const decoder = new TextDecoder();
// const data = await ipfs.cat(results.cid);
// console.log(decoder.decode(data));

// Source: https://js.ipfs.tech/#GettingStarted
// Source: https://github.com/ipfs/js-ipfs/blob/master/docs/BROWSERS.md 

// Do the same for files.
const contents = fs.readFileSync('../scraper_output.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
});
const input_file = {
    path: '../scraper_output.txt',
    contents: contents,
    mode: '-rw-rw-rw-' // or 555
}
const file_results = await ipfs.add(input_file);
// const file_results = await ipfs.add({
//     path: '../scraper_output.txt',
//     contents: contents,
//     mode: '-rw-rw-rw-' // or 555
// });
console.log(file_results.cid.toString());

// const file_stream = ipfs.cat(file_results.path);
// const file_stream = ipfs.get(file_results.path, {archive: true, compress: false});
const file_stream = ipfs.cat(file_results.cid)
let file_data = [];

// for await (const chunk of file_stream) {
for await (const chunk of ipfs.cat(file_results.cid)){
    // file_data += decoder.decode(chunk, {stream: true});
    file_data.push(chunk);
}
console.log(file_data.toString());
// for await (const chunk of file_stream) {
//     console.log(chunk);
// }
// console.log(await file_stream);
