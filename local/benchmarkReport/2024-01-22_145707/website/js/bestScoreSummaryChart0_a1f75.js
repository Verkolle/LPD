
var chart_bestScoreSummaryChart0_a1f75 = new Chart(document.getElementById('chart_bestScoreSummaryChart0_a1f75'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'LAHC 100 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -28, -85
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -27, -80
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -8, -61
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 0, 0, -3, -54
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, -1, -29, -84
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -29, -84
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -14, -78
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -3, -60
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, -2, -37, -83
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -33, -85
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -21, -85
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -3, -72
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
                text: 'Best hard score summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreSummaryChart0_a1f75.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart0_a1f75.resize();
});