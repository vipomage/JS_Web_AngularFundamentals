import {Component, OnInit} from "@angular/core";
import { HomeService } from "./home.service";
import {GitHubProfile} from "./git-hub-profile";

@Component({
  selector: "home",
  template: "<h1 *ngIf='profile'>{{profile.login}} from {{profile.location}}</h1>"
})
export class HomeComponent implements OnInit{
  profile: GitHubProfile;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService
      .getGitHubProfile("vipomage")
      .subscribe(data => this.profile = data);
  }
}
