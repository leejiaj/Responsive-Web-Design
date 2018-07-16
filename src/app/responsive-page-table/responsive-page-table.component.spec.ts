import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivePageTableComponent } from './responsive-page-table.component';

describe('ResponsivePageTableComponent', () => {
  let component: ResponsivePageTableComponent;
  let fixture: ComponentFixture<ResponsivePageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivePageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivePageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
