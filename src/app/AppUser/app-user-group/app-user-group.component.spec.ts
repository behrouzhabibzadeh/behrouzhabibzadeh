import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserGroupComponent } from './app-user-group.component';

describe('AppUserGroupComponent', () => {
  let component: AppUserGroupComponent;
  let fixture: ComponentFixture<AppUserGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
