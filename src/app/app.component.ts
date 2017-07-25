import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  barChart = {
    chart: {
      type: 'bar',
      height: '81%'
    },
    series: [{
      name: 'L1',
      data: [1, 2]
    }],
    title: null,
    legend: {
      enabled: false
    },
    xAxis: [{
      // visible: false,
      labels: {
        enabled: false
      }
    }],
    yAxis: [{
      visible: false
    }],
    credits: {
      enabled: false
    }
  }

  stackedColumnChart = {
    chart: {
      type: 'column',
      height: '81%'
    },
    series: [{
        name: 'John',
        data: [5]
    }, {
        name: 'Jane',
        data: [3]
    }],
    title: null,
    legend: {
      enabled: false
    },
    xAxis: [{
      // visible: false,
      labels: {
        enabled: false
      },
    }],
    yAxis: [{
      visible: false
    }],
    plotOptions: {
      column: {
        stacking: 'normal',
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    credits: {
      enabled: false
    }
  }

  semiCircleDonutChart = {
    chart: {
      height: '81%'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['Firefox',   55],
        ['IE',       20],
      ]
    }],
    title: null,
    credits: {
      enabled: false
    }
  }

  basicColumnChart = {
    chart: {
      type: 'column',
      height: '81%'
    },
    series: [{
      name: 'L1',
      data: [1, 2]
    }],
    title: null,
    legend: {
      enabled: false
    },
    xAxis: [{
      labels: {
        enabled: false
      },
      categories: [
        'Jan',
        'Feb'
      ],
      crosshair: true
    }],
    yAxis: [{
      visible: false
    }],
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    credits: {
      enabled: false
    }
  }
}
