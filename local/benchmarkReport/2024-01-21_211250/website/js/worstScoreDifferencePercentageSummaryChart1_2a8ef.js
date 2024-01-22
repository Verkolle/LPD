
var chart_worstScoreDifferencePercentageSummaryChart1_2a8ef = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_2a8ef'), {
    type: 'bar',
    data: {
        labels: [
            'classExample10', 'classExample100', 'classExample200', 'classExample25', 'classExample5', 'classExample50'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.3599274705349047, -0.5488474204171241, 0, 0.771035869929601, 2.2757697456492636, -8.071885470606153
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.9066183136899365, 3.4106946840206995, 3.6347517730496453, 1.1062688568555146, 2.2757697456492636, 11.513859275053305
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.4505893019038985, 0, -7.5, 0, 2.2757697456492636, 0
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    1.087941976427924, 0.870315195232868, 3.320035460992908, 1.9443513241702983, 2.2757697456492636, 6.183368869936034
                  ]
                }, 
{
                  label: 'SA with TS 5',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 4.908264074015995, -1.1436170212765957, 0.7039892725444183, 0, 14.818763326226012
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
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
                },
                ticks: {
                        stepSize: 0.1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_2a8ef.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_2a8ef.resize();
});