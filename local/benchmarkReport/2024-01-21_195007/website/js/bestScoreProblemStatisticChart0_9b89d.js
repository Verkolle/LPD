
var chart_bestScoreProblemStatisticChart0_9b89d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_9b89d'), {
    type: 'line',
    data: {
        labels: [
            17, 19, 20, 22, 25, 28, 30, 35, 55, 60, 68, 80, 85, 96, 98, 115, 116, 117, 139, 149, 158, 160, 161, 168, 175, 185, 204, 218, 219, 248, 277, 327, 349, 379, 398, 408, 454, 490, 530, 560, 577, 604, 643, 657, 662, 663, 687, 697, 749, 770, 819, 842, 904, 1248, 1405, 1983, 2131, 2389, 2737, 2782, 2915, 3347, 3531, 3547, 3666, 4385, 4819, 5503, 10000, 10001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -13, , , , , , -13, , , , -12, , , -11, , -11, , , -10, , , , , , , , , , , , , -10, , , -9, , , , , , -9, , , , , -6, , -6, -5, -1, , , -1, 0, , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -13, , , , , , -13, , , , , -12, , , , , -11, , , , , , , , , , , , -11, , , -10, , , , , , , , , , , -10, , , -9, , , , -9, , , , , , -5, , , , , , , , , -5, 
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -13, , , , , -13, , , , , -12, , , , , , , , , , , , , , , -11, , , , , -11, , , , , , , , -10, , , -10, , -8, -6, , -6, , , , , , , -4, , , , -4, , , , -3, -2, , -2, -1, 0, 0, 
                  ]
                }, 
{
                  label: 'SA 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -13, , , , , -12, , , -11, , , , -11, , , , , , , , , , , -10, -8, -6, , , -6, -5, , , , , , , , , , , , , , , , , , , , , , , , , , , , -5, , , -1, -1, , , 0, , , , 0, 
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -13, , , , , -13, , , , , , , -12, , , -11, , -11, , , -9, , , , , -9, , , -8, , , -8, , , -7, , -7, , -5, -5, , , , , , , , , , , , , , , , , , , , , , , , , , , -1, 
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
                text: 'Problem_2 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_9b89d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_9b89d.resize();
});
