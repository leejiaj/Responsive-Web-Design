import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivePageTableBootstrapComponent } from './responsive-page-table-bootstrap.component';

describe('ResponsivePageTableBootstrapComponent', () => {
  let component: ResponsivePageTableBootstrapComponent;
  let fixture: ComponentFixture<ResponsivePageTableBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivePageTableBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivePageTableBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
