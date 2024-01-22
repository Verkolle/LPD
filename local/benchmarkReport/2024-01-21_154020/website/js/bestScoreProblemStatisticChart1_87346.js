
var chart_bestScoreProblemStatisticChart1_87346 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_87346'), {
    type: 'line',
    data: {
        labels: [
            604, 665, 817, 868, 919, 966, 1014, 1061, 1114, 1162, 1205, 1251, 1295, 1344, 1389, 1430, 1473, 1520, 1570, 1613, 1664, 1705, 1746, 1796, 1839, 1879, 1918, 1960, 2002, 2047, 2125, 2251, 2289, 2363, 2400, 2437, 2477, 2516, 2553, 2588, 2623, 2699, 2740, 2779, 2816, 2891, 2932, 2972, 3050, 3126, 3169, 3210, 3249, 3294, 3331, 3373, 3417, 3492, 3653, 3807, 3857, 3908, 3986, 5143, 5179, 5216, 5417, 5456, 5578, 5617, 5691, 5728, 5888, 6526, 7766, 7802, 7883, 8340, 8494, 8614, 8650, 8760, 8803, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -34147, -34508, -34498, -34532, -34939, -34727, -34803, -34831, -35541, -36031, -36345, -36143, -36180, -36234, -36194, -36191, -36507, -36510, -36472, -36552, -36514, -36534, -36493, -36482, -36933, -37355, -37335, -37255, -37335, -37479, -37423, -37994, -37797, -38324, -38348, -38244, -38061, -38075, -38074, -38072, -38028, -38027, -38309, -38268, -38279, -38368, -38128, -38036, -38024, -38012, -38008, -37988, -37733, -37568, -37506, -37480, -37464, -37460, -37501, -37491, -37465, -37496, -37996, -38267, -38172, -38093, -37903, -37902, -37813, -37774, -37605, -37542, -38148, -37414, -37946, -37967, -37850, -37571, -37561, -37532, -37452, -37437, -37381, -37381
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
                text: 'Problem_2 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_87346.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_87346.resize();
});
