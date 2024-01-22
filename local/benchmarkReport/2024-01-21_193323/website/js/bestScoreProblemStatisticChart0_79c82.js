
var chart_bestScoreProblemStatisticChart0_79c82 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_79c82'), {
    type: 'line',
    data: {
        labels: [
            101, 118, 138, 159, 224, 337, 422, 433, 476, 496, 580, 599, 622, 646, 853, 875, 1018, 1062, 1083, 1105, 1168, 1209, 1228, 2239, 2263, 2818, 2840, 2864, 2885, 2892, 3001, 3716, 3941, 4029, 4254, 4983, 5003, 5115, 5348, 5589, 8010, 8038, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -24, -23, , , , -21, -21, -20, -20, , , -19, -19, -18, -18, -16, -15, -15, -14, -14, -13, -13, -12, -12, -11, -11, -10, , -8, -8, -7, -6, , -6, -5, -4, -4, -3, , , -3
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -24, -23, , , -23, -21, -21, , , , , -20, -17, , , , , , , , , , , , , , , , , -16, , , , , -13, , , , , , -13, -12, -12
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
  chart_bestScoreProblemStatisticChart0_79c82.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_79c82.resize();
});
