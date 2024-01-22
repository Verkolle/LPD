
var chart_bestScorePerTimeSpentSummaryChart1_6f0b3 = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart1_6f0b3'), {
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
                    -20223
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    -24009
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -23960
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                    borderWidth: 1
                  ,
                  data: [
                    -23301
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                    borderWidth: 1
                  ,
                  data: [
                    -20223
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                    borderWidth: 1
                  ,
                  data: [
                    -23548
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -23582
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -23896
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                    borderWidth: 1
                  ,
                  data: [
                    -20223
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                    borderWidth: 1
                  ,
                  data: [
                    -23372
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -23124
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                    borderWidth: 1
                  ,
                  data: [
                    -23267
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                    borderWidth: 1
                  ,
                  data: [
                    -20223
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                    borderWidth: 1
                  ,
                  data: [
                    -20221
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                    borderWidth: 1
                  ,
                  data: [
                    -24614
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                    borderWidth: 1
                  ,
                  data: [
                    -23546
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
  chart_bestScorePerTimeSpentSummaryChart1_6f0b3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart1_6f0b3.resize();
});
