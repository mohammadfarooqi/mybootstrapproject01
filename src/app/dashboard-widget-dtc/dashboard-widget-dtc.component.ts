import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget-dtc',
  templateUrl: './dashboard-widget-dtc.component.html',
  styleUrls: ['./dashboard-widget-dtc.component.css']
})
export class DashboardWidgetDtcComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
