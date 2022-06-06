import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})

export class GraphiqueComponent implements OnInit {
  // @ts-ignore
  numeroutilisateur :number = 156
  numerolibre :number = 35
  numerogroupe :number = 25
  numerovdn :number = 45
  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: true,
      type: 'pie',
      },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      data: [{
        name: 'Utilisateur',
        y: this.numeroutilisateur,
        color : "#5043c4"
      }, {
        name: 'Groupe',
        y: this.numerogroupe,
        color : "#c4c243"
      }, {
        name: 'VDN',
        y: this.numerovdn,
        color : "#d13b3b"
      }, {
        name: 'Libre',
        y: this.numerolibre,
        color : "#7ad13b"
      }]
    }]
  }
  constructor() { }

  ngOnInit() {
    Highcharts.chart('graphique', this.options);
  }
}
