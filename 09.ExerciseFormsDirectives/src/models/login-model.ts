import { HttpHeaders } from "@angular/common/http";

export interface LoginModel {
  body: Object;
  url: string;
  headers: HttpHeaders;
}
