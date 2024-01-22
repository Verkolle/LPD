
var chart_bestScoreProblemStatisticChart0_2cd11 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_2cd11'), {
    type: 'line',
    data: {
        labels: [
            1331, 1360, 1387, 1389, 1501, 1530, 1547, 1602, 1727, 1975, 1991, 2123, 2126, 2199, 2263, 2301, 2489, 2590, 2635, 2764, 2807, 3062, 3159, 3168, 3201, 3292, 3313, 3474, 3901, 3995, 4031, 4082, 4139, 4195, 4290, 4477, 4505, 4652, 4898, 4902, 5105, 5251, 5305, 5337, 5721, 5766, 5846, 5851, 5934, 5972, 6142, 6295, 6374, 6395, 6412, 6438, 6479, 6495, 6520, 6676, 6815, 6857, 6898, 6941, 6983, 7018, 7047, 7066, 7091, 7150, 7196, 7228, 7299, 7349, 7363, 7382, 7502, 7673, 7735, 7845, 7926, 8003, 8117, 8221, 8286, 8471, 8481, 8551, 8602, 8760, 8824, 9001, 9153, 9406, 9666, 9789, 9899, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -73, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -73
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -73, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -70, -69, , -66, -63, , , , , -61, , -61, -60, , -59, , -59, -58, -58, -57, -57, , , -56, , -56, -55, , -54, , , -53, , -53, , -52, -52, , , -48, , -47, , , , , , , , , , , , -47
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -73, , -73, , , , -72, -71, , , , , , , , , , , , , , , -70, , , , , , , , , , , , -69, -69, , , , , , , , , , , , , , , , , , , , , , , , , , , -68, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -67, , -67
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -73, , , , , , , , , , , -72, , -70, , , -69, , -66, -66, -65, -64, , -64, -62, , , , -62, -61, , -61, -60, -59, , -58, , , , , -58, , -57, , , -57, , , , -56, -54, , , -52, , , , , -52, , , , , , -51, , , , , , , , , -50, , , , , , , , , , , , -50, -49, , , -49, -48, , , -48, , -47, -47
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -73, , , -71, , -70, -70, -69, , , , -69, , -66, -65, , -64, , , , , -63, , , , -63, -61, , , -60, , , , -60, , -59, , , -59, , -57, , , , , , , -56, , , -56, , , , , -55, , , , , , , , , , , -55, , , -54, , -52, , , -51, , -49, , , -49, -48, , -47, , , , -46, -45, , , -45, -44, , , , -44
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
  chart_bestScoreProblemStatisticChart0_2cd11.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_2cd11.resize();
});
