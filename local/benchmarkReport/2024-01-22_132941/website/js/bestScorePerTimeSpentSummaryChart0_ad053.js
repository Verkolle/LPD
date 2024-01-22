
var chart_bestScorePerTimeSpentSummaryChart0_ad053 = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart0_ad053'), {
    type: 'line',
    data: {
        labels: [
            10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 250',
                    borderWidth: 1
                  ,
                  data: [
                    -97
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    -93
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -35
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                    borderWidth: 1
                  ,
                  data: [
                    -32
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                    borderWidth: 1
                  ,
                  data: [
                    -97
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                    borderWidth: 1
                  ,
                  data: [
                    -92
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -50
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -33
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                    borderWidth: 1
                  ,
                  data: [
                    -97
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                    borderWidth: 1
                  ,
                  data: [
                    -90
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -44
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                    borderWidth: 1
                  ,
                  data: [
                    -31
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                    borderWidth: 1
                  ,
                  data: [
                    -97
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                    borderWidth: 1
                  ,
                  data: [
                    -97
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -36
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                    borderWidth: 1
                  ,
                  data: [
                    -34
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
                text: 'Best hard score per time spent summary (higher left is better)'
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
  chart_bestScorePerTimeSpentSummaryChart0_ad053.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart0_ad053.resize();
});
