import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  data:any;
  constructor(
    private httpClient:HttpClient
  ) {}
   
  insertData(data){
    return this.httpClient.post('http://127.0.0.1:8000/student',data);
  }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/student');
 
  }
  getSubject(){
    return this.httpClient.get('http://127.0.0.1:8000/subjects');
    
  }
  insertMarks(data){
    return this.httpClient.post('http://127.0.0.1:8000/add-marks',data);
  }
  getMarks(){
    return this.httpClient.get('http://127.0.0.1:8000/view-marks');
    
  }
  
}
