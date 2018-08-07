import { Component, OnInit } from "@angular/core";
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = false;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private authService:AuthenticationService,private router:Router) {}

  isLogged :boolean = false;


  logout = ()=>{
    this.authService.logout().subscribe(()=>{
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login'])
      this.isLogged = false
    });
  };

  ngOnInit() {

  }
}
