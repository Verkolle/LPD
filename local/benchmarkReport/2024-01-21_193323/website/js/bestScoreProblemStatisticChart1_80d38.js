
var chart_bestScoreProblemStatisticChart1_80d38 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_80d38'), {
    type: 'line',
    data: {
        labels: [
            394, 396, 404, 415, 439, 538, 766, 857, 896, 920, 1347, 1371, 1392, 1432, 1453, 1473, 1495, 1529, 1587, 1850, 1871, 1892, 1913, 1937, 2006, 2041, 2227, 2253, 4132, 4228, 4250, 4271, 4293, 4315, 4433, 4539, 4561, 4652, 4674, 4695, 4717, 5210, 6652, 6674, 6693, 6713, 6795, 6815, 7144, 7183, 7224, 7250, 7274, 7297, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -32727, , , -32725, -32718, , , , -33900, -33830, -34346, -34457, -34656, -34549, -34281, -34102, -34066, , -33914, -33598, -33591, -33506, -33517, -33495, -33519, -33342, , , -35330, -35087, -35062, -34910, -34890, -34746, -34739, -34722, -35272, -35713, -35758, -35728, -35874, , -35744, -35606, -35577, -35548, -35588, -35577, -35796, -35824, -35809, -35398, -34954, -34769, -34769
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -32727, -32725, , , -33169, -33600, -33890, , , , , , , , , , -36354, , , , , , , , , -35970, -36352, , , , , , , , , , , , , , -38735, , , , , , , , , , , , , -38735
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
  chart_bestScoreProblemStatisticChart1_80d38.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_80d38.resize();
});
