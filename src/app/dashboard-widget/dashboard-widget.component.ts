import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.css']
})
export class DashboardWidgetComponent implements OnInit {
  @Input() title;
  @Input() value;
  @Input() unit;
  @Input() percentageChange;

  // @Input() chartType;
  // @Input() chartValue1;
  // @Input() chartValue2;

  chart;
  @Input() chartOptions;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.chartOptions);
  }

}