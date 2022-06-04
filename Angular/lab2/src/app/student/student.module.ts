import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppendStringPipe } from './append-string.pipe';
import { PowertoxPipe } from './powertox.pipe';
import { SharedModule } from '../shared/shared.module';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {CalendarModule} from 'primeng/calendar';
import {ReplaceDashPipe } from './replace-dash.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    StudentComponent,
    AppendStringPipe,
    PowertoxPipe,
    ReplaceDashPipe,
    SearchPipe
  ],
  imports: [PasswordModule,RatingModule,CalendarModule,
    CommonModule,ReactiveFormsModule,FormsModule,SharedModule,AccordionModule,BrowserAnimationsModule
  ],
  exports:[
    StudentComponent,PowertoxPipe
  ]
})
export class StudentModule { }
