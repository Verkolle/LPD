
var chart_bestScoreProblemStatisticChart0_2e6c7 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_2e6c7'), {
    type: 'line',
    data: {
        labels: [
            96, 103, 133, 297, 309, 358, 384, 403, 404, 438, 463, 504, 777, 949, 998, 1152, 1251, 1306, 1319, 1336, 1339, 1340, 1353, 1488, 1592, 1642, 1783, 1806, 1935, 3478, 3526, 3599, 3837, 3858, 4263, 4284, 4304, 4397, 4566, 4612, 4654, 4660, 4814, 5015, 5060, 5138, 5203, 5348, 5357, 5533, 5540, 5714, 5908, 6096, 6167, 6292, 6343, 7253, 7258, 7445, 8280, 9791, 9971, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -19, , , -18, -18, , , -16, -16, -15, -15, , , , , , -9, , , , , , , , -9, -8, -8, , , , -7, -6, -6, -5, -5, -4, -4, , -3, , , , , -3, , , -2, , , , , -2, 0, , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -19, , , -19, , , -17, , , , , , -17, -15, -14, , -14, , , , , -13, -13, -12, -11, , , , -11, -10, , , , , , , , , -8, , -8, -7, -7, -6, , -6, -5, , , , -5, -4, , , -4, -1, , , -1, , 0, , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -19, , , -19, , , , , -17, , , , , , , , -16, , , -15, -15, -12, , , , , , , , , , -12, , , , , , , , , , , , , , , , , , -11, -11, , , , , , , -10, -10, , -8, , -6, -6
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
  chart_bestScoreProblemStatisticChart0_2e6c7.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_2e6c7.resize();
});
