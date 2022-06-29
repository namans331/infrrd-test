import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTopicListComponent } from './training-topic-list.component';

describe('TrainingTopicListComponent', () => {
  let component: TrainingTopicListComponent;
  let fixture: ComponentFixture<TrainingTopicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingTopicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
