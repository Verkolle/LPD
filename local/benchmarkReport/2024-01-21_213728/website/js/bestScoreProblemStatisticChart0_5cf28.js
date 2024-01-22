
var chart_bestScoreProblemStatisticChart0_5cf28 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_5cf28'), {
    type: 'line',
    data: {
        labels: [
            1422, 1443, 1482, 1541, 1593, 1655, 1681, 1752, 1825, 1947, 2146, 2152, 2249, 2253, 2300, 2373, 2493, 2690, 2756, 2853, 2898, 3117, 3189, 3232, 3273, 3299, 3444, 3672, 3810, 3854, 3936, 3991, 4060, 4141, 4220, 4338, 4749, 4759, 4764, 4849, 4862, 4965, 5328, 5464, 5757, 5897, 6037, 6142, 6152, 6253, 6268, 6320, 6412, 6523, 6576, 6703, 7019, 7095, 7117, 7144, 7186, 7228, 7264, 7389, 7506, 7570, 7621, 7662, 7666, 7717, 7778, 7944, 7990, 8064, 8127, 8128, 8258, 8302, 8361, 8415, 8490, 8637, 8643, 8664, 8730, 8774, 9057, 9146, 9290, 9332, 9432, 9481, 9697, 10000, 10001
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -73, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -73, 
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -73, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -70, -69, -66, -63, , , , -61, , -61, -60, -59, , , , -59, -58, , -58, -57, -57, -56, , -56, -55, , -54, , -53, , , -53, , , -52, -52, , -48, , , -47, , , -47, 
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -73, -73, , , , , , -72, , , -71, , , , , , , , , , , , -70, , , , , , , , , , , -69, -69, , , , , , , , , , , , , , , , , , -68, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -68, 
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -73, , , , , , , , , , , , -72, , , -70, , -69, , -66, -66, -65, -64, -64, , -62, , , -62, -61, -61, -60, -59, , -58, , , , , , -58, -57, , , -57, -55, -53, -53, , -51, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -51, , , , -50, , , , , -50, , , -49, -49, -48, -48
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -73, , , -71, -70, -70, -69, -69, , , -66, , , -65, , -64, , , , , , -63, , , -63, , , , , , -61, , -60, -60, , , -59, , , -59, -57, , , , , -56, , , , , , -56, -55, , , -55, , , , -54, -52, -51, , , -49, , , , , -49, , , -48, , -47, , , -46, , -45, , , , -45, , , -44, , , , -44, 
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
                text: 'classExample_5_200 best hard score statistic'
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
                suggestedMax: 10001,
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
  chart_bestScoreProblemStatisticChart0_5cf28.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_5cf28.resize();
});
