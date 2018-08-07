import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  message:string;
  error:boolean;
  patterns = {
    username: "^[A-Z]+[a-z0-9]+$",
    password: "^[A-Za-z0-9]{4,16}$"
  };

  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login = () => {
    this.authService.login(this.form.value).subscribe((res => {
      this.successfulLogin(res);
      this.message = 'Successful Login!'
      this.error = false;
    }),err =>{
      this.error = true;
      this.message = err.error;
    });
  };

  successfulLogin = res => {
    this.authService.authtoken = res["_kmd"]["authtoken"];
    localStorage.setItem("authtoken", res["_kmd"]["authtoken"]);
    localStorage.setItem("username", res["username"]);
    this.router.navigate(["/welcome"]);
  };

  ngOnInit() {}
}
