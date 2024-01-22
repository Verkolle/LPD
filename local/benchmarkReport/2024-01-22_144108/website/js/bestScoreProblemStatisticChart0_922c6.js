
var chart_bestScoreProblemStatisticChart0_922c6 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_922c6'), {
    type: 'line',
    data: {
        labels: [
            5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 34, 35, 38, 47, 49, 75, 115, 10000
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -2, , -2, , , -1, , , , , , , , , , , , , , , , , 0, , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 100 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , , -2, -1, , , , , , , -1, , , , , , , , , , , 0, , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -2, , , , , , , , , , -2, , -1, , , , -1, , , 0, , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 200 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , -2, , , , -1, -1, , , , , , , , , , , , , , , , , , 0, , , , , 0
                  ]
                }, 
{
                  label: 'SA 200 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , , , -2, -1, , , , , , , -1, , , , , , , , , , 0, , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 200 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , , , , , , , , , , -2, -1, , , -1, , , , 0, , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 400 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , -2, , -1, , , , , , , , , , , , , , , , 0, , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 400 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , -2, , , , , , , , , , , , -2, -1, -1, 0, 0
                  ]
                }, 
{
                  label: 'SA 400 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , , , , , , , , , , , , , , , -2, -1, , , -1, , , 0, , , , , , 0
                  ]
                }, 
{
                  label: 'SA 800 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2, , , -2, , -1, , , , , , , , , , , , , , , , 0, , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 800 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2, , , , , -2, -1, , , , , , -1, , , , , , , , , , , , 0, , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 800 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2, , , , , , , , , , -2, , -1, , , , -1, , , 0, , , , , , , , , , , , , 0
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
                text: 'classExample_1_10 best hard score statistic'
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
                        stepSize: 0.01
                        
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
  chart_bestScoreProblemStatisticChart0_922c6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_922c6.resize();
});
