import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { DashboardWidgetBatteryChargeComponent } from './dashboard-widget-battery-charge/dashboard-widget-battery-charge.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardWidgetComponent,
    DashboardWidgetBatteryChargeComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
