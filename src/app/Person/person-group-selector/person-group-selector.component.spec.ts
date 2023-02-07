import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGroupSelectorComponent } from './person-group-selector.component';

describe('PersonGroupSelectorComponent', () => {
  let component: PersonGroupSelectorComponent;
  let fixture: ComponentFixture<PersonGroupSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonGroupSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonGroupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
