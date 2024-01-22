
var chart_bestScoreProblemStatisticChart1_f5f0 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_f5f0'), {
    type: 'line',
    data: {
        labels: [
            22, 26, 32, 36, 38, 46, 49, 52, 76, 84, 101, 123, 143, 168, 217, 240, 242, 263, 474, 1286, 1348, 1371, 1392, 1411, 1412, 1424, 3236, 3257, 3530, 3550, 3570, 3588, 3754, 4176, 4757, 5314, 5547, 5704, 6736, 6755, 6826, 6845, 7214, 7237, 7262, 7284, 7350, 7839, 8356, 8432, 8450, 8467, 8520, 8664, 8688, 8705, 8721, 8739, 8759, 9002, 9342, 9360, 9379, 9729, 9748, 9766, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -8362, , , -8148, , , , -8126, , -8264, -8239, -8208, -8193, -8030, -8208, -8206, , -8049, , -7963, -7960, -7954, -7898, -7896, , , -8066, -7933, -7880, -7879, -7870, -7852, , , , , , , -7835, -7830, -7774, -7755, -7706, -7666, -7574, -7537, -7533, -7473, -7455, -7443, -7336, -7263, -7244, , -7243, -7224, -7221, -7219, , -7176, -7160, -7157, -7155, -7013, -7009, -6981, -6981
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -8362, -8350, , -8138, -8367, -8365, , -8394, , , , , , , , -8363, , -8060, , , , , -7316, -7296, -7306, , , , , , , -8559, -8290, -8216, -7988, -7962, -7955, , , , , , , , , , , , , , , , -7760, , , , , -7739, , , , , , , , -7739
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
                text: 'Problem_2 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_f5f0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_f5f0.resize();
});
