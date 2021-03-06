import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { DashboardWidgetBatteryChargeComponent } from './dashboard-widget-battery-charge/dashboard-widget-battery-charge.component';
import { DashboardWidgetDtcComponent } from './dashboard-widget-dtc/dashboard-widget-dtc.component';
import { DashboardWidgetMaintenanceLogComponent } from './dashboard-widget-maintenance-log/dashboard-widget-maintenance-log.component';
import { DashboardWidgetAdditionalResourcesComponent } from './dashboard-widget-additional-resources/dashboard-widget-additional-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardWidgetComponent,
    DashboardWidgetBatteryChargeComponent,
    DashboardWidgetDtcComponent,
    DashboardWidgetMaintenanceLogComponent,
    DashboardWidgetAdditionalResourcesComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
