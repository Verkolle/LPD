
var chart_bestScoreProblemStatisticChart1_1ae44 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_1ae44'), {
    type: 'line',
    data: {
        labels: [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 23, 26, 27, 31, 32, 33, 34, 37, 38, 44, 53, 57, 60, 64, 82, 84, 85, 91, 112, 118, 121, 242, 243, 245, 10000
        ],
        datasets: [
            {
                  label: 'LAHC 100 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , -709, , , , , , , , -705, , , , , -704, -700, , , -699, -698, -696, -375, -371, -366, -366
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , -709, , , , , -705, -701, , , -699, , -698, , , , , , , , , , , , , , -371, -366, , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , -709, , , , , -705, -700, , , -381, -376, -366, , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , -709, , , , -704, -700, , , , -381, , -366, , , , , , , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -709, , -705, , -700, , , , -698, -696, , , , , , , , , , , , , -375, -366, , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , -701, , -699, , , -698, , , , , , , , , , , , , , , , , , , , , -371, -366, , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , -705, -700, , , , -381, -376, -366, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , , -704, -700, , , , -381, -366, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , -705, , -700, , , , -699, -696, , , , , , , , , , , , -371, -366, , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -709, , -701, , , -699, , -698, , , , , , , , , , , , , , , , , , , , -371, -366, , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -709, , , -705, , -700, , , , , -381, -366, , , , , , , , , , , , , , , , , , , , , , , , , , , -366
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -709, , , , -704, , -700, , , -381, , -366, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -366
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
  chart_bestScoreProblemStatisticChart1_1ae44.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_1ae44.resize();
});
