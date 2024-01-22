
var chart_bestScoreProblemStatisticChart1_f2ae1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_f2ae1'), {
    type: 'line',
    data: {
        labels: [
            6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 21, 23, 28, 31, 33, 34, 38, 39, 46, 47, 60, 61, 65, 66, 67, 69, 70, 71, 73, 74, 89, 93, 97, 104, 107, 115, 152, 191, 208, 223, 258, 276, 340, 412, 500, 542, 1940, 3101, 3119, 3237, 3383, 3384, 3386, 3472, 4019, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -781, , , , , , , , , , , -778, , , , , , -781, , , , -776, , , , , , , -773, , , , , -760, -756, -753, , -749, -747, , , , , , , , , , , , , , , -747
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -781, , , , , , , , , , , , , -784, , , , , , , , -779, , , , , , , , , , , , -776, , -767, , -761, , , -757, -753, -750, -747, , , , , , , , , , , -747
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -781, , , -780, -778, , , -773, -767, , , , , , -769, , , , , , , , , , , , , -768, , , , , , , , , , , , , , , , , , , -756, -755, -754, -752, -750, -749, -748, -747, -747
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -781, , , , , -780, -774, -770, , -769, , , , , , , -767, , -1088, -1084, -1083, , , , -759, -757, , -754, , -752, , -750, -748, , , , , , , , , , , , , -747, -745, , , , , , , , , -745
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -781, , , -780, , , , , , , -776, -774, -767, , , , , -760, , -758, , -752, , , , , -748, , , , , , , -747, , , , , , , , , , , , , , , , , , , , , , -747
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
                text: 'classExample_1_10 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_f2ae1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_f2ae1.resize();
});
