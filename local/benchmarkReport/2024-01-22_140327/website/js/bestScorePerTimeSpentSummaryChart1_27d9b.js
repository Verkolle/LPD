
var chart_bestScorePerTimeSpentSummaryChart1_27d9b = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart1_27d9b'), {
    type: 'line',
    data: {
        labels: [
            10000
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                    borderWidth: 1
                  ,
                  data: [
                    -23950
                  ]
                }, 
{
                  label: 'SA 1 200',
                    borderWidth: 1
                  ,
                  data: [
                    -22678
                  ]
                }, 
{
                  label: 'SA 1 400',
                    borderWidth: 1
                  ,
                  data: [
                    -22852
                  ]
                }, 
{
                  label: 'SA 2 100',
                    borderWidth: 1
                  ,
                  data: [
                    -23304
                  ]
                }, 
{
                  label: 'SA 2 200',
                    borderWidth: 1
                  ,
                  data: [
                    -23146
                  ]
                }, 
{
                  label: 'SA 2 400',
                    borderWidth: 1
                  ,
                  data: [
                    -23114
                  ]
                }, 
{
                  label: 'SA 4 100',
                    borderWidth: 1
                  ,
                  data: [
                    -23530
                  ]
                }, 
{
                  label: 'SA 4 200',
                    borderWidth: 1
                  ,
                  data: [
                    -23832
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -23811
                  ]
                }, 
{
                  label: 'SA 8 100',
                    borderWidth: 1
                  ,
                  data: [
                    -23757
                  ]
                }, 
{
                  label: 'SA 8 200',
                    borderWidth: 1
                  ,
                  data: [
                    -23127
                  ]
                }, 
{
                  label: 'SA 8 400',
                    borderWidth: 1
                  ,
                  data: [
                    -22906
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
                text: 'Best soft score per time spent summary (higher left is better)'
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
                        stepSize: 100
                        
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
  chart_bestScorePerTimeSpentSummaryChart1_27d9b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart1_27d9b.resize();
});
