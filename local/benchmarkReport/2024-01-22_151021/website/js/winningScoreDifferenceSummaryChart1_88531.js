
var chart_winningScoreDifferenceSummaryChart1_88531 = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_88531'), {
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
                    0, -700, 0, -61700, 41800, -18700
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -900, -59100, 95300, 75400
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, -700, -1600, -30400, 57700, 73200
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -2400, -26600, 100200, 0
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -15100, -40700, 76400, 165200
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -400, -31000, 0, -48800
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -2200, 0, 83800, 6000
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -2400, -58600, 100300, 46000
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -15800, -36300, 6500, 138600
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -3300, -36400, -19200, -25800
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -1200, -1700, 83800, 73300
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -2400, -58600, 100300, -1900
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
  chart_winningScoreDifferenceSummaryChart1_88531.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_88531.resize();
});