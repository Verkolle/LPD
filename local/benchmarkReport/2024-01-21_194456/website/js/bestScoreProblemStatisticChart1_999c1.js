
var chart_bestScoreProblemStatisticChart1_999c1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_999c1'), {
    type: 'line',
    data: {
        labels: [
            1348, 1359, 1371, 1419, 1505, 1721, 1846, 1894, 1928, 1972, 2220, 2261, 2344, 2384, 2476, 2517, 2847, 2888, 3008, 3088, 3386, 3426, 3464, 3505, 3547, 3588, 3627, 3747, 3905, 3944, 3985, 4026, 4230, 4272, 4357, 4399, 4442, 4610, 4730, 4771, 6034, 6075, 6116, 6237, 6690, 7134, 7177, 7220, 7259, 7302, 7343, 7384, 7509, 7710, 7752, 7792, 7872, 7910, 7949, 8968, 9537, 9575, 9615, 9656, 9812, 9851, 9934, 9973, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -21936, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -21936
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -21936, , , , , -22684, , -22698, -22696, -22976, -22986, -23288, -23272, -23298, -23632, -23479, -23480, -23476, -23808, -24222, -24220, -24219, -24214, -24218, -23892, -23890, -23899, -23910, -23909, -23907, -24246, -24420, -24415, -24426, -24441, -24427, , -24532, -24529, -25019, -25015, -25010, -25017, -25679, -25413, -25719, -25705, -25865, -25864, -25875, -25873, -25871, -26191, -26185, -26173, -26170, -26187, -26189, , -26504, -26502, -26193, -26181, -26314, -26188, -26180, -26182, -26181
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -21936, , , -22247, -22350, -23007, , -23378, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -26016, , , , , , , , , , , , , , , , , , , , , , -27184, , , , , , , , , -27184
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
                text: 'Problem_5 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_999c1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_999c1.resize();
});
