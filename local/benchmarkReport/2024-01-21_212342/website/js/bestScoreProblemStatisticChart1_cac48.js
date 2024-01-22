
var chart_bestScoreProblemStatisticChart1_cac48 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_cac48'), {
    type: 'line',
    data: {
        labels: [
            5, 6, 7, 9, 10, 11, 15, 17, 20, 21, 24, 27, 29, 34, 37, 41, 42, 43, 44, 49, 52, 56, 60, 70, 73, 74, 77, 83, 86, 114, 123, 129, 138, 139, 146, 155, 159, 163, 178, 190, 207, 213, 217, 227, 241, 278, 279, 283, 284, 296, 306, 343, 484, 538, 565, 629, 632, 797, 809, 846, 850, 896, 924, 935, 986, 998, 1190, 1265, 1285, 1472, 1493, 1516, 1540, 1599, 1968, 2075, 2778, 2805, 2921, 3280, 3284, 3294, 5469, 5700, 6013, 7883, 7974, 8053, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -1202, , , , , , -1516, , , , , -1487, , , , , , , , , -1480, , , , , , -1461, , -1450, , , , , , , , , -1449, , -1148, , , -1136, , -1132, , , , -1130, -1129, , , , , , , , , -1123, , -1122, , , , , -1121, -1120, -1117, -1116, -1115, -1114, , , , , , , , , , , , , , , , -1114
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -1202, , , , , , , , , , -1171, , , , , , , , , -1161, , , , , , , , , , , , , , , , -1150, , , , , , -1136, , , , , , -1135, , , , , -1129, , , , , , , , , , , , , , , , , , , , , , , , , , , , -1128, -1127, -1124, -1123, -1121, -1120, -1120
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -1202, , , , , -1516, -1505, , , , , , , -1501, -1496, -1485, , , -1480, , , , , -1477, -1474, , , , , , -1154, , , , , , , , , , , , , , -1150, , -1142, -1130, , , , -1122, , , , , , , , , -1121, , , -1119, -1118, -1115, , , , , , , , , -1111, -1110, -1107, , -1105, -1101, -1100, , , , , , , -1100
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -1202, , , -1192, , -1184, , , , -1170, -1169, -1166, , , , , , -1164, , , , , , , , , , , , , , , , -1153, -1150, -1142, -1138, , , , -1127, , -1124, , , , , , , , , , , , , -1121, -1117, -1114, -1108, -1107, , , , -1106, , , , , , , , , , , , , , , , , , , , , , , , , -1106
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -1202, , , -1192, , , , , , , , , , , , , , -1191, , -1184, , , -1167, , , -1158, -1151, , -1145, , , -1139, , , , , , -1135, , , , , , , , , , , , , , , -1120, , , , , , , , , , -1116, , , , , , , , , , -1115, -1113, , , , -1110, , , , , , , , , , -1110
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
                text: 'classExample_1_10 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_cac48.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_cac48.resize();
});
