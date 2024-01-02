// import student controller
const StudentController = require("../controllers/StudentController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

router.get("/" , (req,res) => {
    res.send("Hai Fadil!");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
router.get("/students/:id", StudentController.show);

// Export router
module.exports = router;    