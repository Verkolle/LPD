
var chart_bestScoreProblemStatisticChart0_20694 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_20694'), {
    type: 'line',
    data: {
        labels: [
            418, 462, 510, 641, 688, 728, 812, 853, 895, 940, 1015, 1095, 1135, 1175, 1212, 1251, 1328, 1371, 1411, 1864, 1945, 1984, 2030, 2075, 2190, 2272, 2516, 2673, 5591, 6535, 6574, 7361, 7595, 7635, 7722, 7836, 8201, 8318, 8690, 9087, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -42, -40, -39, -35, -33, -32, -32, -31, -31, -30, -30, -28, -28, -27, -27, -25, -24, -24, -21, -21, -20, -19, -19, -18, -18, -16, -15, -15, -14, -14, -10, -10, -9, -9, -8, -7, -7, -6, -6, -4, -4
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
  chart_bestScoreProblemStatisticChart0_20694.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_20694.resize();
});
