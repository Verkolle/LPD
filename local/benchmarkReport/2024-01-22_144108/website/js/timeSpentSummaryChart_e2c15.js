
var chart_timeSpentSummaryChart_e2c15 = new Chart(document.getElementById('chart_timeSpentSummaryChart_e2c15'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10001, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10002, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 800 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 800 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }, 
{
                  label: 'SA 800 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10000, 10000, 10000, 10000, 10000, 10000
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
                tooltip: {
                    callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                return label + ": " + humanizeTime(context.parsed.y);
                            }
                    }
                },
            title: {
                display: true,
                text: 'Time spent summary (lower time is better)'
            }
        },
        scales: {
            x: {
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
  chart_timeSpentSummaryChart_e2c15.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentSummaryChart_e2c15.resize();
});