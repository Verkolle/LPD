
var chart_bestScoreProblemStatisticChart1_9a24e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_9a24e'), {
    type: 'line',
    data: {
        labels: [
            130, 176, 227, 278, 324, 370, 413, 461, 498, 539, 577, 613, 656, 698, 735, 775, 810, 852, 893, 939, 975, 1010, 1048, 1086, 1124, 1168, 1241, 1348, 1386, 1427, 1462, 1500, 1535, 1571, 1656, 1694, 1731, 1768, 1805, 1847, 1885, 1923, 1997, 2039, 2083, 2124, 2367, 2445, 2482, 2603, 2679, 2719, 2843, 2883, 2956, 2998, 3414, 3454, 3496, 3570, 3779, 3816, 3852, 3889, 3931, 6491, 6532, 6571, 6607, 6756, 6795, 6832, 6906, 7743, 8000, 8037, 8073, 8115, 9299, 9379, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -15902, -16246, -16259, -16875, -17104, -17569, -17833, -17860, -17839, -17911, -17998, -17941, -17859, -17704, -17294, -17212, -17590, -17560, -17566, -17403, -17469, -17423, -17377, -17347, -17251, -17212, -17441, -17438, -17362, -17276, -17039, -17016, -16988, -16966, -16957, -16878, -16959, -16946, -16835, -16833, -16826, -16803, -17099, -16947, -16829, -16810, -16509, -16490, -16474, -16456, -16454, -16435, -16420, -16404, -16367, -16325, -16321, -16302, -16300, -16254, -16370, -16368, -16327, -16305, -16215, -16481, -16419, -16406, -16362, -16205, -16152, -16141, -16124, -16383, -16348, -16327, -16262, -16230, -16081, -16037, -16037
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
  chart_bestScoreProblemStatisticChart1_9a24e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_9a24e.resize();
});
