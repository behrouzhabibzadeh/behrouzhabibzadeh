import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserStationComponent } from './app-user-station.component';

describe('AppUserStationComponent', () => {
  let component: AppUserStationComponent;
  let fixture: ComponentFixture<AppUserStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
