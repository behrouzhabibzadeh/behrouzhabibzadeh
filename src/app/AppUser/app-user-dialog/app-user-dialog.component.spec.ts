import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserDialogComponent } from './app-user-dialog.component';

describe('AppUserDialogComponent', () => {
  let component: AppUserDialogComponent;
  let fixture: ComponentFixture<AppUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
