
var chart_bestScoreProblemStatisticChart0_ba73b = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_ba73b'), {
    type: 'line',
    data: {
        labels: [
            1618, 1637, 1647, 1692, 1808, 1829, 2130, 2232, 2334, 2343, 2386, 2419, 2444, 2490, 2536, 2617, 2804, 2992, 3114, 3348, 3501, 3547, 3592, 3720, 3745, 4037, 4082, 4232, 4327, 4425, 4476, 4525, 4571, 4586, 4616, 4646, 4692, 4715, 5002, 5005, 5011, 5720, 5879, 6027, 6044, 6209, 6367, 6806, 6905, 7535, 7671, 7724, 8259, 8305, 8350, 8452, 8498, 8732, 8823, 8920, 9393, 9441, 9724, 9918, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -88, , -85, , , , , , , , , -83, -83, -81, -81, -80, -80, , , , , , , , , , , , , , , , , -78, -77, -77, -75, -74, , , , , , , , , , , , , , , , , , , , , , , , , , , -74
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -88, , -85, , , -83, -82, -80, , -79, , , , , , , , -79, -78, -78, -77, -76, , -76, -74, -73, -72, -72, -71, -67, -66, -65, , , , , , , , , -65, -64, -63, , -63, -61, -61, -60, -60, -59, -58, -58, -56, -55, -54, -54, -53, -53, -51, -51, -50, -50, -49, -49
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -88, -85, , , , -84, , , , , , , , -83, , , , , , -81, , , , , , , , , , , , , , , -81, -79, -79, , , , -78, , , , , , , , , , , , , , , , , , , , -78
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
                text: 'Problem_5 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_ba73b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_ba73b.resize();
});
