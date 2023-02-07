import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserStationDialogComponent } from './app-user-station-dialog.component';

describe('AppUserStationDialogComponent', () => {
  let component: AppUserStationDialogComponent;
  let fixture: ComponentFixture<AppUserStationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserStationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserStationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
