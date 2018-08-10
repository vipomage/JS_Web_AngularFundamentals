import { CourseModel } from "../models/course.model";
import {UserModel} from "../models/user.model";

export interface AppState {
  readonly courses: CourseModel[];
  readonly users:UserModel[]
}
