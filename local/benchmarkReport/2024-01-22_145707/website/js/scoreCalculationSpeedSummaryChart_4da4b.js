
var chart_scoreCalculationSpeedSummaryChart_4da4b = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_4da4b'), {
    type: 'line',
    data: {
        labels: [
            120, 480, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'LAHC 100 1',
                    borderWidth: 1
                  ,
                  data: [
                    63238, 37094, 30797, 30042, 29025, 32076
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    60799, 35979, 31648, 29921, 26684, 33113
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                    borderWidth: 1
                  ,
                  data: [
                    47481, 38481, 31489, 29489, 28855, 32944
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                    borderWidth: 4
,
                  data: [
                    63797, 39333, 30579, 29197, 27394, 33403
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    65319, 36671, 32698, 30698, 26935, 32240
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    66531, 39410, 31714, 29905, 26783, 33453
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    67143, 39342, 30184, 28403, 27728, 33386
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    67751, 40846, 31259, 29030, 29540, 34108
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    66332, 38169, 33829, 29955, 25849, 33680
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    67400, 39399, 32506, 30342, 25037, 32697
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    67195, 39237, 31220, 30446, 27967, 31072
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    57503, 40280, 29938, 29966, 29580, 30635
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
                text: 'Score calculation speed summary (higher is better)'
            },
            tooltip: {
                callbacks: {
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
                    text: 'Score calculation speed per second'
                },
                ticks: {
                        stepSize: 1000
                        
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
  chart_scoreCalculationSpeedSummaryChart_4da4b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_4da4b.resize();
});
