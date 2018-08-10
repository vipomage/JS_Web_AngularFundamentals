import {CourseModel} from "../../models/course.model";
import * as CourseActions from '../actions/courses.actions';

const initialState : CourseModel = {
  name: 'Angular Fundamentals July 2018',
  url: 'https://softuni.bg/trainings/2037/angular-fundamentals-july-2018'
}

function removeTutorial(state, action : CourseActions.RemoveCourse) {
  const itemToRemove = state[action.payload];
  return [...state.filter(a => a !== itemToRemove)];
}

export function coursesReducer(state : CourseModel[] = [initialState], action: CourseActions.Actions) {
  switch(action.type) {
    case CourseActions.ADD_COURSE:
      return [...state, action.payload];
    case CourseActions.REMOVE_COURSE:
      return removeTutorial(state, action as CourseActions.RemoveCourse);
    default:
      return state;
  }
}
