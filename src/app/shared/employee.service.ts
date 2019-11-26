import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import {timeout} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly rootURL = "https://ptgdemohost.azurewebsites.net/api/employee";

  constructor(private http :HttpClient) { }

  postEmployee(formData : Employee){
    return this.http.post(this.rootURL+'/addEmployee',formData);
  }

  exampleRequest()
  {
    let rep;
    this.test1(rep);
    console.log("in the main method");
    rep = this.http.get('http://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/todos/1');
    //rep = 
    //this.http.get('http://dummy.restapiexample.com/api/v1/employees');
   // .pipe(timeout(1000));
    return rep;
  }

  refreshList(){
    return this.http.get(this.rootURL+'/giveAllEmployee')
    .toPromise().then(res => this.list =res as Employee[]);
  }

  test1(rep){ 
    console.log("testing the time 1234")
    //http://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/todos/1
    //rep =
     //this.http.get('http://dummy.restapiexample.com/api/v1/employee/1');
    //.pipe(timeout(10000));
    return rep;
    console.log("end of test one");
  }

  putEmployee(formData : Employee){
    return this.http.put(this.rootURL+'/UpdateEmployeeById/'+formData.EmployeeID,formData);
  }

  deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/removeEmployeeById/'+id);
  }
}