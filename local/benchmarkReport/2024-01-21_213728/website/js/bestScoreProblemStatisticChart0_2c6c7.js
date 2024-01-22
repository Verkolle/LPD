
var chart_bestScoreProblemStatisticChart0_2c6c7 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_2c6c7'), {
    type: 'line',
    data: {
        labels: [
            87, 88, 89, 90, 113, 120, 128, 133, 155, 166, 169, 177, 190, 199, 209, 211, 257, 268, 300, 316, 322, 323, 327, 349, 365, 374, 383, 407, 436, 449, 454, 472, 493, 520, 522, 535, 582, 587, 594, 596, 616, 632, 644, 760, 795, 804, 814, 880, 906, 917, 925, 950, 988, 999, 1017, 1038, 1051, 1064, 1070, 1084, 1103, 1113, 1226, 1285, 1392, 1559, 1603, 1604, 1649, 1719, 1725, 1740, 1841, 2072, 2237, 2394, 2395, 2478, 2517, 2791, 3105, 3150, 3696, 3791, 3841, 3886, 3933, 4006, 4031, 4392, 4421, 4659, 4749, 4806, 5068, 5586, 6246, 6464, 6701, 7542, 7727, 8382, 8889, 9077, 9949, 9950, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -20, , , , -19, , , -18, , , , , , -17, , -16, , , , , , , , -16, , -15, , -14, , , , , , , , -14, -13, , -11, -11, , -10, , , , -10, , , -9, , , , -8, , -8, , , , -7, -7, , , , , , -6, , -5, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -5
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -20, , , , , -19, , , -18, , , , , -18, , -15, , , , , , , , , , , , -15, , , , , , , -14, -14, , , , , -13, , , , , , , -13, , , -12, , , , -12, , , , , , , , , , -10, -8, , -7, , , , , , , , , , , , , , -7, -6, , -6, , , -5, , , , , , , -5, , -4, -4, -3, , , -3, -2, , , -2
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -20, , , , , -19, , -18, , , , , , -18, , -17, , , , , -16, -15, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -15, , , , , -14, -14, -13, , , -12, , , , , , , , , , , , -12, , , , -11, -10, , , -10, -7, -7
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -20, , , , , , , -20, , -19, , , , , , , , , , , -18, -18, , -17, , , , , , -17, -16, , , , -16, -15, , , , , , , , , -15, , , , , , , , , , , , -14, -14, -11, , , , , , , , , , , , , , , -11, , -10, , , , , , , , -10, -9, , , , , -9, -8, , , , , , , , , , , , , -8
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -20, , , , , , , , , , , , , , , , -20, , , , -19, , , -19, , , , , -17, , , , -17, , , , , , , , , , -16, , -14, , , , -14, , , -13, -11, , , -11, , , , , , , -10, , , -10, , , -9, , -9, -8, , -8, , -7, , , , , , , , , , , , -7, -6, -6, , , -5, , , , , , , , , , , , -5
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
                text: 'classExample_3_50 best hard score statistic'
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
                        stepSize: 0.1
                        
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
  chart_bestScoreProblemStatisticChart0_2c6c7.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_2c6c7.resize();
});
