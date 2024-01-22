
var chart_bestScoreScalabilitySummaryChart0_20635 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_20635'), {
    type: 'line',
    data: {
        labels: [
            120, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -28, -85
                  ]
                }, 
{
                  label: 'SA 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -23, -80
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                    borderWidth: 4
,
                  data: [
                    0, , 0, -13, -73
                  ]
                }, 
{
                  label: 'SA 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -1, -29, -84
                  ]
                }, 
{
                  label: 'SA 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -29, -86
                  ]
                }, 
{
                  label: 'SA 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -18, -84
                  ]
                }, 
{
                  label: 'SA 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -2, -37, -83
                  ]
                }, 
{
                  label: 'SA 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -29, -86
                  ]
                }, 
{
                  label: 'SA 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -21, -85
                  ]
                }, 
{
                  label: 'SA 800 1',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -8, -37, -83
                  ]
                }, 
{
                  label: 'SA 800 2',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -2, -34, -87
                  ]
                }, 
{
                  label: 'SA 800 4',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -21, -85
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
  chart_bestScoreScalabilitySummaryChart0_20635.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_20635.resize();
});
