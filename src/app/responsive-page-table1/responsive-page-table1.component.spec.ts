import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivePageTable1Component } from './responsive-page-table1.component';

describe('ResponsivePageTable1Component', () => {
  let component: ResponsivePageTable1Component;
  let fixture: ComponentFixture<ResponsivePageTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivePageTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivePageTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
