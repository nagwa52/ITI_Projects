import { Student } from './_models/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
    export class StudentService {
    private students:Student[]=[
      new Student(1,"nagwa",26,1),
      new Student(2,"mona",25,2),
      new Student(3,"mai",24,3),
      new Student(4,"salma",27,4)
    ];
    getAllStudents(){
      return this.students
    }
    addStudents(student:Student){
     this.students.push(new Student(student.id,student.name,student.age,student.depno))
    }
    getStudent(id:number){
      for (let i = 0; i < this.students.length; i++) {
        if(this.students[i].id == id){
          return this.students[i];
     }

      }
return null;
    }
      constructor() { }
    }
