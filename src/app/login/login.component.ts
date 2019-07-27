import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  validate='';
  constructor(private routes:Router) { }

  ngOnInit() {
  }
login()
{
  //console.log(this.model);
  if(this.model.username === 'user' && this.model.password === 'user123') 
  {
    this.routes.navigate(['/resumetemplate']);
  } 
  else
  {
    this.validate = 'Wrong Username and Password, Please try again!!!';
  }
}
}
