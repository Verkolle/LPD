
var chart_bestScoreSummaryChart1_e14d3 = new Chart(document.getElementById('chart_bestScoreSummaryChart1_e14d3'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2206, -4859, -11813, -24009
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2397, -4488, -12145, -23582
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2241, -6340, -13070, -24018
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -366, -747, -2200, -4474, -11650, -23777
                  ]
                }, 
{
                  label: 'SA with TS 5',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2414, -5176, -11807, -23025
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
  chart_bestScoreSummaryChart1_e14d3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_e14d3.resize();
});