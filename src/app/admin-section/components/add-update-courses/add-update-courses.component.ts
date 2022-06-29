import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../../models/courses.model';
import { AdminSectionService } from '../../services/admin-section.service';

@Component({
  selector: 'app-add-update-courses',
  templateUrl: './add-update-courses.component.html',
  styleUrls: ['./add-update-courses.component.scss']
})
export class AddUpdateCoursesComponent implements OnInit {
  courseId!: number;
  courseDetails!: Courses;
  public formGroup!: FormGroup;
  constructor(private route: ActivatedRoute,
    private adminService: AdminSectionService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      if (this.courseId) {
        this.getCourseDetails();
      }
    });

  }

  /** get course details based on id */
  getCourseDetails() {
    this.adminService.getCourseDetailsBasedOnId(this.courseId).subscribe((res: Courses) => {
      this.courseDetails = res;
      this.patchForm();
    })
  }

  /** update form for edit on page load */
  patchForm() {
    this.formGroup.patchValue({
      title: this.courseDetails.title,
      startDate: this.courseDetails.startDate,
      endDate: this.courseDetails.endDate,
      weekendsOnly: this.courseDetails.weekendsOnly,
      sessionTimeInHour: this.courseDetails.sessionTimeInHour,
      durationInMonth: this.courseDetails.durationInMonth,
      tutorPhoneNumber: this.courseDetails.tutorPhoneNumber,
      tutor: this.courseDetails.tutor,
      description: this.courseDetails.description 
    });
  }


  /** add courses form initialization */
  initializeForm() {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      startDate: [null,Validators.required],
      endDate: [null,Validators.required],
      weekendsOnly: [false, Validators.required],
      sessionTimeInHour: [null, Validators.required],
      durationInMonth: [null, Validators.required],
      tutorPhoneNumber: [null, Validators.required],
      tutor: [null, Validators.required],
      description: [null, Validators.required]
    });
  }
}
