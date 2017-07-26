import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget-battery-charge',
  templateUrl: './dashboard-widget-battery-charge.component.html',
  styleUrls: ['./dashboard-widget-battery-charge.component.css']
})
export class DashboardWidgetBatteryChargeComponent implements OnInit {
  @Input() title;
  @Input() leftValue;
  @Input() leftUnit;
  @Input() rightValue;
  @Input() rightUnit;

  constructor() { }

  ngOnInit() {
  }

}
