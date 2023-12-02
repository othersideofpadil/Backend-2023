// mengimport data fruits menggunakan require
const fruits = require("./data.js");

// membuat fungsi index store 
const index = () => {
    for (const fruit of fruits){
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
    
    console.log(`Menambahkan data ${name}`)
    index();
};

// mengexport data index dan store
module.exports = {index, store};