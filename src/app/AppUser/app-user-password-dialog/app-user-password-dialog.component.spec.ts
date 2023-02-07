import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserPasswordDialogComponent } from './app-user-password-dialog.component';

describe('AppUserPasswordDialogComponent', () => {
  let component: AppUserPasswordDialogComponent;
  let fixture: ComponentFixture<AppUserPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserPasswordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
