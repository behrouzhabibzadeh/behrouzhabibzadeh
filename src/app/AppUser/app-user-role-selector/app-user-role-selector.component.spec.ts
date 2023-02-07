import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserRoleSelectorComponent } from './app-user-role-selector.component';

describe('AppUserRoleSelectorComponent', () => {
  let component: AppUserRoleSelectorComponent;
  let fixture: ComponentFixture<AppUserRoleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserRoleSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserRoleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
