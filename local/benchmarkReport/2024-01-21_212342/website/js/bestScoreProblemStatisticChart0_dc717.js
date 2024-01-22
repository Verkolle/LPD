
var chart_bestScoreProblemStatisticChart0_dc717 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_dc717'), {
    type: 'line',
    data: {
        labels: [
            80, 85, 86, 87, 88, 120, 121, 124, 134, 143, 158, 164, 181, 199, 201, 212, 233, 245, 272, 273, 298, 326, 337, 338, 339, 341, 352, 360, 387, 407, 410, 416, 462, 481, 487, 505, 508, 527, 545, 551, 556, 563, 594, 637, 674, 731, 745, 773, 821, 831, 839, 849, 885, 891, 901, 906, 917, 952, 972, 1021, 1038, 1046, 1054, 1111, 1229, 1415, 1449, 1466, 1472, 1515, 1533, 1559, 1636, 1841, 1934, 2090, 2591, 2874, 2913, 3210, 3299, 3329, 3370, 3514, 3631, 3675, 3763, 3836, 3851, 3916, 3940, 3987, 4053, 4066, 4169, 4185, 4468, 5123, 5407, 5610, 5906, 6004, 6327, 6552, 6914, 7424, 7512, 8014, 8115, 8635, 8804, 8947, 8948, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -20, , , , -19, , -18, , , , , , , -17, , -16, , , , , , , , -16, , -15, -14, , , , , , , -14, -13, -11, , , , , -11, -10, , , -10, , -9, , , -8, , , -8, , , , , , , -7, -7, , , -6, -5, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -5
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -20, , , , -19, , , , , -18, , , -18, , , , -15, , , , , , , , , , , , , -15, , , , , -14, , , , -14, , , -13, , , , , , , , , -13, , -12, , , , , -12, , , , , , , , , , -10, -8, , -7, , , , , , , , , , , , , , -7, -6, , -6, , , -5, , , , , , , -5, , , , -4, -4, , -3, , , , -3, -2, , , -2
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -20, , , , -19, , -18, , , , , , -18, -17, , , , , , , -16, -15, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -15, -14, -14, -13, , , , , -12, , , , , , , , , , , , , , , , -12, , , , , -11, , -10, , , , , -10, -7, -7
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -20, , , , , , , -20, -19, , , , , , , , , -18, , , , -18, , -17, , , , , -17, , -16, , , , , , -16, -15, , , , , , , -15, , , , , , , , , , , -14, -14, -11, , , , , , , , , , , , , , , , , , , , , , , , , , -11, , , -9, , -9, -8, -8, -7, -7, -5, , , -5, -4, , , , , , -4, -2, , , , , -2
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -20, , , , , , , , , , , , , , , , , , , -20, -19, , , , -19, , , , , , , -17, , -17, , , , , , , , , , , , -16, -14, , , , -14, , , , -13, , -11, -11, , , , , , , -10, -10, , , , , -9, , -9, -8, -8, , , , , -7, -7, -6, -5, , -5, , , , , -4, , , , , , , , , , , , , , , , , , , , , , , , -4
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
                text: 'classExample_3_50 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_dc717.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_dc717.resize();
});
