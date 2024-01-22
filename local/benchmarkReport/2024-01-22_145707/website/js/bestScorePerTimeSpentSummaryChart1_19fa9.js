
var chart_bestScorePerTimeSpentSummaryChart1_19fa9 = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart1_19fa9'), {
    type: 'line',
    data: {
        labels: [
            10000, 10001
        ],
        datasets: [
            {
                  label: 'LAHC 100 1',
                    borderWidth: 1
                  ,
                  data: [
                    -23166, 
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    -24058, 
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                    borderWidth: 1
                  ,
                  data: [
                    -23873, 
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -23047, 
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    -23274, -745
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    -23544, 
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    -22034, 
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    -24174, 
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    -24018, 
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    -24137, 
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    -22577, 
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    -23261, 
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
                suggestedMax: 10001,
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
  chart_bestScorePerTimeSpentSummaryChart1_19fa9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart1_19fa9.resize();
});
