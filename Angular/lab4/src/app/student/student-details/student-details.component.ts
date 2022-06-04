import { Student } from './../../_models/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
   id =0;
   student:Student|null = new Student(0,"",0,0)
  constructor(public ac:ActivatedRoute, public stser:StudentService) { }

  ngOnInit(): void {
    this.student = this.stser.getStudent(this.ac.snapshot.params['id'])
    this.id = this.ac.snapshot.params['id']
  }

}
