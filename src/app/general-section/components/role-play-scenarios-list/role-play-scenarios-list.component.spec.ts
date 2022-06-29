import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePlayScenariosListComponent } from './role-play-scenarios-list.component';

describe('RolePlayScenariosListComponent', () => {
  let component: RolePlayScenariosListComponent;
  let fixture: ComponentFixture<RolePlayScenariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePlayScenariosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePlayScenariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
