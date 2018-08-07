import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterModel } from "../../../models/RegisterModel";
import {AuthenticationService} from "../authentication.service";


const defValidators = [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(10)
];

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  message:string;

  patterns = {
    username: "^[A-Z]+[a-z0-9]+$",
    password: "^[A-Za-z0-9]{4,16}$",
    name: "^[A-Z]{1}[a-z]+$|^[A-Z]{1}$",
    email: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
  };

  form = new FormGroup({
    username: new FormControl("", defValidators),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    age: new FormControl("")
  });

  data: RegisterModel;

  constructor(private authService:AuthenticationService) {}

  log = () => {
    console.log(this.form);
  };
  register =() => {
    this.authService.register(this.form.value).subscribe((res)=>{
      this.message = 'Successful Registration!'
    },(err)=>{
      this.message = err.error
    }) };

  ngOnInit() {}
}
