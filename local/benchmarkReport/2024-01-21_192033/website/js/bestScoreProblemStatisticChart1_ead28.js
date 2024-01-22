
var chart_bestScoreProblemStatisticChart1_ead28 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_ead28'), {
    type: 'line',
    data: {
        labels: [
            457, 561, 659, 813, 874, 923, 1016, 1061, 1108, 1203, 1291, 1344, 1449, 1496, 1543, 1591, 1639, 1685, 1727, 1769, 1814, 1863, 1952, 2041, 2092, 2140, 2225, 2271, 2318, 2360, 2405, 2448, 2532, 2577, 2623, 2668, 2714, 2851, 2897, 2943, 3083, 3174, 3265, 3308, 6685, 6731, 6817, 6946, 7122, 7297, 7340, 7388, 7432, 7516, 7829, 7875, 7917, 8051, 8132, 8175, 8216, 8303, 8563, 8651, 8699, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -31019, -31198, -30967, -31532, -31501, -31472, -31606, -31730, -31689, -31607, -31573, -31565, -31486, -31602, -31481, -32000, -31894, -32253, -32244, -32225, -31836, -31771, -31764, -32189, -32064, -32045, -32642, -32254, -32112, -32080, -32012, -32024, -32174, -32112, -31705, -31689, -31560, -31543, -31511, -31491, -31537, -31363, -31537, -31509, -32306, -32257, -32236, -31882, -31865, -31839, -31742, -31738, -31710, -31594, -31658, -31478, -31435, -31910, -31856, -31860, -31746, -31722, -31940, -31928, -31924, -31924
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
  chart_bestScoreProblemStatisticChart1_ead28.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_ead28.resize();
});
