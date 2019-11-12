import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service : EmployeeService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      EmployeeID : null,
      EmployeeFirstName : '',
      EmployeeLastName : '',
      EmployeeAddress : '',
      EmployeeGender : '',
      EmployeeEmail : '',
    }
  }

  onSubmit(form : NgForm){
    if(form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);

  }

  insertRecord(form : NgForm){
    this.service.postEmployee(form.value).subscribe( res => {
      this.toastr.success('Inserted Successfully','EMP. Register');
      this.resetform(form);
      this.service.refreshList();
    });
  }
  updateRecord(form : NgForm){
    console.log("tushar");
    this.service.putEmployee(form.value).subscribe( res => {
      this.toastr.info('Updated Successfully','EMP. Register');
      this.resetform(form);
      this.service.refreshList();
    });
  }
}
