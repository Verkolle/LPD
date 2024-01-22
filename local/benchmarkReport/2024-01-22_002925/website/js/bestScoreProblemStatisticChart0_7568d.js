
var chart_bestScoreProblemStatisticChart0_7568d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_7568d'), {
    type: 'line',
    data: {
        labels: [
            25, 27, 28, 29, 32, 36, 40, 47, 52, 56, 63, 69, 83, 98, 104, 117, 122, 148, 154, 168, 171, 192, 196, 204, 225, 258, 297, 304, 336, 346, 359, 400, 466, 534, 646, 683, 703, 708, 740, 809, 837, 895, 900, 913, 915, 937, 1024, 1082, 1083, 1128, 1247, 1271, 2892, 4417, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -9, , , , , , , , -6, , -6, , , , , -4, , , , -3, , , , , , -3, -2, , , , -2, , , , , , -1, , , -1, , , , , , , , 0, , , , , 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , -9, , , , , , , , , -7, , , -7, , , , , -5, , , -4, , , -3, , -3, , , , , -2, , , , -2, , -1, , , , -1, , 0, , , , , , 0
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -9, , , , , , , , -7, , , , , -6, -6, , , , , -5, , , , , , , , , , -5, , , -4, -3, , , , , -3, , , , -2, -2, , , -1, , , 0, , , , 0
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -9, , , , -9, , -5, -5, -4, , , , , , , , , , , -4, -2, , , , -2, , , , , , , -1, , , , , , , , , , , , , , , , , , , , , -1, 0, 0
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -9, , -9, , , , , , -7, , -5, , , -5, , , , , , -4, , , -3, , , , , , , , , , -3, , -2, , , , , , , , -2, , , , , , 0, , , 0
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
  chart_bestScoreProblemStatisticChart0_7568d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_7568d.resize();
});
