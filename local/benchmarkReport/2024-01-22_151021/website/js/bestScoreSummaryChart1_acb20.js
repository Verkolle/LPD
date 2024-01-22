
var chart_bestScoreSummaryChart1_acb20 = new Chart(document.getElementById('chart_bestScoreSummaryChart1_acb20'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'LAHC 100 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2195, -5093, -12377, -23873
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2204, -5067, -11842, -22932
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -366, -747, -2211, -4780, -12218, -22954
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2219, -4742, -11793, -23686
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2346, -4883, -12031, -22034
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -740, -2199, -4786, -12795, -24174
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2217, -4476, -11957, -23626
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2219, -5062, -11792, -23226
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2353, -4839, -12730, -22300
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2228, -4840, -12987, -23944
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2207, -4493, -11957, -22953
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                  grouped: true,
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
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score summary (higher is better)'
            }
        },
        scales: {
            x: {
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
  chart_bestScoreSummaryChart1_acb20.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_acb20.resize();
});