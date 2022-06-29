import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoureseListComponent } from './components/courese-list/courese-list.component';
import { UpcomingCoursesListComponent } from './components/upcoming-courses-list/upcoming-courses-list.component';
import { NominationPaticipentListComponent } from './components/nomination-paticipent-list/nomination-paticipent-list.component';
import { CoursesCompletedListComponent } from './components/courses-completed-list/courses-completed-list.component';
import { AdminSectionService } from './services/admin-section.service';
import { AddUpdateCoursesComponent } from './components/add-update-courses/add-update-courses.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'courses-list', pathMatch: 'full'
  },
  {
    path: 'courses-list', component: CoureseListComponent
  },
  {
    path: 'courses-completed', component: CoursesCompletedListComponent
  },
  {
    path: 'nomination-participent', component: NominationPaticipentListComponent
  },
  {
    path: 'add-courses', component: AddUpdateCoursesComponent
  },
  {
    path: 'update-courses/:id', component: AddUpdateCoursesComponent
  },
  {
    path: 'upcoming-courses', component: UpcomingCoursesListComponent
  }

]

@NgModule({
  declarations: [
    CoureseListComponent,
    UpcomingCoursesListComponent,
    NominationPaticipentListComponent,
    CoursesCompletedListComponent,
    AddUpdateCoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AdminSectionService
  ]
})
export class AdminSectionModule { }
