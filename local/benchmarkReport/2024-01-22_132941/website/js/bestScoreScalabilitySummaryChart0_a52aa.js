
var chart_bestScoreScalabilitySummaryChart0_a52aa = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_a52aa'), {
    type: 'line',
    data: {
        labels: [
            120, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'Tabu 5 250',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -9, -93
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -6, -35
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -11, -32
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -8, -92
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    0, , 0, -50
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    0, 0, -4, -33
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -16, -90
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -6, -44
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -21, -31
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -12, -97
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -8, -36
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -11, -34
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
  chart_bestScoreScalabilitySummaryChart0_a52aa.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_a52aa.resize();
});
