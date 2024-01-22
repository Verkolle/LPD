
var chart_bestScoreProblemStatisticChart1_1b11f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_1b11f'), {
    type: 'line',
    data: {
        labels: [
            6, 7, 8, 11, 12, 13, 15, 17, 22, 24, 27, 31, 32, 35, 37, 41, 42, 50, 51, 59, 62, 72, 73, 78, 85, 87, 92, 123, 126, 141, 144, 148, 150, 156, 161, 172, 190, 198, 206, 214, 233, 244, 275, 277, 280, 281, 303, 316, 343, 377, 480, 567, 596, 627, 631, 813, 823, 857, 895, 902, 950, 968, 994, 1007, 1202, 1310, 1331, 1529, 1556, 1577, 1602, 1710, 2101, 2110, 2856, 2884, 3117, 3399, 3404, 3415, 5634, 5872, 6184, 8096, 8190, 8273, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -1202, , , , , , -1516, , , , , -1487, , , , , , , -1480, , , , , -1461, , , , -1450, , , , , , , , , , -1449, , -1148, , -1136, , , , -1132, -1130, -1129, , , , , , , , , -1123, , , -1122, , , , -1121, -1120, -1117, -1116, -1115, -1114, , , , , , , , , , , , , , , , -1114
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -1202, , , , , , , , , , , -1171, , , , , , , -1161, , , , , , , , , , , , , , , , -1150, , , , , -1136, , , , , , -1135, , , , , , -1129, , , , , , , , , , , , , , , , , , , , , , , , , , , , -1128, -1127, -1124, -1123, -1121, -1120, -1120
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -1202, , , , , -1516, -1505, , , , , , , -1501, -1496, -1485, -1480, , , , -1477, -1474, , , , , , -1154, , , , , , , , , , , , , , -1150, , -1142, -1130, , , , , -1122, , , , , , , , , -1121, , , -1119, -1118, -1115, , , , , , , , , -1111, -1110, -1107, , -1105, -1101, -1100, , , , , , , -1100
                  ]
                }, 
{
                  label: 'SA 2 100',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -1202, , , -1192, -1184, , , , , -1170, -1169, -1166, , , , , , , -1164, , , , , , , , , , , , -1153, , -1150, -1142, -1138, , , -1127, -1124, , , , , , , , , , , , , , , -1121, -1117, -1114, -1108, -1107, , , -1106, , , , , , , , , , , , , , , , , , , , , , , , , , -1106
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -1202, , , , -1192, , , , , , , , , , , , , -1191, -1184, , , , -1167, -1158, , -1151, -1145, , , , -1139, , , , , -1135, , , , , , , , , , , , , , , -1120, , , , , , , , , , , -1116, , , , , , , , , -1115, -1113, , , , -1110, , , , , , , , , , -1110
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
  chart_bestScoreProblemStatisticChart1_1b11f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_1b11f.resize();
});
