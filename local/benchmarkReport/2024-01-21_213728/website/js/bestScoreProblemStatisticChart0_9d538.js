
var chart_bestScoreProblemStatisticChart0_9d538 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_9d538'), {
    type: 'line',
    data: {
        labels: [
            28, 29, 30, 32, 39, 44, 47, 59, 62, 64, 66, 74, 77, 81, 90, 101, 104, 125, 134, 150, 166, 182, 188, 191, 225, 238, 242, 243, 254, 260, 283, 284, 344, 363, 400, 420, 459, 481, 491, 579, 586, 621, 639, 640, 678, 681, 734, 748, 750, 825, 850, 881, 904, 980, 982, 1031, 1323, 1334, 1608, 1655, 3112, 3127, 3508, 3512, 4955, 4984, 7338, 9365, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -12, , , , , -10, , , -10, , , , -9, , , , , , , -9, , , -7, , , , , , , , -7, -6, -5, -4, -4, -3, -2, , , , , -2, , 0, , , , , , , , , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -12, , , , , , , , -10, , , , , -9, , , , , , , , , , , , , , , , , , , , , , , -9, , , -7, , , , , , , , -7, , -6, , -6, , -2, , , -2, 0, , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -12, , -10, , , -10, , , , -7, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -7, -5, , , , , , , , , , , , -4, -4, -3, , -2, -2, -1, 0, 0
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -12, , , -12, , , , -8, , , -8, , , , , , , , -7, , , , -7, , , -5, , , , , , , , , , , , , , -5, , -1, , , , , -1, , 0, , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -12, , , , , , , , , , , , , , , , -12, -11, -10, -9, , -8, , , -8, -6, , -6, -5, , -4, , , , , , , , , -4, -3, , , , , , -3, , , , , , , , -2, , -2, -1, , , , , , 0, , , , , 0
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
  chart_bestScoreProblemStatisticChart0_9d538.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_9d538.resize();
});
