import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateStudentComponent} from './create-student/create-student.component';
import {ViewStudentComponent} from './view-student/view-student.component';
import {AddMarksComponent} from './add-marks/add-marks.component';
import {ViewMarksComponent} from './view-marks/view-marks.component';


const routes: Routes = [
  {path: '',component : CreateStudentComponent},
  {path: 'view-student',component : ViewStudentComponent},
  {path: 'add-marks',component : AddMarksComponent},
  {path: 'view-marks',component : ViewMarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
