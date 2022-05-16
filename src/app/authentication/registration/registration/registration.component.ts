import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 myList : any;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:any){
      console.log(form.value);
      console.log(form.status);
  }
}
