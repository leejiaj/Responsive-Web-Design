import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFlexbox3Component } from './demo-flexbox3.component';

describe('DemoFlexbox3Component', () => {
  let component: DemoFlexbox3Component;
  let fixture: ComponentFixture<DemoFlexbox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFlexbox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFlexbox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
