
var chart_worstScoreDifferencePercentageSummaryChart0_92b12 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart0_92b12'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 100, 24.324324324324326, 2.2988505747126435
                  ]
                }, 
{
                  label: 'SA 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 100, 37.83783783783784, 8.045977011494253
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 0, 100, 64.86486486486487, 16.091954022988507
                  ]
                }, 
{
                  label: 'SA 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 87.5, 21.62162162162162, 3.4482758620689653
                  ]
                }, 
{
                  label: 'SA 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 100, 21.62162162162162, 1.1494252873563218
                  ]
                }, 
{
                  label: 'SA 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 100, 51.35135135135135, 3.4482758620689653
                  ]
                }, 
{
                  label: 'SA 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 75, 0, 4.597701149425287
                  ]
                }, 
{
                  label: 'SA 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 100, 21.62162162162162, 1.1494252873563218
                  ]
                }, 
{
                  label: 'SA 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 100, 43.24324324324324, 2.2988505747126435
                  ]
                }, 
{
                  label: 'SA 800 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 4.597701149425287
                  ]
                }, 
{
                  label: 'SA 800 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 75, 8.108108108108109, 0
                  ]
                }, 
{
                  label: 'SA 800 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 100, 43.24324324324324, 2.2988505747126435
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
                text: 'Worst hard score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst hard score difference percentage'
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
  chart_worstScoreDifferencePercentageSummaryChart0_92b12.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart0_92b12.resize();
});