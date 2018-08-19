import { Component, OnInit } from '@angular/core';
import {ImageService} from "../pictures/image.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private imgService:ImageService) { }

  ngOnInit() {
    this.imgService.getCollection();
  }

}
