
var chart_bestScoreProblemStatisticChart1_ed0e6 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_ed0e6'), {
    type: 'line',
    data: {
        labels: [
            403, 450, 493, 745, 788, 841, 879, 918, 1005, 1047, 1087, 1126, 1164, 1330, 1372, 1409, 1490, 1529, 1565, 1602, 1643, 1682, 1800, 1837, 2303, 2378, 2422, 2502, 2883, 2963, 3005, 3092, 3134, 3175, 3341, 3383, 3423, 3465, 3555, 3652, 3911, 4215, 4265, 4314, 4355, 4397, 4439, 4570, 4612, 4655, 5126, 5169, 5212, 6303, 6344, 6427, 6511, 6634, 6677, 6716, 6888, 6932, 7598, 7677, 8799, 8841, 8882, 8924, 9013, 9053, 9136, 9182, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -33057, -32793, -33321, -33707, -33836, -33700, -33635, -33624, -33790, -33723, -33630, -33623, -33581, -33401, -33425, -33392, -33263, -33216, -33297, -33165, -33163, -33014, -32979, -32888, -32849, -32793, -32737, -32734, -33706, -33388, -33248, -33247, -32946, -32907, -32813, -32806, -32605, -32555, -32457, -32443, -32463, -32131, -32110, -32108, -32066, -32057, -32044, -31951, -31917, -31853, -31806, -31794, -31789, -32800, -32677, -32676, -32573, -32552, -32493, -32480, -32331, -32323, -32282, -32246, -31907, -31903, -31838, -31815, -31754, -31734, -31730, -31726, -31726
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
                text: 'Problem_4 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_ed0e6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_ed0e6.resize();
});
