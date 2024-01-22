
var chart_bestScoreProblemStatisticChart0_a29e4 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_a29e4'), {
    type: 'line',
    data: {
        labels: [
            604, 665, 817, 868, 919, 966, 1014, 1061, 1114, 1162, 1205, 1251, 1295, 1344, 1389, 1430, 1473, 1520, 1570, 1613, 1664, 1705, 1746, 1796, 1839, 1879, 1918, 1960, 2002, 2047, 2125, 2251, 2289, 2363, 2400, 2437, 2477, 2516, 2553, 2623, 2699, 2740, 2779, 2816, 2891, 3331, 3373, 3492, 3653, 3807, 3857, 3908, 3986, 5143, 5728, 5888, 6526, 7766, 7802, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -109, -105, -105, -104, -101, -100, -99, -98, -97, -96, -94, -94, -92, -90, -88, -87, -86, -85, -83, -80, -78, -76, -74, -73, -71, -65, -63, -62, -60, -58, -58, -55, -54, -50, -49, -48, -48, -47, -46, -46, -44, -41, -41, -40, -39, -39, -38, -38, -37, -36, -36, -35, -34, -33, -33, -32, -32, -31, -30, -30
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
                text: 'Problem_2 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_a29e4.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_a29e4.resize();
});
