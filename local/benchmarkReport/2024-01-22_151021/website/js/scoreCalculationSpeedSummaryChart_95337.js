
var chart_scoreCalculationSpeedSummaryChart_95337 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_95337'), {
    type: 'line',
    data: {
        labels: [
            120, 480, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'LAHC 100 4',
                    borderWidth: 1
                  ,
                  data: [
                    63495, 38961, 31451, 29881, 29189, 33615
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                    borderWidth: 1
                  ,
                  data: [
                    61977, 39815, 30841, 29203, 29929, 34071
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                    borderWidth: 4
,
                  data: [
                    65434, 39600, 31672, 28355, 29583, 34269
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                    borderWidth: 1
                  ,
                  data: [
                    66300, 38519, 31044, 29315, 28905, 33866
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                    borderWidth: 1
                  ,
                  data: [
                    66522, 38635, 30901, 30446, 29827, 33159
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                    borderWidth: 1
                  ,
                  data: [
                    66122, 39135, 31394, 30021, 30762, 30518
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                    borderWidth: 1
                  ,
                  data: [
                    66789, 39382, 31376, 29343, 29765, 31465
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                    borderWidth: 1
                  ,
                  data: [
                    65545, 37644, 31281, 29899, 29299, 28570
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                    borderWidth: 1
                  ,
                  data: [
                    65761, 37249, 30748, 30460, 29513, 33188
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                    borderWidth: 1
                  ,
                  data: [
                    66502, 39549, 30550, 29707, 30163, 33686
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                    borderWidth: 1
                  ,
                  data: [
                    66192, 39439, 31515, 29162, 30029, 34341
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                    borderWidth: 1
                  ,
                  data: [
                    65265, 39542, 31235, 28439, 29367, 33460
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
                text: 'Score calculation speed summary (higher is better)'
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
                    text: 'Score calculation speed per second'
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
  chart_scoreCalculationSpeedSummaryChart_95337.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_95337.resize();
});
