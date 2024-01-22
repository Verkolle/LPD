
var chart_bestScoreProblemStatisticChart1_25d39 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_25d39'), {
    type: 'line',
    data: {
        labels: [
            119, 182, 237, 290, 380, 423, 460, 496, 535, 572, 651, 689, 732, 770, 807, 847, 916, 1025, 1109, 1143, 1178, 1216, 1254, 1296, 1337, 1372, 1408, 1449, 1491, 1531, 1568, 1605, 1709, 1749, 1787, 1856, 1934, 2018, 2094, 2133, 2221, 2262, 2341, 2459, 2500, 2735, 2776, 2816, 2856, 2940, 2978, 3016, 3053, 3138, 3180, 3261, 3497, 3536, 3574, 3627, 4036, 4075, 4159, 4200, 4238, 4276, 4575, 5467, 5645, 5741, 7541, 7584, 8274, 8318, 8493, 8539, 8628, 8667, 8757, 9097, 9143, 9760, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -16630, -16589, -16559, -16677, -17100, -17710, -17619, -17804, -17751, -17456, -17376, -17620, -17538, -17471, -17417, -17181, -17139, -17047, -16874, -16859, -16800, -16700, -16674, -16553, -16511, -16475, -16449, -16362, -16333, -16321, -16306, -16291, -16280, -16261, -16259, -16257, -16228, -16066, -16034, -15965, -15952, -16173, -16163, -16067, -16000, -15996, -15936, -15891, -15831, -15820, -15750, -15738, -15733, -15680, -15661, -15627, -15580, -15557, -15536, -15467, -15162, -15106, -15065, -15039, -15029, -14985, -14962, -14930, -14925, -14921, -14904, -14898, -14878, -14785, -14737, -14718, -14667, -14650, -14638, -14629, -14242, -14195, -14195
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
  chart_bestScoreProblemStatisticChart1_25d39.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_25d39.resize();
});
