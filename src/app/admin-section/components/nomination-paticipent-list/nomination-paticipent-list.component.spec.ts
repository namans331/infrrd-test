import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationPaticipentListComponent } from './nomination-paticipent-list.component';

describe('NominationPaticipentListComponent', () => {
  let component: NominationPaticipentListComponent;
  let fixture: ComponentFixture<NominationPaticipentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationPaticipentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationPaticipentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
