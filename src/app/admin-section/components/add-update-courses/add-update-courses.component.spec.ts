import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCoursesComponent } from './add-update-courses.component';

describe('AddUpdateCoursesComponent', () => {
  let component: AddUpdateCoursesComponent;
  let fixture: ComponentFixture<AddUpdateCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
