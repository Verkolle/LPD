
var chart_bestScoreProblemStatisticChart1_38811 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_38811'), {
    type: 'line',
    data: {
        labels: [
            125, 176, 234, 373, 426, 538, 749, 800, 847, 894, 939, 986, 1078, 1176, 1228, 1276, 2037, 2086, 2137, 2184, 2968, 3013, 3060, 3107, 3157, 3205, 3248, 3291, 3390, 3437, 3479, 3524, 3875, 3920, 4008, 4270, 4316, 4358, 4627, 4671, 4713, 5926, 5972, 6023, 6555, 6595, 6678, 6724, 6766, 6811, 6861, 6903, 6949, 6995, 7039, 7253, 7336, 7466, 7931, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -14603, -14652, -14596, -14549, -14555, -14925, -15069, -15387, -15053, -15048, -14958, -14913, -14854, -14693, -14491, -14504, -14745, -14741, -15102, -14791, -14732, -14883, -14859, -15204, -15110, -15032, -14995, -14972, -15355, -15345, -15000, -15100, -15063, -15017, -15027, -14985, -14952, -14946, -15010, -15138, -15057, -15736, -15674, -15615, -15812, -15738, -15722, -15641, -15590, -15422, -15421, -15418, -15406, -15389, -15334, -15322, -15261, -15185, -15183, -15183
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
                text: 'Problem_3 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_38811.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_38811.resize();
});
