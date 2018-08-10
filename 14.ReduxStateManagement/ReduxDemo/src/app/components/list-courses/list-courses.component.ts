import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as CourseActions from '../../store/actions/courses.actions';
import {CourseModel} from "../../models/course.model";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses : Observable<CourseModel[]>;

  constructor(
    private store : Store<AppState>
  ) {  }

  ngOnInit() {
    this.courses = this.store.select('courses');
  }

  delCourse(index) {
    this.store.dispatch(new CourseActions.RemoveCourse(index));
  }

}
