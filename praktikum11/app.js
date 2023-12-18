// import express
const express = require("express")

// membuat objek express
const app = express();

// menggunakan middleware
app.use(express.json());

// menggunakan routing
const router = require("./routes/api");
app.use(router);

// mendefinisikan port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});