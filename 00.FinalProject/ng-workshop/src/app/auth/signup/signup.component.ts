import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {}

  signup = (form: NgForm) => {
    const email = form.value.email.toLowerCase();
    const password = form.value.password;
    this.authService.signUp(email, password);
  };

  googleOAuth = () => {
    this.authService.googleOAuth();
  };
}
