
var chart_bestScorePerTimeSpentSummaryChart1_e30da = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart1_e30da'), {
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
                    -23873
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                    borderWidth: 1
                  ,
                  data: [
                    -22932
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -22954
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                    borderWidth: 1
                  ,
                  data: [
                    -23686
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    -22034
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    -24174
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                    borderWidth: 1
                  ,
                  data: [
                    -23626
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                    borderWidth: 1
                  ,
                  data: [
                    -23226
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    -22300
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    -23944
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                    borderWidth: 1
                  ,
                  data: [
                    -22953
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                    borderWidth: 1
                  ,
                  data: [
                    -23705
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
  chart_bestScorePerTimeSpentSummaryChart1_e30da.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart1_e30da.resize();
});
