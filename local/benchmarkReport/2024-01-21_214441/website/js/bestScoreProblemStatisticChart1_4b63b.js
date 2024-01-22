
var chart_bestScoreProblemStatisticChart1_4b63b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_4b63b'), {
    type: 'line',
    data: {
        labels: [
            6, 7, 8, 9, 10, 12, 13, 14, 16, 18, 22, 23, 27, 28, 32, 36, 37, 41, 43, 44, 57, 61, 62, 63, 64, 65, 66, 69, 82, 87, 91, 98, 101, 107, 139, 143, 169, 196, 199, 231, 266, 325, 386, 465, 791, 2816, 2834, 2942, 3077, 3078, 3079, 3160, 3634, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -781, , , , , , , , -778, , , , , -781, , , , -776, , , , , , , -773, , , , , -760, -756, , -753, -749, , -747, , , , , , , , , , , , , , -747
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -781, , , , , , , , , , , , , -784, , , , , , , , , -779, , , , , , , , , -776, , , -767, , , -761, , -757, -753, -750, -747, , , , , , , , , , -747
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -781, , -780, -778, , -767, , , , , , , , -769, , , , , , , , , -768, , , , , , , , , , , , , , , , , , , , , , , -756, -755, -754, -752, -750, -749, -748, -747, -747
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -781, , , , , -780, -774, -770, -769, , , , , , -767, , , -1088, -1084, -1083, , , , -759, -757, -754, -752, , -750, -748, , , , , , , , , , , , , , -747, , , , , , , , , -747
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -781, , , -780, , , , , , -776, -774, -767, , , , -760, -758, , , -752, , , , -748, , , , , , , -747, , , , , , , , , , , , , , , , , , , , , , -747
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
  chart_bestScoreProblemStatisticChart1_4b63b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_4b63b.resize();
});
