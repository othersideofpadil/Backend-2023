<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
      $students = Student::all();
      
      $data = [
        'message' => 'Get All Students',
        'data'=> $students
      ];

      return response()->json($data, 200);
    }

    // membuat function store
    public function store(Request $request){
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
      // menangkap data request 
      $input = [
          'nama'=> $request->nama,
          'nim'=> $request->nim,
          'email'=> $request->email,
          'jurusan'=> $request->jurusan
        ];

        // mendapatkan nilai student berdasarkan id
        $student =Student::where('id', $id)->update($input);
        $data = [
          'message'=> 'Student updated successfully',
          'data'=> $student
        ];
        
        // mengembalikan data 
        return response()->json($data, 200);
    }
    // membuat function delete
    public function destroy($id){
      $student = Student::find($id);
      $student->delete();
      $data = [
        'message'=> 'Student deleted succesfully',
        'data'=> $student
      ];
      return response()->json($data, 200);
    }
}
