<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{

    // property animals
    public $animals =["Beruang", "Bebek", "Ayam", "Kucing", "Singa", "Paus"];
    
    // method menampilkan semua hewan
    public function index(){
        echo "Menampilkan data animals <br>";
        // loop property animals
        foreach ($this->animals as $animal){
            echo "- $animal <br>";
        }
    }

    // method menambahkan data hewan
    public function store(Request $request){
        echo "Menambahkan hewan baru <br>";
        // menambahkan data ke property animals
        array_push( $this->animals, $request->animal);
        // panggil method index 
        $this->index();
    }
    
    // method untuk mengedit data hewan 
    public function update($id, Request $request){
        echo "Mengupdate data hewan id $id. <br>";
        // update data
        $this->animals[$id] = $request->animal;
        // panggil method index
        $this->index();
    }

    //method menghapus data hewan 
    public function destroy($id){
        echo "Menghapus data hewan id $id. <br>";
        // hapus data
        unset($this->animals[$id]);
        // panggil method index
        $this->index();
    }

}
