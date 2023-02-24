const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('./docs/text.txt');
readStream.on('data',(chunk) => {
    console.log(chunk.toString()) ;
    console.log('********');
});

const writeStream = fs.createWriteStream('./docs/newtextcopy.txt');
    let i = 1;
readStream.on('data', (chunk) => {
    writeStream.write(`\nЧАСТЬ № ${i}\n`);
    writeStream.write(chunk);
    i++ 
});

const compress = () => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream('./docs/index.html');
    const output = fs.createWriteStream('./docs/index_compress.html.gz');
    input.pipe(gzip).pipe(output);
}

setTimeout(() => {compress()},3000);


const decompress = () => {
    const unzip = zlib.createUnzip();
    const inputdecompress = fs.createReadStream('./docs/index_compress.html.gz')
    const outputdecompress = fs.createWriteStream('./docs/index_decompress.html')
    inputdecompress.pipe(unzip).pipe(outputdecompress);
}

setTimeout(() => {decompress()},3000);