import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetMaintenanceLogComponent } from './dashboard-widget-maintenance-log.component';

describe('DashboardWidgetMaintenanceLogComponent', () => {
  let component: DashboardWidgetMaintenanceLogComponent;
  let fixture: ComponentFixture<DashboardWidgetMaintenanceLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWidgetMaintenanceLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWidgetMaintenanceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
