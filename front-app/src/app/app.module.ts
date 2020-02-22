import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { ViewMarksComponent } from './view-marks/view-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ViewStudentComponent,
    AddMarksComponent,
    ViewMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
