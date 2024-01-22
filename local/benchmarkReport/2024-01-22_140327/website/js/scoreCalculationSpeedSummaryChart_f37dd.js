
var chart_scoreCalculationSpeedSummaryChart_f37dd = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_f37dd'), {
    type: 'line',
    data: {
        labels: [
            120, 480, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                    borderWidth: 1
                  ,
                  data: [
                    65422, 39647, 31208, 29016, 29866, 33838
                  ]
                }, 
{
                  label: 'SA 1 200',
                    borderWidth: 1
                  ,
                  data: [
                    65421, 39735, 31042, 29504, 29840, 33969
                  ]
                }, 
{
                  label: 'SA 1 400',
                    borderWidth: 1
                  ,
                  data: [
                    65913, 39747, 31666, 30237, 29363, 34246
                  ]
                }, 
{
                  label: 'SA 2 100',
                    borderWidth: 1
                  ,
                  data: [
                    66104, 39467, 31500, 29234, 29459, 33888
                  ]
                }, 
{
                  label: 'SA 2 200',
                    borderWidth: 1
                  ,
                  data: [
                    66002, 39425, 31249, 29963, 29737, 34113
                  ]
                }, 
{
                  label: 'SA 2 400',
                    borderWidth: 1
                  ,
                  data: [
                    66734, 39588, 31620, 29550, 29351, 33919
                  ]
                }, 
{
                  label: 'SA 4 100',
                    borderWidth: 1
                  ,
                  data: [
                    66252, 40110, 31099, 29451, 29728, 34328
                  ]
                }, 
{
                  label: 'SA 4 200',
                    borderWidth: 1
                  ,
                  data: [
                    66249, 39426, 32328, 29537, 29749, 33961
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    65813, 39380, 31056, 30110, 30270, 34356
                  ]
                }, 
{
                  label: 'SA 8 100',
                    borderWidth: 1
                  ,
                  data: [
                    65621, 39840, 31354, 29866, 28629, 33861
                  ]
                }, 
{
                  label: 'SA 8 200',
                    borderWidth: 1
                  ,
                  data: [
                    65711, 39962, 31493, 29121, 29533, 34383
                  ]
                }, 
{
                  label: 'SA 8 400',
                    borderWidth: 1
                  ,
                  data: [
                    65807, 40062, 31860, 30159, 29604, 33528
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
                text: 'Score calculation speed summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale (logarithmic)'
                },
                ticks: {
                },
                suggestedMin: 0,
                suggestedMax: 186796,
                type: 'logarithmic',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Score calculation speed per second'
                },
                ticks: {
                        stepSize: 1000
                        
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
  chart_scoreCalculationSpeedSummaryChart_f37dd.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_f37dd.resize();
});
