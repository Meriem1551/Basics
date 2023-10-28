const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log(`last line`)

//writing files
fs.writeFile('./docs/blog1.txt', `hello world`, () => {
    console.log(`files was writing`)
});
fs.writeFile('./docs/blog2.txt', `hello world`, () => {
    console.log(`files was writing`)
});

//directories
if (!fs.existsSync('./assets')){
fs.mkdir(`./assets`, (err) => {
    if (err){
        console.log(err);
    }
    console.log(`Direcory created`);
    console.log(err);
})
}
else{
    fs.rmdir('./assets',(err) => {
        if (err){
            console.log(err);
        }
        console.log('Folder deleted')
    })
}

//deleting files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log('file deleted');
    })
}

