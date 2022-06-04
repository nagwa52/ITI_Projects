import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  val=4;
  query:string = "";
  bdate:Date = new Date(1996,1,1);
  value:Date = new Date(1999,1,1);
  student1:Student = new Student(1,"hossam",6,1,3);
  stempty:Student = new Student(0,"",0,0,1);
  students:Student[]=[
    new Student(2,"nagwa-talaat",26,1,2.5),
    new Student(3,"ahmed-mahmoud",26,2,4),
    new Student(4,"mai-hossam",26,3,2),
    new Student(5,"salma-gamal",26,4,5)
  ]

  constructor() { }

  ngOnInit(): void {

  }
  Add(){
  this.students.push(new Student(this.stempty.id,this.stempty.Name,this.stempty.age,this.stempty.depno,this.stempty.rate));
  this.stempty.id=0;
  this.stempty.Name="";
  this.stempty.age=0;
  this.stempty.depno=0;
  this.stempty.rate=0;
  }
  show(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==id){
        this.student1 =this.students[i];
         break;
      }
    }
  }
  delete(studentId: number) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.students = [...this.students.filter((item:Student) => item.id !== studentId)];
    }
}

edit(id:number){
  for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id == id){
       this.stempty.id = this.students[i].id ;
       this.stempty.Name = this.students[i].Name ;
       this.stempty.age = this.students[i].age ;
       this.stempty.depno = this.students[i].depno ;
       this.stempty.rate = this.students[i].rate ;
      }
    }
}

Update(id: number) {
  for (let i = 0; i < this.students.length; i++) {
    if (this.stempty.Name != "" && this.stempty.id != 0 && this.stempty.age != 0 && this.stempty.depno != 0  && this.stempty.rate != 0) {
      if(this.students[i].id == id){
     this.students[i].id =  this.stempty.id ;
     this.students[i].Name = this.stempty.Name ;
     this.students[i].age = this.stempty.age ;
     this.students[i].depno = this.stempty.depno ;
     this.students[i].rate = this.stempty.rate ;
    }}
  }
}
}
