import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget-additional-resources',
  templateUrl: './dashboard-widget-additional-resources.component.html',
  styleUrls: ['./dashboard-widget-additional-resources.component.css']
})
export class DashboardWidgetAdditionalResourcesComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
