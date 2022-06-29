import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCompletedListComponent } from './courses-completed-list.component';

describe('CoursesCompletedListComponent', () => {
  let component: CoursesCompletedListComponent;
  let fixture: ComponentFixture<CoursesCompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesCompletedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
