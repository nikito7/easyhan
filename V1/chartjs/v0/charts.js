var TITLE = 'Energia - ' + URL + ' - V008';
var X_AXIS = '';
var Y_AXIS = 'kWh';
var BEGIN_AT_ZERO = false;
var SHOW_GRID = true;
var SHOW_LEGEND = true;
var CanvasID = 'chart';

$(document).ready(function() {

  $.get(URL, {
    '_': $.now()
  }, function(csvString) {

    var data = Papa.parse(csvString).data;
    var timeLabels = data.slice(1).map(function(row) {
      return row[0];
    });

    var datasets = [];
    for (var i = 1; i < data[0].length; i++) {
      datasets.push({
        label: data[0][i], // column name
        data: data.slice(1).map(function(row) {
          return row[i]
        }), // data in that column
        fill: false // `true` for area charts,
      })
    }

    // Get container for the chart
    var ctx = document.getElementById(CanvasID).getContext('2d');

    Chart.defaults.global.elements.point.radius = 2;
    Chart.defaults.global.elements.point.pointStyle = 'circle';
    Chart.defaults.global.elements.line.borderWidth = 2;

    new Chart(ctx, {
      type: 'line',

      data: {
        labels: timeLabels,
        datasets: datasets,
      },

      options: {
        title: {
          display: true,
          text: TITLE,
          fontSize: 14,
        },
        legend: {
          display: SHOW_LEGEND,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: X_AXIS !== '',
              labelString: X_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            }
          }],
          yAxes: [{
            stacked: false, // `true` for stacked area chart, `false` otherwise
            beginAtZero: true,
            scaleLabel: {
              display: Y_AXIS !== '',
              labelString: Y_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              beginAtZero: BEGIN_AT_ZERO,
              callback: function(value, index, values) {
                return value.toLocaleString()
              }
            }
          }]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem, all) {
              return all.datasets[tooltipItem.datasetIndex].label +
                ': ' + tooltipItem.yLabel.toLocaleString();
            }
          }
        },
        plugins: {
          colorschemes: {
            /*
              Replace below with any other scheme from
              https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
            */
            scheme: 'brewer.DarkTwo5'
          }
        }
      }
    });

  });

});

// EOF
