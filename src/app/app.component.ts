import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Template Driven Form Tutorial';
  firstName? : string;
  EmailID? : string
  Mobile? : string


  PrefilledData(EmployeeForm:NgForm)
  {
    // EmployeeForm.value.EmpName = "Tech Engineer";
    // EmployeeForm.value.EmpAddress = "Tech Engineer";

    // EmployeeForm.setValue({
    //     PersonalData : {
    //              EmpName: "Tech Engineer",
    //              EmpAddress: "developer@94.com",
    //              EmpMobile: "8544884846"
    //     } 
    // })
    
    EmployeeForm.form.patchValue({
      PersonalData : {
                     EmpName: "Tech Engineer",
                     EmpMobile: "8544884846"
            } 
    })

  }

  AddEmployees(EmployeeForm:NgForm)
  {
    console.warn(EmployeeForm.value);
    this.firstName = EmployeeForm.value.PersonalData.EmpName;
    this.EmailID = EmployeeForm.value.PersonalData.EmpAddress;
    this.Mobile = EmployeeForm.value.PersonalData.EmpMobile;
  }

  ClearForm(EmployeeForm:NgForm)
  {
   EmployeeForm.form.reset();
  }
}
