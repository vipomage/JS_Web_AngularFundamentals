import { Injectable } from "@angular/core";
import * as firebase from "firebase";
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
      .then(() => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            this.router.navigate(["/recipes/create"]).then(() => {
              this.toastr.success("Login Success", "Success");
            });
          });
      })
      .catch(e => this.toastr.error(e.message, "Warning"));
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

  isAuthenticated = (): boolean => !!this.token;

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.router.navigate(["/auth/signin"])
          .then(() => (this.token = null));
      });
  };
}
