import { Component, OnInit } from '@angular/core';
import { Student } from './create-student.module';
import{StudentServiceService} from '../services/student-service.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student=new Student();
  constructor(
    private dataService: StudentServiceService
    ) { }

  ngOnInit(): void {
  }

  insertData(){
    //console.log(this.student);
    this.dataService.insertData(this.student).subscribe(res=>{
      alert("Successfully Added");
     
    });
    
  }

}
