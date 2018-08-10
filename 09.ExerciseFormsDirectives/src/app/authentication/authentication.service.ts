import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from "../../models/login-model";
import { RegisterModel } from "../../models/RegisterModel";


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private appKey: string = "kid_rk1_WOxH7";
  private appSecret: string = "6962ca5448f944f089c29dd17a11acc5";
  private registerUrl = `https://baas.kinvey.com/user/${this.appKey}`;
  private loginUrl = `https://baas.kinvey.com/user/${this.appKey}/login`;
  private logoutUrl = `https://baas.kinvey.com/user/${this.appKey}/_logout`;
  private currentAuthtoken;
  private createAuthHeaders(type: string): HttpHeaders {
    if (type === "Basic") {
      return new HttpHeaders({
        Authorization: `Basic ${btoa(`${this.appKey}:${this.appSecret}`)}`,
        "Content-Type": "application/json"
      });
    } else {
      return new HttpHeaders({
        Authorization: `Kinvey ${localStorage.getItem("authtoken")}`,
        "Content-Type": "application/json"
      });
    }
  }

  constructor(private http: HttpClient) {
    this.currentAuthtoken;
  }

  login = (loginModel: LoginModel) =>
    this.http.post(this.loginUrl, JSON.stringify(loginModel), {
      headers: this.createAuthHeaders("Basic")
    });

  register = (registerModel: RegisterModel) =>
    this.http.post(this.registerUrl, JSON.stringify(registerModel),
      {headers: this.createAuthHeaders("Basic")});

  logout = () =>
    this.http.post(
      this.logoutUrl,
      {},
      { headers: this.createAuthHeaders("Kinvey") }
    );

  checkIfLoggedIn = () =>{
    return !!localStorage.getItem("authtoken");
  }


  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
    localStorage.setItem('authtoken',value)
  }
}
