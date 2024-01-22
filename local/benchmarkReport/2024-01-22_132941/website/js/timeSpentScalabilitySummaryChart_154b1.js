
var chart_timeSpentScalabilitySummaryChart_154b1 = new Chart(document.getElementById('chart_timeSpentScalabilitySummaryChart_154b1'), {
    type: 'line',
    data: {
        labels: [
            120, 186796
        ],
        datasets: [
            {
                  label: 'Tabu 5 250',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000
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
                text: 'Time spent scalability summary (lower is better)'
            },
            tooltip: {
                callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            return label + ": " + humanizeTime(context.parsed.y);
                        }
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
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index, ticks) {
                            return humanizeTime(value);
                        }
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
  chart_timeSpentScalabilitySummaryChart_154b1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentScalabilitySummaryChart_154b1.resize();
});
