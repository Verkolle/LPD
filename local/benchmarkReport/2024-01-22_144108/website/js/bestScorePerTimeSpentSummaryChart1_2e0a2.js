
var chart_bestScorePerTimeSpentSummaryChart1_2e0a2 = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart1_2e0a2'), {
    type: 'line',
    data: {
        labels: [
            10000, 10001, 10002
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                    borderWidth: 1
                  ,
                  data: [
                    -23166, -6102, 
                  ]
                }, 
{
                  label: 'SA 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    -24058, , 
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -23748, , 
                  ]
                }, 
{
                  label: 'SA 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    -23274, , 
                  ]
                }, 
{
                  label: 'SA 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    -22635, , -5674
                  ]
                }, 
{
                  label: 'SA 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    -22227, , 
                  ]
                }, 
{
                  label: 'SA 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    -24018, , 
                  ]
                }, 
{
                  label: 'SA 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    -23828, , 
                  ]
                }, 
{
                  label: 'SA 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    -22877, , 
                  ]
                }, 
{
                  label: 'SA 800 1',
                    borderWidth: 1
                  ,
                  data: [
                    -24018, , 
                  ]
                }, 
{
                  label: 'SA 800 2',
                    borderWidth: 1
                  ,
                  data: [
                    -24025, , 
                  ]
                }, 
{
                  label: 'SA 800 4',
                    borderWidth: 1
                  ,
                  data: [
                    -22577, , 
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
                suggestedMax: 10002,
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
  chart_bestScorePerTimeSpentSummaryChart1_2e0a2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart1_2e0a2.resize();
});
