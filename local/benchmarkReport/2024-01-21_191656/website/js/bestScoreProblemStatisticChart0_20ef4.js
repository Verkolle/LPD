
var chart_bestScoreProblemStatisticChart0_20ef4 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_20ef4'), {
    type: 'line',
    data: {
        labels: [
            1730, 1780, 1949, 1997, 2046, 2095, 2141, 2191, 2280, 2333, 2378, 2422, 2469, 2514, 2569, 2623, 2674, 2719, 2824, 2868, 2956, 3004, 3054, 3096, 3138, 3182, 3227, 3410, 3455, 3592, 3767, 3808, 3894, 3945, 3991, 4118, 4207, 4248, 4376, 4424, 4556, 4598, 5087, 5172, 5216, 5399, 5442, 5487, 5771, 5824, 5874, 5917, 6027, 6077, 6304, 6561, 7040, 7837, 7921, 8676, 9386, 9604, 9822, 9948, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -83, -82, -82, -81, -80, -79, -74, -73, -72, -71, -71, -69, -69, -68, -66, -65, -64, -62, -62, -59, -55, -54, -54, -52, -50, -47, -46, -45, -44, -43, -41, -41, -40, -31, -30, -30, -29, -28, -27, -25, -25, -24, -23, -23, -22, -22, -21, -20, -20, -19, -19, -18, -18, -16, -16, -15, -15, -14, -14, -13, -13, -12, -12, -11, -11
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
  chart_bestScoreProblemStatisticChart0_20ef4.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_20ef4.resize();
});
