import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { DatabaseReference } from "angularfire2/database/interfaces";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private toastr: ToastrService, private router: Router) {}

  public token: string;
  private GOOGLE_PROVIDER = new firebase.auth.GoogleAuthProvider();
  public currentUser;

  signUp = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(["/auth/signin"]).then(() => {
          this.toastr.success("Successful Registration");
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
      .signInWithPopup(this.GOOGLE_PROVIDER)
      .then(() => this.authHandler("/welcome"));
  };

  authHandler = (redirectUrl: string) => {
    let disabled = this.uploadUserToDb();
    if (disabled) {
      return;
    } else {
      firebase
        .auth()
        .currentUser.getIdToken()
        .then((token: string) => {
          this.token = token;
          this.router.navigate([redirectUrl]).then(() => {
            this.toastr.success("Login Success", "Success");
          });
        });
    }
  };

  uploadUserToDb = (): void => {
    let currentUser = firebase.auth().currentUser;
    this.currentUser = currentUser;
    let uid = currentUser.uid;
    firebase
      .database()
      .ref(`users/${uid}`)
      .once("value")
      .then(data => {
        let user = data.val();
        if (user.disabled) {
          this.logout();
          this.toastr.clear();
          this.toastr.warning("This Account is Disabled!");
          return true;
        } else {
          if (!data.val()) {
            let customUser = {
              displayName: currentUser.displayName,
              email: currentUser.email,
              uid: currentUser.uid,
              isAdmin: false
            };
            let obj = {};
            obj[uid] = customUser;
            firebase
              .database()
              .ref("users")
              .update(obj);
          }
          return false;
        }
      });
  };

  redirect = (url: string) => this.router.navigate([url]);

  logout = (): void => {
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

  getCurrentUser = () => firebase.auth().currentUser;

  isAuthenticated = () => !!this.token;

  retrieveUser = (): DatabaseReference =>
    firebase.database().ref(`users/${this.currentUser.uid}`);

  checkAdmin = (uid: string): DatabaseReference | boolean => {
    if (this.token) {
      return firebase.database().ref(`admins/${uid}`);
    } else {
      return false;
    }
  };

  userRef = (uid: string): DatabaseReference => {
    return firebase.database().ref(`users/${uid}`);
  };
}
