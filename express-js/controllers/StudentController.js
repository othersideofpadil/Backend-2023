// import model students
const Student = require("../model/Student")

// TODO 3: Import data students dari folder data/students.js
const { request } = require("express");
const students = require("../data/students");


// Membuat Class StudentController
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // menampilkan data students
    const students = await Student.all();
            const data = {
              message: "Menampilkan semua data students",
              data: students
            };

            res.status(200).json(data);
          }

  async store(req, res) {
        //destructing object req.body  
        const { nama, nim, email, jurusan } = req.body;
        // jika data undefined maka kirim response error
        if (!nama || !nim || !email || !jurusan) {
          const data = {
            message : "Semua data harus dikirim",
          };

          return res.status(422).json(data);
          
        }
        // menambahkan data 
        const students = await Student.create(req.body);

        const data = {
          message: `Berhasil menambahkan ${nama} sebagai data students baru`,
          data: students,
        };

        res.status(201).json(data);
      }

  async update(req, res) {
        const { id } = req.params;
        // mencari id student sesuai dengan yg ingin diupdate
        const students = await Student.find(id);

        if (students) {
          // melakukan update data berdasarkan id 
          const students = await Student.update(id, req.body);
          const data = {
            message: `Berhasil mengedit data students`,
            data: students,
          };

          res.status(200), res.json(data);
        } else {
          // kirim data tidak ada
          const data = {
            message: "Data student tidak ditemukan",
          };
          res.status(400).json(data);
        }
      }

  async destroy(req, res) {
        const { id } = req.params;
        // mencari id yang ingin dihapus jika ada maka akan kirim datanya, jika tidak data tidak ada
        const students = await Student.find(id);

        if (students) {
          // hapus data
          await Student.delete(id);
          const data = {
            message: `Berhasil menghapus data students`,
          };

          res.status(200).json(data);
        } else {
          // data tidak ada
          const data = {
            message: "Data tidak ditemukan",
          };

          res.status(404).json(data);
        }
      }

  async show(req, res) {
        const { id } = req.params;

        const students = await Student.find(id);

        if (students) {
          const data = {
            message: "Menampilkan detail data student",
            data: students,
          };

          res.status(200).json(data);
        } else {
          const data = {
            message: "Data student tidak ada",
          };

          res.status(404).json(data);
        }
      }
  }

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
