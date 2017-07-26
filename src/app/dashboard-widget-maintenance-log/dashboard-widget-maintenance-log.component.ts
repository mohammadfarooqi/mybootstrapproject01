import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget-maintenance-log',
  templateUrl: './dashboard-widget-maintenance-log.component.html',
  styleUrls: ['./dashboard-widget-maintenance-log.component.css']
})
export class DashboardWidgetMaintenanceLogComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
