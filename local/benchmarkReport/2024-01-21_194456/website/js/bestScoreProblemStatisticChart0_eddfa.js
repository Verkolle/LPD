
var chart_bestScoreProblemStatisticChart0_eddfa = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_eddfa'), {
    type: 'line',
    data: {
        labels: [
            1348, 1359, 1371, 1419, 1505, 1721, 1846, 1894, 1928, 1972, 2220, 2261, 2344, 2384, 2476, 2517, 2847, 2888, 3008, 3088, 3386, 3426, 3464, 3505, 3547, 3588, 3627, 3747, 3905, 3985, 4026, 4230, 4272, 4357, 4399, 4442, 4610, 4730, 4771, 6034, 6075, 6116, 6237, 6690, 7134, 7177, 7220, 7259, 7302, 7343, 7509, 7710, 7752, 7872, 7910, 7949, 8968, 9537, 9656, 9812, 9934, 9973, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -95, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -95
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -95, , , , , -93, , -92, -92, -90, -88, -87, -86, -85, -83, -83, -82, -81, -80, -79, -79, -78, -77, -76, -76, -75, -74, -73, -73, -72, -71, -71, -70, -69, -69, , -68, -68, -67, -67, -65, -64, -63, -62, -60, -60, -59, -58, -57, -57, -55, -54, -54, -53, -52, , -50, -50, -49, -49, -48, -46
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -95, , , -94, -92, -91, , -90, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -88, , , , , , , , , , , , , , , , , , , , -87, , , , , , -87
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
                text: 'Problem_5 best hard score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                type: 'linear',
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
  chart_bestScoreProblemStatisticChart0_eddfa.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_eddfa.resize();
});
