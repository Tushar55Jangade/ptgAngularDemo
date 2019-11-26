import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.exampleRequest()
    /*.subscribe(
      (response) => {
        console.log("its an success");
        console.log(response);
      },
      (error) => {
        console.log("its an error");
        console.log(error);
      }
    );*/
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully', 'EMP. Register');
      });
    }
  }
}
