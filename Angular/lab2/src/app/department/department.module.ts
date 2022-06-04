import { StudentModule } from './../student/student.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    CommonModule,FormsModule,StudentModule
  ],
  exports:[
    DepartmentComponent
  ]
})
export class DepartmentModule { }
