
var chart_winningScoreDifferenceSummaryChart1_9288b = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_9288b'), {
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
                    0, -1000, -2900, -131600, 11500, -11900
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -3200, -13800, 27800, -101100
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, 0, -30700, -22900, -82600
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, -700, -900, -28100, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -21600, -168100, -45500, -22700
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -1500, -65600, -110800, -49700
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -15100, -10200, 11600, 101300
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -400, 0, -62000, -112700
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -4600, -155400, -91200, -97100
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -3600, -80800, -46300, -109000
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -15800, -5300, -60400, 47000
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -3300, -5400, -82900, -21400
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
                text: 'Winning soft score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning soft score difference'
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
  chart_winningScoreDifferenceSummaryChart1_9288b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_9288b.resize();
});