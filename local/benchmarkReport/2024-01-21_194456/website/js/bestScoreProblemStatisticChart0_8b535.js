
var chart_bestScoreProblemStatisticChart0_8b535 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_8b535'), {
    type: 'line',
    data: {
        labels: [
            328, 330, 353, 461, 627, 644, 728, 745, 871, 1425, 1476, 1519, 1564, 1673, 1816, 1859, 1941, 1951, 1961, 1980, 2058, 2078, 2082, 2127, 2134, 2147, 2154, 2170, 2172, 2192, 2299, 2335, 2341, 2356, 2375, 2382, 2426, 2467, 2509, 2585, 2595, 2600, 2660, 2708, 2834, 3160, 3328, 3392, 3413, 3432, 3488, 3506, 3525, 3762, 3781, 3841, 3964, 3989, 3998, 4019, 4172, 4191, 4237, 4290, 4291, 4442, 4520, 4560, 4719, 4759, 4797, 4856, 4878, 4999, 5040, 5200, 5280, 5366, 6077, 6521, 6562, 6601, 6647, 6838, 7151, 7190, 7791, 7870, 7878, 7912, 7918, 7937, 7953, 8018, 8073, 8092, 8110, 8562, 8745, 8787, 8982, 9218, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -71, , , , , , , , , , , , , , -68, , -65, -65, -64, -62, , , -58, , -58, , -57, -57, , -56, , -56, -55, , , , , , , , , , , , , -55, -53, -53, -51, -51, -50, -48, -45, -45, , , -44, -44, -43, -43, , , , , , , , , , -41, -40, , , , , , , , , , , -40, , , , , -39, , -39, -35, , -35, -32, -31, -29, , , , , , -29
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -71, , , , -70, -69, , -68, , -65, -64, -63, , -63, -62, , -58, , , , , -57, -56, , , , -55, , , -55, , -53, , , -52, -51, -50, -50, , , -49, -48, -48, -46, -46, -45, , , , , , , , , , , , , , , , -45, , , -43, -42, -41, -41, -37, -37, , -35, -35, -34, -31, -29, -29, -28, -28, -27, -26, -25, , -25, -24, -24, -23, , -23, , , -22, , , , , -22, -21, -21, -20, , -20
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -71, , , -70, -69, , , -68, , -67, , , , -66, , , , , , , , , , , , -66, , , , , , , , , , , , , , -65, -65, , , , , , , , , , , , , , , , -64, -64, , , , , , -61, -61, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -57, -57
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
                text: 'Problem_4 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_8b535.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_8b535.resize();
});
