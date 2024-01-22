
var chart_bestScoreProblemStatisticChart1_803ba = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_803ba'), {
    type: 'line',
    data: {
        labels: [
            3, 4, 5, 7, 8, 9, 10, 15, 17, 18, 20, 25, 26, 30, 64, 66, 67, 68, 74, 79, 87, 91, 93, 97, 106, 123, 125, 155, 161, 165, 166, 168, 172, 179, 181, 214, 224, 239, 293, 369, 472, 698, 742, 744, 1043, 1951, 2811, 3002, 3050, 3098, 3147, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , -868, , , , , , , , , , , , , , -857, , , , , , -855, , , , , , -750, -748, -747, -743, , , , , , -740, -737, -734, -732, -730, -730
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -868, , , , , , , , -857, , , , , , , , -855, , , -748, , -747, , , , , , , , , , , , , -743, , , -732, -730, , , , , , -730
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -868, , , , -866, -860, , , , -750, , , -749, -740, , -739, , , , , , -737, , -736, , , , , , , , -735, , -733, -732, -730, , , , , , , , , , , , , , , -730
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -868, , , -866, -857, -856, , , , -855, , , , , , -761, , -755, -753, -752, -745, -740, , , , , , -739, , -735, -733, , , , , , , , , , , , -732, -730, , , , , , , , -730
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -868, , -866, , , -860, , , -856, , , , -855, , -748, , , , , , , , , , , , , , , , , , , -747, , , , , , , , , , , , , , , , , , -747
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
                text: 'classExample5 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_803ba.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_803ba.resize();
});
