
var chart_bestScoreProblemStatisticChart1_3925d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3925d'), {
    type: 'line',
    data: {
        labels: [
            1745, 1811, 1863, 1922, 1994, 2053, 2104, 2163, 2216, 2274, 2330, 2388, 2450, 2503, 2551, 2606, 2665, 2719, 2775, 2830, 2940, 2998, 3047, 3209, 3258, 3313, 3363, 3413, 3461, 3519, 3568, 3618, 3727, 3776, 3825, 3877, 3929, 3985, 4034, 4082, 4129, 4238, 4285, 4334, 4380, 4436, 4491, 4538, 4589, 4640, 4748, 4800, 4850, 5014, 5063, 5111, 5167, 5218, 5366, 5514, 5562, 5716, 5813, 5867, 5921, 5971, 6022, 6072, 6126, 6233, 6328, 6538, 6585, 6641, 6741, 6789, 6838, 6942, 7160, 7261, 7309, 7362, 7412, 7506, 7554, 7611, 7666, 7757, 8944, 8992, 9098, 9199, 9250, 9350, 9403, 9451, 9544, 9649, 9694, 9743, 9889, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -62140, -62086, -62567, -62947, -62845, -62925, -62930, -62885, -62825, -63218, -63229, -63200, -63292, -63593, -63416, -63923, -63897, -63871, -63960, -64113, -64096, -64110, -64070, -64662, -64817, -65229, -65469, -65320, -65697, -65897, -65900, -65899, -66086, -66221, -66068, -65862, -65767, -66224, -66364, -66803, -66752, -67211, -67365, -67345, -67354, -67716, -67728, -67575, -67575, -67561, -67759, -67678, -67770, -68236, -68332, -68640, -68219, -68593, -68555, -68719, -68469, -68446, -68484, -68440, -68308, -68351, -68335, -68626, -68081, -68438, -68900, -68879, -68793, -68535, -68611, -68592, -68899, -68880, -69162, -69232, -69193, -69158, -69155, -68983, -68934, -68912, -68832, -68914, -67823, -67811, -67602, -67602, -68058, -68574, -68505, -69029, -68911, -69022, -69575, -69643, -69590, -69590
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
  chart_bestScoreProblemStatisticChart1_3925d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3925d.resize();
});
