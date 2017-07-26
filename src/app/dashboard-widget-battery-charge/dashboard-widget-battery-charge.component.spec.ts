import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetBatteryChargeComponent } from './dashboard-widget-battery-charge.component';

describe('DashboardWidgetBatteryChargeComponent', () => {
  let component: DashboardWidgetBatteryChargeComponent;
  let fixture: ComponentFixture<DashboardWidgetBatteryChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWidgetBatteryChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWidgetBatteryChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
