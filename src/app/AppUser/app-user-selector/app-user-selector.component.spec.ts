import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserSelectorComponent } from './app-user-selector.component';

describe('AppUserSelectorComponent', () => {
  let component: AppUserSelectorComponent;
  let fixture: ComponentFixture<AppUserSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
