import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from '../models/courses.model';
import { environment } from 'src/environments/environment';
import {Observable, observable} from 'rxjs'
@Injectable({
  providedIn: 'any'
})
export class AdminSectionService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  /** Add Courses method to call backend API */
  addCourses(courseDetails: Courses): Observable<Courses> {
    let url = `${this.baseUrl}/add-courses`;
    return this.http.post<Courses>(url, courseDetails);
  }

  /** get Course details for edit method to call backend API */
  getCourseDetailsBasedOnId(id: number): Observable<Courses> {
    let url = `${this.baseUrl}/course-details/${id}`;
    return this.http.get<Courses>(url);
  }

  /** Edit Courses method to call backend API */
  editCourses(courseDetails: Courses, courseId: number): Observable<Courses> {
    let url = `${this.baseUrl}/edit-courses/${courseId}`;
    return this.http.put<Courses>(url, courseDetails);
  }

}
