import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogActionSelectorComponent } from './app-log-action-selector.component';

describe('AppLogActionSelectorComponent', () => {
  let component: AppLogActionSelectorComponent;
  let fixture: ComponentFixture<AppLogActionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLogActionSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLogActionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
