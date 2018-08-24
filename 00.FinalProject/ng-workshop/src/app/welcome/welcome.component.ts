import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { User } from "../models/user";
import { DataSnapshot } from "angularfire2/database/interfaces";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {
  }

  title = "Restoregram";
  user: User;

  ngOnInit() {
    this.authService
      .retrieveUser()
      .once("value")
      .then((data: DataSnapshot) => {
        this.user = data.val();
      })
      .catch(e => this.toastr.error(e.message));
  }
}
