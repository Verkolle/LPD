
var chart_bestScoreProblemStatisticChart0_66521 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_66521'), {
    type: 'line',
    data: {
        labels: [
            83, 86, 127, 129, 141, 185, 218, 229, 237, 243, 329, 330, 355, 376, 380, 526, 563, 575, 581, 601, 607, 621, 627, 640, 695, 821, 835, 870, 914, 1077, 1094, 1140, 1174, 1185, 1267, 1291, 1398, 1551, 1569, 1587, 1685, 1806, 2083, 2168, 2680, 2885, 2991, 3247, 3266, 3815, 3851, 3925, 3929, 4096, 4142, 4167, 4172, 4338, 4482, 4530, 4575, 4768, 4841, 4880, 5027, 5043, 5329, 5386, 5430, 5475, 5477, 5524, 5740, 5882, 5923, 6648, 6692, 7154, 7155, 7246, 7283, 7320, 7340, 7518, 7611, 7658, 8371, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -29, , , , , , , , , -28, -28, , -27, , -27, , -24, -24, , -22, , -21, -19, , -19, , , -18, , , -18, , -15, , , -15, -14, -14, , , , , -13, -13, -11, -11, -10, -10, , , , -9, , , , , , , , -9, -8, -8, -7, -6, -6, , , , -5, , , -5, , , , , , -3, -3, -2, -1, , , , , -1
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -29, , , , , , , , , -29, -28, , , -27, , -27, , -25, , , , , -24, , , -24, , -22, -20, , -19, -19, , -17, , -17, -16, , , , , , , -16, , , , , , , -14, , , , -14, , , -10, -10, -9, -9, , , , , , , -7, -6, -6, , -5, -5, , -4, -4, -3, , , , , , , -3, -2, 0, , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -29, , -29, -28, -27, -27, -26, -24, , , , , , , , , , , , -23, , , , , , , , , , , , , , , , , , , , -22, -21, -20, , , , , , , , , -18, -18, , , -16, -16, , , , , , , , , , , , , , , , , , , , , -14, -14, , , , , , , , -10, -10
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
                text: 'Problem_3 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_66521.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_66521.resize();
});
