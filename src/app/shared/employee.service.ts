import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http'

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

  refreshList(){
    this.http.get(this.rootURL+'/giveAllEmployee')
    .toPromise().then(res => this.list =res as Employee[]);
  }

  putEmployee(formData : Employee){
    return this.http.put(this.rootURL+'/UpdateEmployeeById/'+formData.EmployeeID,formData);
  }

  deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/removeEmployeeById/'+id);
  }
}