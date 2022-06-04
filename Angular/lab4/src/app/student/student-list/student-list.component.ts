import { Router } from '@angular/router';
import { StudentService } from './../../student.service';
import { Student } from './../../_models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  //  providers:[StudentService]
})
export class StudentListComponent implements OnInit {
studentlist:Student[]=[];
  constructor(public studentser:StudentService, public router:Router) { }
 addStudent(){
      this.router.navigateByUrl("/students/add")
    }
  ngOnInit(): void {
    this.studentlist= this.studentser.getAllStudents()
  }

}
