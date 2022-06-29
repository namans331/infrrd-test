import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTestsListComponent } from './practice-tests-list.component';

describe('PracticeTestsListComponent', () => {
  let component: PracticeTestsListComponent;
  let fixture: ComponentFixture<PracticeTestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeTestsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeTestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
