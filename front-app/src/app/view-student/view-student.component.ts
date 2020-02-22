import { Component, OnInit } from '@angular/core';
import{StudentServiceService} from '../services/student-service.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  data:any;
  constructor(
    private dataService: StudentServiceService
  ) { } 

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData(){
   
    this.dataService.getData().subscribe(res=>{
      console.log(res);
      this.data=res['students'];
    });
  }

}
