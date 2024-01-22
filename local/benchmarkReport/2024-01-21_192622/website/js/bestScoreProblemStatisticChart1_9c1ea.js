
var chart_bestScoreProblemStatisticChart1_9c1ea = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_9c1ea'), {
    type: 'line',
    data: {
        labels: [
            1618, 1637, 1647, 1692, 1808, 1829, 2130, 2232, 2334, 2343, 2386, 2419, 2434, 2444, 2490, 2514, 2536, 2617, 2729, 2780, 2804, 2992, 3068, 3114, 3348, 3394, 3447, 3501, 3547, 3592, 3693, 3720, 3745, 4037, 4082, 4232, 4279, 4327, 4425, 4476, 4525, 4571, 4586, 4616, 4618, 4646, 4692, 4715, 5002, 5005, 5011, 5170, 5317, 5670, 5720, 5879, 6027, 6044, 6209, 6367, 6416, 6468, 6624, 6657, 6702, 6806, 6905, 6960, 7053, 7295, 7487, 7535, 7671, 7724, 7770, 7815, 7860, 7915, 7968, 8015, 8061, 8109, 8259, 8305, 8350, 8452, 8498, 8732, 8775, 8823, 8920, 9056, 9342, 9393, 9441, 9487, 9535, 9635, 9724, 9918, 9965, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -61367, , -61807, , , , , , , , , -64062, , -64031, -64440, -64431, -64422, -64126, -64107, -64106, -63730, , , , , , , , , , , , , , , , , , , , , , -65333, -65354, , -65178, -65303, -65276, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -65276
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -61367, , -61807, , , -62502, -62287, -62849, , -62866, , -62827, , , , , , , , , , -62357, -62323, -62767, -62754, -62745, -62684, -62604, -62518, -62406, , -62378, -63622, -63620, -63800, -63793, -63791, -63738, -64053, -64458, -64684, , , -64602, , , , , , , -64549, -64319, -64209, -64193, -64060, -64685, , -64680, -64924, -64894, -64853, , -64772, -64649, -64547, -64694, -64660, -64652, -64644, -64595, -64572, -64679, -64822, -64714, -64593, -64212, -64144, -64120, -64109, -64019, -63949, -63944, -64315, -64259, -64374, -64227, -64637, -64557, -64535, -64670, -64438, -64422, -64412, -64537, -64533, -64525, -64406, -64381, -64822, -64705, -64705
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -61367, -61807, , , , -63216, , , , , , , , , , , , -67638, , , , , , , , , , -68690, , , , , , , , , , , , , , , , , -68481, -68352, -68261, , , , , , , -72162, , , , , -71570, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -71570
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
  chart_bestScoreProblemStatisticChart1_9c1ea.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_9c1ea.resize();
});
