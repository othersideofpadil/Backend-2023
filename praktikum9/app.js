// mengimport fruitcontroller
// melakukan destructing object
const {index,store} = require("./FruitController.js");

// membuat fungsi utama: main
const main = () => {
    console.log(`Menampilkan Data Fruits`);
    index();
    console.log("\n");
    store("Strawberry");
};

main();