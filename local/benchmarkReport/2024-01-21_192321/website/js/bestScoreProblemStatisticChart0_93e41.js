
var chart_bestScoreProblemStatisticChart0_93e41 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_93e41'), {
    type: 'line',
    data: {
        labels: [
            1519, 1588, 1647, 1806, 1855, 1900, 1947, 2000, 2113, 2161, 2210, 2272, 2326, 2420, 2473, 2521, 2568, 2615, 2669, 2718, 2764, 2810, 2904, 3142, 3198, 3288, 3332, 3382, 3433, 3749, 3840, 3937, 4035, 4595, 4685, 4779, 4829, 4965, 5012, 5062, 5113, 5987, 6424, 6526, 7189, 7241, 8999, 9045, 9094, 9152, 9257, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -97, -95, -94, -93, -92, -92, -89, -87, -87, -86, -81, -80, -80, -78, -76, -75, -71, -70, -69, -69, -68, -68, -67, -63, -62, -62, -60, -59, -57, -57, -56, -56, -55, -54, -51, -51, -50, -49, -49, -46, -45, -42, -42, -40, -39, -38, -37, -37, -36, -35, -34, -34
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
  chart_bestScoreProblemStatisticChart0_93e41.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_93e41.resize();
});
