import { Component, OnInit } from '@angular/core';
import{StudentServiceService} from '../services/student-service.service';
import { Marks } from './add-marks.module';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {
  data:any;
  students:any;
  marks=new Marks();
  constructor(
    private dataService: StudentServiceService
  ) { }

  ngOnInit(): void {
    this.getSubject();
  }
  getSubject(){
   
    this.dataService.getSubject().subscribe(res=>{
      console.log(res);
      this.data=res['subjects'];
    });
    this.dataService.getData().subscribe(res=>{
      console.log(res);
      this.students=res['students'];
    });
  }
  insertData(){
    console.log(this.marks);
    this.dataService.insertMarks(this.marks).subscribe(res=>{
      alert("Successfully Added");
     
    });
    
  }

}
