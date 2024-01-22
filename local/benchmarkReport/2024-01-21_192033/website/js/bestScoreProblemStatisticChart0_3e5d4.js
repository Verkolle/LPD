
var chart_bestScoreProblemStatisticChart0_3e5d4 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_3e5d4'), {
    type: 'line',
    data: {
        labels: [
            457, 561, 659, 813, 874, 923, 1016, 1061, 1108, 1203, 1449, 1496, 1543, 1591, 1639, 1685, 1727, 1952, 2041, 2140, 2225, 2271, 2405, 2448, 2532, 2943, 3083, 3174, 3265, 3308, 6685, 6731, 7340, 7388, 7516, 7829, 7917, 8051, 8132, 8175, 8303, 8563, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -43, -42, -41, -36, -36, -35, -34, -33, -33, -32, -32, -31, -31, -30, -30, -29, -28, -28, -27, -27, -25, -23, -23, -21, -19, -19, -15, -15, -14, -14, -13, -12, -12, -11, -11, -10, -10, -9, -9, -5, -5, -4, -4
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
                text: 'Problem_3 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_3e5d4.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_3e5d4.resize();
});
