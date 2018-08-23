import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../shared/course-service.service';
import { Course } from '../shared/course.model';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Toast, ToastrService } from 'ngx-Toastr';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  items:  Course[];
  searchKey: String;
  a: any;
  constructor(private courseService: CourseServiceService, db: AngularFireDatabase, private toast: ToastrService) {

    const x = this.courseService.getData();
    this.courseService.getData();
    x.snapshotChanges().subscribe(item => {
      this.items = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        this.a = element.payload;
        y['$key'] = element.key;
        this.items.push(y as Course);
      });
    });
  }

  onEdit(course: Course) {
    console.log(course);
    this.courseService.selectedCourse = Object.assign({}, course);
  }

    onDelete(course: Course) {
      // tslint:disable-next-line:no-unused-expression
      (!confirm('Do you want to DELETE course ' + course.name)) || this.courseService.deleteData(course.$key);
      this.toast.error('Remove course ' + course.name + ' successfully', 'Notification from Cuong Handsome');
    }

  ngOnInit() {
  }
}
