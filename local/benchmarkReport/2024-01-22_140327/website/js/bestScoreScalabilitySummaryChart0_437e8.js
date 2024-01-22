
var chart_bestScoreScalabilitySummaryChart0_437e8 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_437e8'), {
    type: 'line',
    data: {
        labels: [
            120, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -4, -42
                  ]
                }, 
{
                  label: 'SA 1 200',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -2, -45
                  ]
                }, 
{
                  label: 'SA 1 400',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -12, -44
                  ]
                }, 
{
                  label: 'SA 2 100',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -14, -40
                  ]
                }, 
{
                  label: 'SA 2 200',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -12, -42
                  ]
                }, 
{
                  label: 'SA 2 400',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -13, -40
                  ]
                }, 
{
                  label: 'SA 4 100',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -8, -31
                  ]
                }, 
{
                  label: 'SA 4 200',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -7, -39
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    0, 0, -4, -32
                  ]
                }, 
{
                  label: 'SA 8 100',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -10, -37
                  ]
                }, 
{
                  label: 'SA 8 200',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -11, -51
                  ]
                }, 
{
                  label: 'SA 8 400',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -6, -53
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
                text: 'Best hard score scalability summary (higher is better)'
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
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                suggestedMin: 0,
                suggestedMax: 186796,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreScalabilitySummaryChart0_437e8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_437e8.resize();
});
