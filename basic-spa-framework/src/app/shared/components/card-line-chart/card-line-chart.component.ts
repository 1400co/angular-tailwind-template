import { Component, OnInit } from '@angular/core';
// Necesitamos importar Chart desde chart.js/auto
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: "app-card-line-chart",
  templateUrl: "./card-line-chart.component.html",
  
})
export class CardLineChartComponent implements OnInit {

  // Atributo que almacena los datos del chart
  public chart: Chart;

  ngOnInit(): void {

    // datos
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [{
        label: 'Ventas por meses',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'line' as ChartType, // tipo de la gráfica 
      data // datos 
    })

  }

}