
var chart_bestScoreProblemStatisticChart1_329de = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_329de'), {
    type: 'line',
    data: {
        labels: [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 47, 62, 104, 105, 106, 108, 110, 136, 195, 197, 205, 207, 217, 10000
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , -709, , , , , , , , , , , -705, -701, , , , , , -700, -379, -375, -370, -369, -366, -366
                  ]
                }, 
{
                  label: 'SA 1 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , -709, , , , , -705, , , , -701, , , , , , , , , -700, , , , , , , , -383, -382, -370, -369, -366, , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 1 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -709, , -705, , , , , -704, , , , -700, -381, -378, -368, , , , , , , , -366, , , , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , , -705, -700, , -381, , -370, , , -368, -366, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 2 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , , -704, -700, , , , , , , , , , , , , , , -383, -380, -374, , , -372, , -366, , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 2 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -709, , , -704, , -700, , , , , , , , , , , , , , , , , , , , , , -382, -370, , , -366, , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 4 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , -705, -704, -700, , , , , , , , , , , , , , , , , , , , , , -383, -376, , -371, -369, -366, , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 4 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , -704, -700, , , , , , , , , , , , , , , , , , , , -379, -369, -366, , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -709, , -704, -700, , , , , -382, -372, -371, , , -368, , , , , , , -366, , , , , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 8 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , -705, -700, , , , , , , -378, , -371, -368, , , , , , , , , , , , , , , , , , , -366, , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 8 200',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -709, , -705, -700, , , , , -378, -369, , , , , , , , , -368, , , , , , , , , , , -366, , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'SA 8 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -709, , -704, -700, , , , , , , -377, , -376, -375, , -372, -371, -366, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -366
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
                text: 'classExample_0_5 best soft score statistic'
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
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_bestScoreProblemStatisticChart1_329de.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_329de.resize();
});
