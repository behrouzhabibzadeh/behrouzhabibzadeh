import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserGroupSelectorComponent } from './app-user-group-selector.component';

describe('AppUserGroupSelectorComponent', () => {
  let component: AppUserGroupSelectorComponent;
  let fixture: ComponentFixture<AppUserGroupSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserGroupSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserGroupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
