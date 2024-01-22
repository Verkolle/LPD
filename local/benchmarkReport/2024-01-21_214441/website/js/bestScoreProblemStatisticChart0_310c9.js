
var chart_bestScoreProblemStatisticChart0_310c9 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_310c9'), {
    type: 'line',
    data: {
        labels: [
            91, 93, 96, 101, 105, 132, 145, 148, 149, 159, 162, 171, 172, 183, 201, 216, 222, 231, 286, 287, 299, 309, 319, 322, 340, 344, 361, 383, 429, 439, 450, 454, 479, 506, 541, 565, 578, 622, 623, 628, 682, 710, 730, 735, 738, 750, 790, 793, 822, 825, 831, 876, 896, 897, 914, 940, 943, 948, 953, 963, 984, 995, 1013, 1043, 1056, 1080, 1095, 1163, 1238, 1260, 1274, 1301, 1361, 1373, 1407, 1440, 1567, 1631, 1774, 2119, 2162, 2194, 2571, 2651, 2763, 2766, 2769, 2824, 3053, 3063, 3113, 3295, 3388, 3898, 4364, 4629, 4789, 5906, 6235, 6283, 7197, 9768, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -20, , , , , , , , , -18, , , -18, , , , -17, , , -16, , -14, , -14, , -13, , , , , , , , , , -13, , , , , -12, -10, , , -8, , , , , -8, , , , , , , -7, , , , , , , -7, , -5, , -5, -3, , , , , , -3, , , -2, , , , -2, -1, , , , , , , , , , , -1, , 0, , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -20, , , , , , , , , , , , -18, , , -17, , , , , , -15, , , , , , , , , , -15, , -13, , -12, , , -9, , -8, , , , -6, , , -5, , , , , , -5, , , , , , , , -2, , , , , , , , , , , -2, , -1, , , , , , , , , , , , , , -1, , , 0, , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -20, , , , -18, -17, , , , , , , , -16, , , -15, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -14, , , -14, -13, , , , , , , , , , , , , , , , , , , , , , , , , , , , -13, -12, -12, , , , , , -11, -11, , -9, , -9, -7, -5, -5, -2, -2
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , -20, , -19, , , , , -19, , , , , , , -18, , , , , -16, , -15, , -15, , -13, -13, , , , , , , -10, , -9, , , , , , , , , -9, , , , , , , , , , -8, , , , , , , , , -8, , , -7, , , -5, , , -5, -4, , -4, -2, -2, , , , , , -1, , -1, 0, , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -20, , , -18, , , , -17, , , , , -16, , , , , , , , , , , , , , -16, , , , -14, , -14, , , , , , , , , -11, , , -10, , , -8, , -8, , , -7, , , , , -7, -5, -5, -4, -4, , -2, , , , , , 0, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_310c9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_310c9.resize();
});
