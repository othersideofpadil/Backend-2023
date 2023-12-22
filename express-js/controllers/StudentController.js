// import model students
const Student = require("../model/Student")

// TODO 3: Import data students dari folder data/students.js
const { request } = require("express");
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // TODO 4: Tampilkan data students
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students
    };

    res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    const { nama, nim, email, jurusan } = req.body
    const students = await Student.create(req.body);

    const data = {
      message: "Menambahkan data students",
      data: students
    };

    res.status(201).json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    // TODO 6: Update data students
    // code here
    students[id] = nama;

    const data = {
      message: `Mengedit data students id ${id}, dengan nama ${nama}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    // TODO 7: Hapus data students
    // code here
    students.splice(id, 1);

    const data = {
      message: `Menghapus data students ${id}`,
      data: students,
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
