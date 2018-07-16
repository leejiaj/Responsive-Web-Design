import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFlexbox2Component } from './demo-flexbox2.component';

describe('DemoFlexbox2Component', () => {
  let component: DemoFlexbox2Component;
  let fixture: ComponentFixture<DemoFlexbox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFlexbox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFlexbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
