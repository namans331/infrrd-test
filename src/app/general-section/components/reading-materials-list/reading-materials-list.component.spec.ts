import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingMaterialsListComponent } from './reading-materials-list.component';

describe('ReadingMaterialsListComponent', () => {
  let component: ReadingMaterialsListComponent;
  let fixture: ComponentFixture<ReadingMaterialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingMaterialsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingMaterialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
