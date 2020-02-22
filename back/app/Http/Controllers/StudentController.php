<?php

namespace App\Http\Controllers;

use App\Student;
use App\Subject;
use App\Marks;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $student = Student::all();
       
        return response()->json(['status' => 200, 'students' => $student]);
       
    }
    public function getSubject()
    {
        $subjects = Subject::all();
       
        return response()->json(['status' => 200, 'subjects' => $subjects]);
       
    }
    public function viewMarks()
    {
        $getMarks = Marks::join('students', 'students.st_Number','=','marks.st_Number')
        ->join('subject', 'subject.sb_code','=','marks.sb_code')
        ->get();
        
        return response()->json(['status' => 200, 'marks' => $getMarks]);
       
    }
    
    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $studentSave = new Student;
         $studentSave->fill($request->all());
        
         $studentSave->save();
    }
    public function addMarks(Request $request)
    {
         $addMarks = new Marks;
         $addMarks->fill($request->all());
        
         $addMarks->save();
         return response()->json(['status' => 200]);
    }
   
    /**
     * Display the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}
