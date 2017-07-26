import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetAdditionalResourcesComponent } from './dashboard-widget-additional-resources.component';

describe('DashboardWidgetAdditionalResourcesComponent', () => {
  let component: DashboardWidgetAdditionalResourcesComponent;
  let fixture: ComponentFixture<DashboardWidgetAdditionalResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWidgetAdditionalResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWidgetAdditionalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
