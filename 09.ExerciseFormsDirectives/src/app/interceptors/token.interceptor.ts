import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {tap} from 'rxjs/operators'
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

const appKey: string = "kid_rk1_WOxH7";
const appSecret: string = "6962ca5448f944f089c29dd17a11acc5";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticationService,private router:Router) {

  }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (request.url.endsWith('login') || request.url.endsWith(appKey)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          "Content-Type": "application/json"
        }
      });
    }else{
      request = request.clone({
        setHeaders: {
          Authorization: `Kinvey ${localStorage.getItem('authtoken')}`,
          "Content-Type": "application/json"
        }
      });
    }


    return next
      .handle(request)
      .pipe(tap((event:HttpEvent<any>) =>{
        if (event instanceof HttpResponse && request.url.endsWith('login')){
          //Unfinished 1:21 Video
        }
    }));
  }

  successfulLogin = res => {
    this.authService.authtoken = res["_kmd"]["authtoken"];
    localStorage.setItem("authtoken", res["_kmd"]["authtoken"]);
    localStorage.setItem("username", res["username"]);
    this.router.navigate(["/welcome"]);
  };
}
