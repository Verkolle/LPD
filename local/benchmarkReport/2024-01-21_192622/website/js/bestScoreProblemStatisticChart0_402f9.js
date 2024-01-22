
var chart_bestScoreProblemStatisticChart0_402f9 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_402f9'), {
    type: 'line',
    data: {
        labels: [
            423, 430, 439, 567, 568, 570, 605, 610, 631, 650, 689, 694, 715, 740, 766, 788, 1042, 1077, 1089, 1099, 1122, 1150, 1290, 1357, 1387, 1408, 1433, 1449, 1482, 1491, 1503, 1505, 1515, 1561, 1577, 1612, 1623, 1715, 1737, 1833, 1913, 1967, 2006, 2059, 2061, 2084, 2104, 2231, 2254, 2317, 2361, 2424, 2622, 2667, 2670, 2903, 3016, 3056, 3097, 3124, 3129, 3303, 3373, 3467, 3556, 3602, 3707, 3936, 4321, 4407, 4487, 4639, 4683, 4711, 4756, 4807, 4858, 4953, 5096, 5465, 5653, 6079, 6137, 7383, 8125, 8746, 9616, 9637, 9975, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -36, , , , , , , , -34, , -33, , -33, -32, , -29, , -29, -28, -28, , -27, , -25, , -25, , -24, , , -22, -22, , , , -21, -20, , , , -20, -19, , -19, -18, -17, -17, -16, -16, -13, , , -13, , -9, -9, , -8, , , -7, -7, , , -6, , -6, -5, -5, -4, -2, , , , , , , , , , , , , -2, -1, -1, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -36, , , , , , -35, , , -31, , -30, , -28, , , -28, , -27, , , , -27, , -25, , -25, , -24, , , , , , -24, , -22, , , , -22, -21, , , -20, , -18, , , , , , -18, -16, , -15, , , -15, , , -14, , , -14, -13, , -13, , , , , , -11, -11, -10, -10, -9, -9, , , -8, -6, , , , , , , -6
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -36, , -35, -34, -34, , -33, -32, , , , , , , , , , , , , , , , , , , , , , -31, -31, , , , -30, , , , -29, , , , , , , , , , , , , , , , , , , , , -28, , , , , , , , , , , , , , , , , , , -28, -26, , , -26, -25, , , , , -25
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
                text: 'Problem_4 best hard score statistic'
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
                        stepSize: 1
                        
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
  chart_bestScoreProblemStatisticChart0_402f9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_402f9.resize();
});
