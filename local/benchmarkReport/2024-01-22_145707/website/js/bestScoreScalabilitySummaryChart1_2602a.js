
var chart_bestScoreScalabilitySummaryChart1_2602a = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_2602a'), {
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
                    -366, -750, -2224, -6102, -12043, -23166
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2227, -4924, -11880, -24058
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2195, -5093, -12387, -23873
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -366, -747, -2204, -5067, -12158, -23047
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2411, -6467, -12613, -23274
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2210, -5442, -13266, -23544
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2346, -4888, -12042, -22034
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -740, -2199, -4786, -12778, -24174
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2241, -6340, -13070, -24018
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2231, -5594, -12621, -24137
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2353, -4839, -12762, -22577
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2228, -4840, -12987, -23261
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
  chart_bestScoreScalabilitySummaryChart1_2602a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_2602a.resize();
});
