import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivePageFlexboxComponent } from './responsive-page-flexbox.component';

describe('ResponsivePageFlexboxComponent', () => {
  let component: ResponsivePageFlexboxComponent;
  let fixture: ComponentFixture<ResponsivePageFlexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivePageFlexboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivePageFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
