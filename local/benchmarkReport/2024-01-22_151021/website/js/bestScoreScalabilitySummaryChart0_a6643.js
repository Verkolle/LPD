
var chart_bestScoreScalabilitySummaryChart0_a6643 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_a6643'), {
    type: 'line',
    data: {
        labels: [
            120, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'LAHC 100 4',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -8, -61
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -3, -52
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                    borderWidth: 4
,
                  data: [
                    0, 0, -3, -39
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -11, -37
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -12, -78
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -2, -60
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -7, -42
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -11, -41
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -20, -85
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -3, -69
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -7, -39
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -11, -37
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
  chart_bestScoreScalabilitySummaryChart0_a6643.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_a6643.resize();
});
