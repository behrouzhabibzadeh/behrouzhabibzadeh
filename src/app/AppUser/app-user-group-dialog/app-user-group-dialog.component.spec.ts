import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserGroupDialogComponent } from './app-user-group-dialog.component';

describe('AppUserGroupDialogComponent', () => {
  let component: AppUserGroupDialogComponent;
  let fixture: ComponentFixture<AppUserGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserGroupDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
