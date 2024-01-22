
var chart_bestScoreProblemStatisticChart1_11718 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_11718'), {
    type: 'line',
    data: {
        labels: [
            7, 8, 9, 21, 31, 36, 37, 55, 56, 61, 63, 76, 87, 92, 96, 104, 109, 115, 122, 124, 126, 138, 139, 145, 156, 157, 180, 263, 277, 278, 289, 322, 328, 332, 334, 349, 369, 396, 406, 479, 562, 653, 719, 739, 743, 759, 777, 1197, 1457, 1467, 1482, 1538, 1540, 1547, 1565, 1572, 1669, 1693, 1698, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -1170, , -1169, , , -1166, -1164, , , , , , , , , -1173, , , , , -1163, , , , -1159, -1153, , , , -1147, -1146, , , , , -1143, , , , , , -1140, -1131, , -1126, -1125, , , , , , , , , , , , , -1125
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -1170, , , , -1168, , , , , , -1486, , -1473, , , , , , , -1470, , , , , , , , , , , -1464, , , , , -1463, , , , -1446, -1145, -1141, , , -1133, , , , , , , , , , , , , , , -1133
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -1170, , -1169, , , -1171, , , -1167, -1164, , -1151, -1147, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1147
                  ]
                }, 
{
                  label: 'SA 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -1170, , , , , , , , , , , , -1487, -1474, , , , -1473, , , , , , , , , -1470, -1465, -1461, , , -1450, -1440, -1351, , , -1350, , , , , , , , , , , , , , -1134, -1133, , , , -1132, -1131, -1130, -1130
                  ]
                }, 
{
                  label: 'SA with TS 5',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -1170, , , , , , , , , , , , , , , -1740, , -1723, , , -1720, , -1718, -1717, -1716, , , , , , , , , , , , , , -1709, , , , , , , , , -1706, -1470, -1469, -1167, , , -1157, -1148, -1146, , , , -1146
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
                text: 'Problem_1 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_11718.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_11718.resize();
});
