
var chart_bestScoreProblemStatisticChart0_b33e0 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_b33e0'), {
    type: 'line',
    data: {
        labels: [
            84, 85, 88, 103, 117, 126, 129, 135, 159, 183, 192, 204, 257, 278, 284, 316, 362, 369, 379, 400, 462, 529, 644, 648, 677, 726, 731, 770, 796, 839, 863, 871, 882, 890, 931, 932, 950, 977, 994, 996, 1008, 1034, 1105, 1303, 1381, 1384, 1413, 1433, 1531, 1572, 1777, 1913, 1936, 1939, 1948, 1981, 2003, 2040, 2062, 2120, 2144, 2150, 2178, 2230, 2278, 2306, 2361, 2709, 2752, 2890, 2932, 3018, 3061, 3119, 3148, 3194, 3562, 3684, 4564, 4605, 5156, 5228, 5723, 5788, 6285, 6305, 7273, 7355, 7644, 10000, 10001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -25, , , , , , -25, , , , -24, , , , , , -23, , , , -20, , , -19, , , , , -17, , -17, , -16, , -15, , , , , , , , , , -15, , , , , , , , , , , -14, , -14, , , , , , , , , , , , , , , , , , , , , , , , -10, -10, , , -9, -9, 
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -25, , , , , , , , -23, , , -23, -22, , , -21, -20, , , , , , , , , -20, , , , , , , , , , , -19, , , -19, , , , , , , -17, , , , , , , , , , , , , , , , -17, -11, -10, , , , , -10, -9, -9, -8, , -8, -7, , , -7, -5, , , , , , , , , , , -5
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -25, , , , , -25, -23, , , -21, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -19, -19, , , , , , , , , , , , , , , , , , , , , , , -18, , , , , , , , -18, -16, , , , , -16, -13, , , , , , -13, 
                  ]
                }, 
{
                  label: 'SA 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -25, , , -23, , , , , , , , , , , , , -23, -22, , , -22, , , , , , , -21, , -21, , -20, , , , , , -20, , -19, , -19, -18, , , , , -18, -16, , , -16, , -14, -14, -13, , , , , , , , , , , -13, , , , , , -12, , , , , , , -12, -11, , , , , -11, -10, , -10, 
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -25, , , -23, , , , -23, , , , , -22, , , , , , -21, , -21, , -19, , , -19, , -18, , , , , -18, , , , , , , -12, , , , , , , , , -12, -11, , -11, , , , -10, , -10, , -9, , , , -9, -8, , , , , , , , , , , , , , , , , , , , , , , -8, 
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
                suggestedMax: 10001,
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
  chart_bestScoreProblemStatisticChart0_b33e0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_b33e0.resize();
});
