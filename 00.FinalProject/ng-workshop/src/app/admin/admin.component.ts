import { Component, OnInit } from "@angular/core";
import { AdminService } from "./admin.service";
import { User } from "../models/user";
import { AuthService } from "../auth/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor(
    private admin: AdminService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  users: Array<User>;

  getUsers = () => {
    this.admin
      .getUsers()
      .once("value")
      .then(data => {
        this.users = Object.values(data.val());
      });
  };

  disableUser = (uid: string) => {
    this.authService
      .userRef(uid)
      .update({ disabled: true })
      .then(() => {
        this.toastr.warning("User Disabled!");
      });
  };

  enableUser = (uid: string) => {
    this.authService
      .userRef(uid)
      .update({ disabled: false })
      .then(() => {
        this.toastr.warning("User Disabled!");
      });
  };

  ngOnInit() {
    this.getUsers();
  }
}
