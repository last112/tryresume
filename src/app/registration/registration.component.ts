import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { digitValidator, symbolValidator, passwordMatch } from '../Helpers/validation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private builder: FormBuilder) { }



  id=20180728000;
  email='';
  phone='';
  ngOnInit() {

    /*this.registerForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      date: new FormControl(''),
      cname: new FormControl(''),
      percent: new FormControl(''),
      passing: new FormControl(''),
      backlog: new FormControl('')
    });*/
    this.validateForm();
  }
  validateForm()
  {
      this.registerForm = this.builder.group({
        fname:['', Validators.required],
        lname:['', Validators.required],
        date:['', Validators.required],
        email:['', Validators.compose([Validators.required, Validators.email])],
        phone:['', Validators.compose([Validators.required, digitValidator])],
        registerpassword: ['', Validators.compose([Validators.required, symbolValidator])],
        isActive: [false, Validators.pattern('true')],
        confirmPassword:''
      },
      {
        validator: passwordMatch
      }
      );
  }
  getdata1(Input)
  {
       this.email=Input;
  }
  getdata2(Input)
  {
      this.phone=Input;
  }
  onsubmit(){
    this.id+=1;
    alert('Please ensure your phone number and email are correct before clicking ok..Note down your unique ID that is '+this.id+' and your phone number is '+this.phone+' and your email Id is '+this.email);
}
}
