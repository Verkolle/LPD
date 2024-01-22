
var chart_bestScoreProblemStatisticChart0_de6d1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_de6d1'), {
    type: 'line',
    data: {
        labels: [
            5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 19, 20, 22, 24, 25, 28, 31, 33, 34, 35, 36, 37, 41, 43, 44, 47, 10000
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , -2, -1, , , -1, 0, , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 1 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , -2, -1, , , -1, 0, , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 1 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -2, , , -2, , -1, , -1, 0, , , , , , , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , -2, , -1, , , , , , , , , , , , , , , -1, , , 0, , , 0
                  ]
                }, 
{
                  label: 'SA 2 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , -2, , -1, , , , , , , , , , , , , , -1, , , 0, , , , 0
                  ]
                }, 
{
                  label: 'SA 2 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , -2, , , -1, , , , , , , , , , , , , , -1, , , 0, , 0
                  ]
                }, 
{
                  label: 'SA 4 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , , , , , , , -2, , -1, , , , , , , , -1, , , , , 0, 0
                  ]
                }, 
{
                  label: 'SA 4 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -2, , , , , , , , , -2, , -1, , , , , -1, , 0, , , , , , 0
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -2, , , , , , , , , , -2, , -1, , , , , -1, 0, , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 8 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2, , , , , , , , , , -2, , -1, , -1, 0, , , , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 8 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2, , , , , , , , , -2, , , -1, , , , -1, 0, , , , , , , , , , 0
                  ]
                }, 
{
                  label: 'SA 8 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , , , , , , , -2, , -1, , , , -1, 0, , , , , , , , , , 0
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
  chart_bestScoreProblemStatisticChart0_de6d1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_de6d1.resize();
});
