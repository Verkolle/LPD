
var chart_scoreCalculationSpeedSummaryChart_2b17c = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_2b17c'), {
    type: 'line',
    data: {
        labels: [
            120, 480, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                    borderWidth: 1
                  ,
                  data: [
                    65289, 38555, 31332, 26751, 28692, 31729
                  ]
                }, 
{
                  label: 'SA 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    66923, 37008, 30080, 26736, 29215, 32557
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                    borderWidth: 4
,
                  data: [
                    67207, 37597, 27792, 26288, 26796, 30245
                  ]
                }, 
{
                  label: 'SA 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    67416, 38411, 24693, 28424, 29886, 27836
                  ]
                }, 
{
                  label: 'SA 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    65269, 39064, 29116, 24787, 26172, 30731
                  ]
                }, 
{
                  label: 'SA 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    57259, 34893, 27465, 27936, 25081, 30051
                  ]
                }, 
{
                  label: 'SA 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    63187, 34414, 32461, 28494, 24356, 33804
                  ]
                }, 
{
                  label: 'SA 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    61925, 32928, 30694, 30529, 28215, 29550
                  ]
                }, 
{
                  label: 'SA 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    61154, 39787, 28613, 27534, 29158, 29245
                  ]
                }, 
{
                  label: 'SA 800 1',
                    borderWidth: 1
                  ,
                  data: [
                    64661, 43730, 28365, 28809, 29164, 29286
                  ]
                }, 
{
                  label: 'SA 800 2',
                    borderWidth: 1
                  ,
                  data: [
                    65978, 40607, 29026, 28568, 28396, 30830
                  ]
                }, 
{
                  label: 'SA 800 4',
                    borderWidth: 1
                  ,
                  data: [
                    61045, 38194, 30322, 28949, 29580, 32976
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
  chart_scoreCalculationSpeedSummaryChart_2b17c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_2b17c.resize();
});
