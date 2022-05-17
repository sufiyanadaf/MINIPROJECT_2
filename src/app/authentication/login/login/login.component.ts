import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 email : any;
password : any;
  constructor(private router: Router) { 
}

  ngOnInit(): void {
  }
  submitForm(form:NgForm){
    localStorage.setItem('email', form.value.email)
    localStorage.setItem('password', form.value.password)
    this.email = localStorage.getItem('email')
    this.password= localStorage.getItem('password')
    if(this.email=== 'sufiya@gmail.com' && this.password=== '12345' ){
    console.log(form.value);
    console.log(form.status);
    console.log("authorised");
    
    this.router.navigate(['/dashboard']);
    }
    else{
  window.alert("Please enter Valid information")
}
}
}
