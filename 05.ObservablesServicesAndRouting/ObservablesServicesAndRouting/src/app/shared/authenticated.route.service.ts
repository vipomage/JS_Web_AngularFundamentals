import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticatedRoute implements CanActivate {
  constructor(private router: Router) {}

  canActivate = () => {
    // if (this.userService.isAuthenticated()){
    this.router.navigateByUrl("/account/login");
    return false;
  };
}
