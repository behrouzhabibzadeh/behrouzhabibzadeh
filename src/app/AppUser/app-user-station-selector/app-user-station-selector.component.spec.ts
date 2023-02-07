import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserStationSelectorComponent } from './app-user-station-selector.component';

describe('AppUserStationSelectorComponent', () => {
  let component: AppUserStationSelectorComponent;
  let fixture: ComponentFixture<AppUserStationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserStationSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserStationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
