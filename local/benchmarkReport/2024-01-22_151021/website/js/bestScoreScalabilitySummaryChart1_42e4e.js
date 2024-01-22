
var chart_bestScoreScalabilitySummaryChart1_42e4e = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_42e4e'), {
    type: 'line',
    data: {
        labels: [
            120, 480, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'LAHC 100 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2195, -5093, -12377, -23873
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2204, -5067, -11842, -22932
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -366, -747, -2211, -4780, -12218, -22954
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2219, -4742, -11793, -23686
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2346, -4883, -12031, -22034
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -740, -2199, -4786, -12795, -24174
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2217, -4476, -11957, -23626
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2219, -5062, -11792, -23226
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2353, -4839, -12730, -22300
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2228, -4840, -12987, -23944
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2207, -4493, -11957, -22953
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2219, -5062, -11792, -23705
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
  chart_bestScoreScalabilitySummaryChart1_42e4e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_42e4e.resize();
});
