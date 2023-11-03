const fs = require('fs');

const readStraem = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'});

readStraem.on('data', (chunk) => {
    console.log('--------NEW CHUNK ------');
    console.log(chunk.toString());
});