import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:any;
  constructor() { 
    console.log("constructor ran..");
  }

  ngOnInit() {
    console.log("ngOnInit ran..");
    this.name="Ekta Tiwari";
    this.age=22;
    this.email="ekta_30@outlook.com";
    this.address={
      street:'Divyansh Fabio',
      houseno:406
    }
    this.hobbies=['Travelling','Hangout'];
  }

  onClick()
  {
    console.log("Hello");
    this.name="Bacha";
    this.hobbies.push("new hobby");
  }

}
interface Address{
  street:string,
  houseno:number
}
