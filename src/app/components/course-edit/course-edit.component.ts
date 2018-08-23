import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../shared/course-service.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-Toastr';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  constructor(public courseService: CourseServiceService, private toast: ToastrService) { }

  ngOnInit() {
    this.courseService.getData();
    this.resetForm();
  }

  onSubmit(courseForm: NgForm) {
    if (this.courseService.selectedCourse.$key === null) {
      this.courseService.insertData(this.courseService.selectedCourse);
      this.toast.info('Insert successfully!', 'Notification of CuongHandsome');

    } else {
      this.courseService.updateData(this.courseService.selectedCourse);
      this.toast.success('Update successfully!', 'Notification of CuongHandsome');
    }
    this.resetForm();
  }

  resetForm(courseForm?: NgForm) {
    if (courseForm != null) {
      courseForm.reset();
    }
    this.courseService.selectedCourse = {
      $key: null,
      name: '',
      teacher: '',
      address: '',
      price: ''
    };
  }
}
