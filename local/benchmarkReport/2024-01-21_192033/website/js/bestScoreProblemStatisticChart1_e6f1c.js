
var chart_bestScoreProblemStatisticChart1_e6f1c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_e6f1c'), {
    type: 'line',
    data: {
        labels: [
            1532, 1896, 1949, 2000, 2047, 2138, 2193, 2250, 2339, 2492, 2537, 2583, 2626, 2675, 2771, 2815, 2859, 3005, 3048, 3091, 3205, 3253, 3539, 3582, 3625, 3676, 3724, 3766, 3808, 3854, 3905, 3950, 3993, 4035, 4297, 4343, 4391, 4483, 4529, 4577, 4622, 4668, 4717, 4761, 4984, 5037, 5081, 5129, 5170, 5216, 5270, 5333, 5474, 5523, 5709, 5762, 5806, 9290, 9340, 9428, 9562, 9608, 9653, 9698, 9955, 10000, 10002
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -62531, -62824, -62787, -62811, -63162, -63530, -63835, -64238, -64338, -64717, -64373, -64327, -64423, -64887, -64856, -65158, -65881, -66277, -65896, -65820, -65819, -66071, -66642, -67035, -67076, -66569, -66527, -66516, -66490, -66481, -66307, -66282, -66729, -66291, -66511, -67096, -67098, -67251, -67181, -67131, -67297, -67318, -67450, -67461, -67681, -68089, -68039, -68083, -68002, -68089, -68019, -67963, -68041, -67935, -67705, -67673, -67297, -67341, -67453, -67436, -67592, -67502, -67488, -67592, -68949, -68934, -68934
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
                suggestedMax: 10002,
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
  chart_bestScoreProblemStatisticChart1_e6f1c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_e6f1c.resize();
});
