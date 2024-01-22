
var chart_bestScoreProblemStatisticChart0_96084 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_96084'), {
    type: 'line',
    data: {
        labels: [
            24, 26, 28, 31, 34, 39, 42, 51, 56, 57, 60, 68, 80, 93, 95, 102, 105, 109, 115, 140, 160, 178, 180, 182, 183, 229, 233, 252, 290, 342, 344, 348, 378, 384, 509, 526, 632, 640, 668, 692, 769, 787, 791, 834, 902, 905, 910, 948, 964, 1023, 1059, 1180, 1201, 1225, 1253, 1312, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -9, , , , , , , , -6, , , , , -6, , , , , , -4, , -3, , , -3, , , -2, , -2, , , , , , , -1, , , , , , -1, , , , 0, , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -9, , , , , , , , -7, , , , -7, , , , -5, , , , , , -4, , , -3, , -3, , , , , , , -2, , , -2, , , -1, , , , , -1, 0, , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -9, , , , , , , -7, , , , , -6, , , -6, , , -5, , , , , , , , , , , -5, , , , -4, -3, , , , , , -3, , -2, -2, , , , , -1, , , 0, , , 0
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -9, , , -9, , -5, -5, -4, , , , , , , , , , , , , -4, , -2, , , -2, , , , , , , -1, , , , , , , , , , , , , , , , , , , -1, , , 0, 0
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -9, , , -9, , , , , , , -7, , -5, , , , -5, , , , , , -4, , , , , -3, , , , , , , , , , , -3, -2, , , , , , , -2, , , , , , , , 0, , 0
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
                text: 'classExample_2_25 best hard score statistic'
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
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 0.1
                        
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
  chart_bestScoreProblemStatisticChart0_96084.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_96084.resize();
});
