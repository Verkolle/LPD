
var chart_bestScoreProblemStatisticChart1_4948c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_4948c'), {
    type: 'line',
    data: {
        labels: [
            18, 19, 21, 32, 34, 52, 56, 71, 84, 90, 108, 149, 173, 195, 220, 255, 274, 308, 328, 348, 358, 370, 407, 457, 514, 566, 613, 684, 727, 751, 805, 1016, 1025, 1032, 1051, 1137, 1217, 1257, 1296, 1330, 1384, 1404, 1423, 1433, 1440, 1486, 1537, 1547, 1564, 1588, 2308, 2309, 2727, 5411, 5473, 9212, 9593, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2250, , , -2248, , , -2252, , -2260, -2251, -2237, -2234, -2233, -2232, , , , -2244, -2240, , -2235, , , , , , -2226, -2221, , , , , -2220, -2219, , -2210, -2209, -2216, , , -2211, -2200, , -2199, , , -2198, -2197, , , , , , , , , -2197
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -2250, , , -2248, , , -2251, , , , , , , -2259, , -2258, , , -2255, , -2243, -2240, -2231, -2229, -2228, , , -2214, -2213, , , , , , , , , -2228, -2223, , , -2216, , -2205, -2203, , , -2202, , , , -2199, -2197, , , -2197
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2250, , , -2248, , , -2254, , , , , , , , , , -2667, , , , , , , , , , , , , , , -2627, -2621, , , -2284, , , , , , , , , , , , , , , -2266, -2259, -2244, , , -2243, -2241, -2241
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
                        stepSize: 10
                        
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
  chart_bestScoreProblemStatisticChart1_4948c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_4948c.resize();
});
