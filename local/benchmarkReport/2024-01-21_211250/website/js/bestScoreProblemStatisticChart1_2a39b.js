
var chart_bestScoreProblemStatisticChart1_2a39b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_2a39b'), {
    type: 'line',
    data: {
        labels: [
            6, 8, 9, 11, 47, 52, 60, 66, 71, 72, 77, 82, 83, 89, 90, 92, 99, 100, 105, 106, 110, 114, 119, 120, 136, 161, 164, 201, 226, 230, 249, 269, 345, 347, 352, 353, 373, 421, 502, 581, 643, 709, 2223, 2745, 3075, 8870, 8894, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -1102, , , -1101, , , , -1095, , , , , , -1094, , , , , , -1093, , , , , , -1420, -1419, , -1101, -1100, , , , -1093, -1092, , , , , , -1091, , , -1089, -1088, -1088
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -1102, , , , -1100, , , , , , , , , , -1094, , , , , , , -1093, , , , , , , , -1115, , , , , -1107, -1099, -1095, -1094, -1093, , , , , , -1093
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -1102, , , -1100, , -1095, , , , , , , , , , , , , , , , , , , -1094, -1093, , , -1093, , , , , , , , , , , , , , -1088, -1087, , , -1087
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -1102, , , , , , , , , , , -1099, -1098, -1109, -1108, , -1107, , -1106, -1101, -1096, , , -1094, , , , , , , , , , -1092, -1091, , , , , , , , , , , , , -1091
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -1102, , , , , , , , -1107, , -1104, , , , , , , , , , , , -1103, , , , , , , , , , , , , , , , , , , , , , , , , -1103
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'classExample10 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart1_2a39b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_2a39b.resize();
});
