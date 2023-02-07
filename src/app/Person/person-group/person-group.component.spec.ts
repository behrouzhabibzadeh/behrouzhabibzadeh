import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGroupComponent } from './person-group.component';

describe('PersonGroupComponent', () => {
  let component: PersonGroupComponent;
  let fixture: ComponentFixture<PersonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
