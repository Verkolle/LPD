
var chart_bestScoreProblemStatisticChart0_14d1a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_14d1a'), {
    type: 'line',
    data: {
        labels: [
            1532, 1896, 1949, 2000, 2047, 2138, 2193, 2250, 2339, 2492, 2583, 2626, 2675, 2771, 2815, 2859, 3005, 3048, 3091, 3205, 3253, 3539, 3582, 3625, 3766, 3808, 3854, 3950, 3993, 4035, 4297, 4343, 4391, 4483, 4529, 4577, 4622, 4668, 4717, 4761, 4984, 5037, 5081, 5129, 5170, 5216, 5333, 5474, 5806, 9290, 9340, 9428, 9562, 9653, 9698, 9955, 10002
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -86, -84, -84, -80, -78, -77, -75, -73, -72, -70, -70, -69, -68, -68, -67, -65, -64, -64, -63, -63, -61, -60, -59, -57, -57, -55, -54, -54, -53, -53, -52, -50, -49, -48, -48, -47, -44, -43, -37, -36, -35, -34, -34, -32, -32, -31, -31, -29, -29, -27, -25, -25, -24, -24, -23, -22, -22
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
                suggestedMax: 10002,
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
  chart_bestScoreProblemStatisticChart0_14d1a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_14d1a.resize();
});
