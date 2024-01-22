
var chart_bestScoreScalabilitySummaryChart1_e23aa = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_e23aa'), {
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
                    -366, -750, -2224, -6102, -12043, -23166
                  ]
                }, 
{
                  label: 'SA 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2228, -4925, -12085, -24058
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -366, -747, -2196, -5116, -12116, -23748
                  ]
                }, 
{
                  label: 'SA 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2411, -6467, -12574, -23274
                  ]
                }, 
{
                  label: 'SA 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2211, -5674, -13266, -22635
                  ]
                }, 
{
                  label: 'SA 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2346, -4888, -12240, -22227
                  ]
                }, 
{
                  label: 'SA 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2241, -6340, -13070, -24018
                  ]
                }, 
{
                  label: 'SA 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2231, -5594, -12808, -23828
                  ]
                }, 
{
                  label: 'SA 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2353, -4842, -12226, -22877
                  ]
                }, 
{
                  label: 'SA 800 1',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -749, -2439, -6206, -12389, -24018
                  ]
                }, 
{
                  label: 'SA 800 2',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2236, -5607, -11587, -24025
                  ]
                }, 
{
                  label: 'SA 800 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2197, -5104, -12809, -22577
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
                text: 'Best soft score scalability summary (higher is better)'
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
  chart_bestScoreScalabilitySummaryChart1_e23aa.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_e23aa.resize();
});
