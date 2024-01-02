// import database
const db = require("../config/database");
const students = require("../data/students");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students";
      db.query(sql, (sql, results) => {
        resolve(results);
      });
    });
  }

  // mencari student berdasarkan id
  static find(id) {
    // melakukan promise, select by id
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }

  // code here
  static async create(data) {
    // melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // promise 2
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  // melakukan update dengan asyncronus berdasarkan id
  static async update(id, data) {
    // update data
    await new Promise((resolve, reject) => {
      // melakukan query untuk update data
      const sql = "UPDATE students SET ? WHERE id = id";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // select data by id
    const student = await this.find(id);
    return student;
  }

  //melakukan delete berdasarkan id
  static async delete(id) {
    // query delete
    return new Promise((resolve, reject) => {
      // query sql
      const sql ="DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  //menampilkan data students berdasarkan id
  static async show(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ${id} `;
      db.query(sql, id, (err, results) => {
        // mendestructing array
        const [student] = results;
        resolve(student);
      });
    });
  }
}

// export class Student
module.exports = Student;
