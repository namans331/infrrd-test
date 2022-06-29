import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoutReferencesListComponent } from './handout-references-list.component';

describe('HandoutReferencesListComponent', () => {
  let component: HandoutReferencesListComponent;
  let fixture: ComponentFixture<HandoutReferencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandoutReferencesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoutReferencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
