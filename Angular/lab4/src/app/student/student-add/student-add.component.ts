import { Student } from './../../_models/student';
import { StudentService } from './../../student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
  // providers:[StudentService]
})
export class StudentAddComponent implements OnInit {
newStudent:Student = new Student(0,"",0,0);
    add(){
      this.studentser.addStudents(this.newStudent);
      this.router.navigateByUrl("students")
    }

  constructor(public studentser:StudentService, public router:Router) { }

  ngOnInit(): void {
  }

}
