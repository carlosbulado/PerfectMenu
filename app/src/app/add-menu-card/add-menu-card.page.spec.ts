import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuCardPage } from './add-menu-card.page';

describe('AddMenuCardPage', () => {
  let component: AddMenuCardPage;
  let fixture: ComponentFixture<AddMenuCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
