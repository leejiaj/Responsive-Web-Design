import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFlexbox1Component } from './demo-flexbox1.component';

describe('DemoFlexbox1Component', () => {
  let component: DemoFlexbox1Component;
  let fixture: ComponentFixture<DemoFlexbox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFlexbox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFlexbox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
