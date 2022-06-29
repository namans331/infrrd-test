import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCoursesListComponent } from './upcoming-courses-list.component';

describe('UpcomingCoursesListComponent', () => {
  let component: UpcomingCoursesListComponent;
  let fixture: ComponentFixture<UpcomingCoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingCoursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
