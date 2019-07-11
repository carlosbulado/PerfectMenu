import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardPage } from './menu-card.page';

describe('MenuCardPage', () => {
  let component: MenuCardPage;
  let fixture: ComponentFixture<MenuCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
