import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceDialogComponent } from './province-dialog.component';

describe('ProvinceDialogComponent', () => {
  let component: ProvinceDialogComponent;
  let fixture: ComponentFixture<ProvinceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
