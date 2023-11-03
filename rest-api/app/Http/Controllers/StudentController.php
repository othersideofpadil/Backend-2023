<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
      $students = Student::all();

      // jika data kosong maka kirim status code 204
      if($students->isEmpty()){
        $data = [
          "message"=> 'Resource is empty',
        ];

        return response()->json($data, 204);  

      }
      
      $data = [
        'message' => 'Get All Students',
        'data'=> $students
      ];

      return response()->json($data, 200);
    }

    // membuat function store
    public function store(Request $request){
        // validasi data request
        $request->validate([
          "nama"=>"required",
          "nim"=> "required",
          "email"=> "required|email",
          "jurusan" => "required"
        ]);
        // menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        // menggunakan model student untuk insert data
        $student = Student::create($input);
        
        $data = [
            'message' =>'Student is Created Succesfully',
            'data'=> $student,
        ];

        // mengembalikan data (json) dan kode 201
        return response()->json($data, 201);
    }

    // membuat function update
    public function update(Request $request,$id){
      // mencari data yang ingin di update
      $student = Student::find($id);

      // jika data yang dicari tidak ada, kirim kode 404
      if(!$student){
        $data = [
          'message' => 'Data not Found'
        ];

        return response()->json($data, 404);
      }

      // menangkap data request 
      $student->update([
          'nama'=> $request->nama ?? $student->nama,
          'nim'=> $request->nim ?? $student->nim,
          'email'=> $request->email ?? $student->email,
          'jurusan'=> $request->jurusan ?? $student->jurusan
        ]);

        // mengupdate nilai student berdasarkan id
        $data = [
          'message'=> 'Student updated successfully',
          'data'=> $student
        ];
        
        // mengembalikan data 
        return response()->json($data, 200);
      
    }
    // membuat function delete
    public function destroy($id){
      // cari id student yang ingin dihapus
      $student = Student::find($id);

      // jika data yang dicari tidak ada kirim kode 404
      if(!$student){
        $data = [
          'message' => 'Data not Found'
        ];

        return response()->json($data, 404);
      }
      
      // hapus student 
      $student->delete();

      $data = [
        'message'=> 'Student deleted succesfully',
        'data'=> $student
      ];

      // mengembalikan data kode 200
      return response()->json($data, 200);
  
  }

  // membuat detail student
  public function show ($id){
    # cari id student yang ingin didapatkan
    $student = Student::find($id);

    if($student){
      $data = [
        'message' => 'Get detail student',
        'data' => $student
      ];

      // mengembalikan data
      return response()->json($data, 200);
    }else{
      $data = [
        'message' => 'Student not Found',
      ];

      // mengembalikan data
      return response()->json($data, 404);
    }
  }
}
