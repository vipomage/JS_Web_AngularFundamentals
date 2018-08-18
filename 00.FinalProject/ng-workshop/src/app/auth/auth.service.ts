import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  token: string;

  constructor(private toastr: ToastrService, private router: Router) {}

  signUp = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(["/auth/signin"]).then(() => {
          this.toastr.success("Successful Registration", "Success");
        });
      })
      .catch(e => {
        this.toastr.error(e.message, "Warning");
      });
  };

  signIn = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.authHandler("/welcome"))
      .catch(e => this.toastr.error(e.message, "Warning"));
  };

  googleOAuth = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => this.authHandler("/welcome"));
  };

  authHandler = (redirectUrl: string) => {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
        this.router.navigate([redirectUrl]).then(() => {
          this.toastr.success("Login Success", "Success");
        });
      });
  };

  redirect = (url: string) => this.router.navigate([url]);

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.router.navigate(["/auth/signin"]).then(() => {
          this.token = null;
          this.toastr.success("Logout Success");
        });
      });
  };

  getToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
        return this.token;
      })
      .catch(e => {
        console.log(e);
        return e.message;
      });
  };

  getCurrentUser = () => firebase.auth().currentUser;

  isAuthenticated = (): boolean => !!this.token;
}
