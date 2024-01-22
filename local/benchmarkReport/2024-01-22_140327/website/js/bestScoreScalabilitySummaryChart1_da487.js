
var chart_bestScoreScalabilitySummaryChart1_da487 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_da487'), {
    type: 'line',
    data: {
        labels: [
            120, 480, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2215, -4494, -11651, -23950
                  ]
                }, 
{
                  label: 'SA 1 200',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2212, -4816, -11468, -22678
                  ]
                }, 
{
                  label: 'SA 1 400',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2213, -4819, -11446, -22852
                  ]
                }, 
{
                  label: 'SA 2 100',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2208, -4490, -11026, -23304
                  ]
                }, 
{
                  label: 'SA 2 200',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2207, -5033, -11836, -23146
                  ]
                }, 
{
                  label: 'SA 2 400',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2222, -4831, -11399, -23114
                  ]
                }, 
{
                  label: 'SA 4 100',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2397, -4499, -11349, -23530
                  ]
                }, 
{
                  label: 'SA 4 200',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2213, -4521, -11706, -23832
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                    borderWidth: 4
,
                  data: [
                    -366, -745, -2207, -4836, -11627, -23811
                  ]
                }, 
{
                  label: 'SA 8 100',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -746, -2306, -4860, -11499, -23757
                  ]
                }, 
{
                  label: 'SA 8 200',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -740, -2219, -4861, -12069, -23127
                  ]
                }, 
{
                  label: 'SA 8 400',
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2229, -4833, -11716, -22906
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
  chart_bestScoreScalabilitySummaryChart1_da487.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_da487.resize();
});
