
var chart_bestScoreProblemStatisticChart0_860bf = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_860bf'), {
    type: 'line',
    data: {
        labels: [
            92, 97, 100, 105, 106, 134, 145, 159, 161, 162, 166, 167, 171, 187, 195, 211, 232, 251, 284, 302, 305, 307, 310, 327, 350, 370, 402, 412, 433, 457, 481, 510, 554, 565, 575, 581, 595, 631, 694, 724, 745, 746, 751, 766, 769, 795, 806, 833, 850, 875, 903, 914, 953, 961, 981, 993, 994, 997, 1008, 1010, 1046, 1064, 1079, 1100, 1105, 1220, 1253, 1274, 1325, 1333, 1366, 1411, 1452, 1525, 1589, 1786, 2106, 2151, 2185, 2603, 2684, 2791, 2861, 2864, 2866, 3031, 3077, 3096, 3476, 3979, 4417, 4671, 4851, 5948, 6276, 6321, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -20, , , , , , , , , , -18, , -18, , , -17, , , , -16, , , -14, -14, -13, , , , , , , , , , , -13, , , -12, -10, , , -8, , , , , -8, , , , -7, , , , , , , , , -7, , , -5, , -5, -3, , , , , -3, , , -2, , , , -2, -1, , , , , , , , , , -1, , 0, , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -20, , , , , , , , , , , , -18, , , -17, , , , , , -15, , , , , , , , -15, , -13, , -12, , , , -9, -8, , , , -6, , , , -5, , , , -5, , , , , , , , -2, , , , , , , , , , , , -2, -1, , , , , , , , , , , , -1, , , , 0, , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -20, , , , , -18, -17, , , , , , , -16, , , -15, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -14, , , , -14, -13, , , , , , , , , , , , , , , , , , , , , , , , , -13, -12, -12, , , , -11, -11, , -9, , -9, -7, -5, -5
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -20, , -19, , , , -19, , , , , , , -18, -16, , , , -15, , -15, , -13, -13, , , , , , , -10, -9, , , , , , , , , -9, , , , , , -8, , , , , , , , , , , , , -8, , -7, , , -5, , , , , -5, -4, , -4, -2, -2, , , -1, , , , -1, 0, , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -20, , , -18, , -17, , , , , , , -16, , , , , , , , , , , , , , -16, , -14, , -14, , , , , , , , , -11, , , , -10, , -8, , -8, , -7, , -7, -5, -5, , , , -4, -4, , -2, , , , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_860bf.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_860bf.resize();
});
