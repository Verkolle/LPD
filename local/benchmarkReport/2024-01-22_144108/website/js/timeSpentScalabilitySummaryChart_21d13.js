
var chart_timeSpentScalabilitySummaryChart_21d13 = new Chart(document.getElementById('chart_timeSpentScalabilitySummaryChart_21d13'), {
    type: 'line',
    data: {
        labels: [
            120, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10001, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                    borderWidth: 4
,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10002, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 800 1',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 800 2',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
                  ]
                }, 
{
                  label: 'SA 800 4',
                    borderWidth: 1
                  ,
                  data: [
                    10000, , , , 10000
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
                    text: 'Problem scale (logarithmic)'
                },
                ticks: {
                },
                suggestedMin: 0,
                suggestedMax: 186796,
                type: 'logarithmic',
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
  chart_timeSpentScalabilitySummaryChart_21d13.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentScalabilitySummaryChart_21d13.resize();
});
