
var chart_bestScoreSummaryChart0_6b119 = new Chart(document.getElementById('chart_bestScoreSummaryChart0_6b119'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'Tabu 5 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -9, -93
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -6, -35
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -11, -32
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -8, -92
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, -50
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 0, 0, -4, -33
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -16, -90
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -6, -44
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -21, -31
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -48, -97
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -12, -97
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -8, -36
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, -11, -34
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
  chart_bestScoreSummaryChart0_6b119.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart0_6b119.resize();
});