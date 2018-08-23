import { Injectable } from '@angular/core';
import {Course} from './course.model';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class CourseServiceService {
  courseList: AngularFireList<any>;
  selectedCourse: Course = new Course();
  constructor(private firebase: AngularFireDatabase) {

  }

  getData() {
    this.courseList = this.firebase.list('courses');
    return this.courseList;
  }

  insertData(course: Course) {
    this.courseList.push({
      name: course.name,
      address: course.address,
      price: course.price,
      teacher: course.teacher
    });
  }

  updateData(course: Course) {
    this.courseList.update(course.$key,
    {
      name: course.name,
      address: course.address,
      price: course.price,
      teacher: course.teacher
    });
  }

  deleteData(key: string) {
    console.log(key);

    this.courseList.remove(key);
  }



}
