
var chart_bestScoreProblemStatisticChart0_9b020 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_9b020'), {
    type: 'line',
    data: {
        labels: [
            1745, 1811, 1863, 1922, 1994, 2053, 2104, 2163, 2216, 2274, 2330, 2388, 2450, 2503, 2551, 2606, 2665, 2719, 2775, 2830, 2940, 2998, 3047, 3209, 3258, 3313, 3363, 3413, 3461, 3519, 3568, 3618, 3727, 3776, 3825, 3877, 3929, 3985, 4034, 4082, 4129, 4238, 4285, 4334, 4380, 4436, 4491, 4538, 4589, 4640, 4748, 4800, 4850, 5014, 5063, 5111, 5167, 5218, 5366, 5514, 5716, 5813, 5867, 5921, 5971, 6022, 6072, 6126, 6233, 6328, 6538, 6585, 6641, 6741, 6789, 6838, 6942, 7160, 7261, 7309, 7362, 7412, 7506, 7611, 7666, 7757, 8944, 8992, 9098, 9199, 9250, 9350, 9403, 9451, 9544, 9649, 9694, 9743, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -226, -225, -223, -220, -220, -218, -216, -215, -215, -212, -210, -209, -207, -202, -201, -198, -195, -193, -192, -191, -188, -186, -186, -185, -183, -182, -180, -178, -176, -175, -174, -174, -173, -170, -169, -168, -167, -166, -164, -163, -163, -161, -160, -160, -159, -156, -155, -152, -151, -149, -148, -148, -147, -145, -142, -141, -141, -139, -138, -135, -135, -134, -133, -132, -131, -131, -130, -130, -129, -127, -127, -124, -124, -122, -121, -120, -120, -118, -113, -113, -112, -112, -111, -111, -110, -109, -109, -108, -108, -107, -106, -105, -105, -104, -104, -103, -101, -100, -100
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
  chart_bestScoreProblemStatisticChart0_9b020.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_9b020.resize();
});
