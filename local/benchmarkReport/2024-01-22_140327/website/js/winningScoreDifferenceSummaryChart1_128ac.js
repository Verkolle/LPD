
var chart_winningScoreDifferenceSummaryChart1_128ac = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_128ac'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -800, -400, -18300, -42000
                  ]
                }, 
{
                  label: 'SA 1 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -500, -32600, 0, 85200
                  ]
                }, 
{
                  label: 'SA 1 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -600, -32900, 2200, 67800
                  ]
                }, 
{
                  label: 'SA 2 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -100, 0, 44200, 22600
                  ]
                }, 
{
                  label: 'SA 2 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, 0, -54300, -36800, 38400
                  ]
                }, 
{
                  label: 'SA 2 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -500, -1500, -34100, 6900, 41600
                  ]
                }, 
{
                  label: 'SA 4 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -19000, -900, 11900, 0
                  ]
                }, 
{
                  label: 'SA 4 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -600, -3100, -23800, -30200
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, -500, 0, -34600, -15900, -28100
                  ]
                }, 
{
                  label: 'SA 8 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -600, -9900, -37000, -3100, -22700
                  ]
                }, 
{
                  label: 'SA 8 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -1200, -37100, -60100, 40300
                  ]
                }, 
{
                  label: 'SA 8 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -2200, -34300, -24800, 62400
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
  chart_winningScoreDifferenceSummaryChart1_128ac.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_128ac.resize();
});