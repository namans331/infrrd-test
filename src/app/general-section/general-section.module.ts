import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingMaterialsListComponent } from './components/reading-materials-list/reading-materials-list.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { PptListComponent } from './components/ppt-list/ppt-list.component';
import { CaseStudiesListComponent } from './components/case-studies-list/case-studies-list.component';
import { RolePlayScenariosListComponent } from './components/role-play-scenarios-list/role-play-scenarios-list.component';
import { WorksheetsListComponent } from './components/worksheets-list/worksheets-list.component';
import { HandoutReferencesListComponent } from './components/handout-references-list/handout-references-list.component';
import { PracticeTestsListComponent } from './components/practice-tests-list/practice-tests-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TrainingTopicListComponent } from './components/training-topic-list/training-topic-list.component';
import { CourseCategoryComponent } from './components/course-category/course-category.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'training-topics', pathMatch: 'full'
  },
  {
    path: 'training-topics', component: TrainingTopicListComponent
  },
  {
    path: 'reading-materials', component: ReadingMaterialsListComponent
  },
  {
    path: 'case-studies', component: CaseStudiesListComponent
  },
  {
    path: 'videos', component: VideoListComponent
  },
  {
    path: 'ppts', component: PptListComponent
  }
]

@NgModule({
  declarations: [
    ReadingMaterialsListComponent,
    VideoListComponent,
    PptListComponent,
    CaseStudiesListComponent,
    RolePlayScenariosListComponent,
    WorksheetsListComponent,
    HandoutReferencesListComponent,
    PracticeTestsListComponent,
    TrainingTopicListComponent,
    CourseCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class GeneralSectionModule { }
