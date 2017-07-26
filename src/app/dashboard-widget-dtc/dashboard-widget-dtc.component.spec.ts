import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetDtcComponent } from './dashboard-widget-dtc.component';

describe('DashboardWidgetDtcComponent', () => {
  let component: DashboardWidgetDtcComponent;
  let fixture: ComponentFixture<DashboardWidgetDtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWidgetDtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWidgetDtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
