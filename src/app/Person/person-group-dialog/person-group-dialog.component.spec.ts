import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGroupDialogComponent } from './person-group-dialog.component';

describe('PersonGroupDialogComponent', () => {
  let component: PersonGroupDialogComponent;
  let fixture: ComponentFixture<PersonGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonGroupDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
