import { Component, OnInit } from '@angular/core';
import{StudentServiceService} from '../services/student-service.service';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.css']
})
export class ViewMarksComponent implements OnInit {
  marks:any;
  constructor(
    private dataService: StudentServiceService
  ) { }

  ngOnInit(): void {
    this.getMarks();
  }
  getMarks(){
   
    this.dataService.getMarks().subscribe(res=>{
      console.log(res);
      this.marks=res['marks'];
    });
  }

}
