
var chart_bestScorePerTimeSpentSummaryChart0_aa5a4 = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart0_aa5a4'), {
    type: 'line',
    data: {
        labels: [
            10000
        ],
        datasets: [
            {
                  label: 'LAHC 100 4',
                    borderWidth: 1
                  ,
                  data: [
                    -61
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                    borderWidth: 1
                  ,
                  data: [
                    -52
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -39
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                    borderWidth: 1
                  ,
                  data: [
                    -37
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    -78
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    -60
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                    borderWidth: 1
                  ,
                  data: [
                    -42
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                    borderWidth: 1
                  ,
                  data: [
                    -41
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    -85
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    -69
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                    borderWidth: 1
                  ,
                  data: [
                    -39
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                    borderWidth: 1
                  ,
                  data: [
                    -37
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
  chart_bestScorePerTimeSpentSummaryChart0_aa5a4.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart0_aa5a4.resize();
});
