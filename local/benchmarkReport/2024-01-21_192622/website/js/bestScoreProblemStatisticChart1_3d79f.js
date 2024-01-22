
var chart_bestScoreProblemStatisticChart1_3d79f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3d79f'), {
    type: 'line',
    data: {
        labels: [
            20, 25, 26, 35, 36, 40, 50, 54, 65, 67, 69, 73, 74, 76, 77, 83, 96, 98, 117, 134, 140, 162, 170, 190, 214, 218, 245, 318, 367, 380, 416, 436, 457, 482, 496, 506, 517, 534, 568, 637, 658, 677, 679, 732, 752, 793, 982, 1002, 1043, 1067, 1089, 1112, 1133, 1190, 1241, 1296, 1342, 1377, 1398, 1399, 1419, 1442, 1579, 1611, 1633, 1636, 1656, 1679, 1708, 1918, 1938, 1963, 2011, 2026, 2083, 2084, 2088, 2411, 2470, 2527, 2580, 2617, 2634, 2685, 2734, 2783, 2949, 3238, 3502, 3503, 3633, 3654, 3867, 3886, 4330, 4406, 4413, 4441, 7834, 7856, 7879, 8301, 8321, 8393, 8415, 8436, 9130, 9155, 9204, 9254, 9296, 9341, 9752, 9774, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7673, , , , -7650, , , -7758, , , , , -7989, , , , -7815, , -7746, , -7752, -7736, , -7648, , -7579, -7530, , , -7817, -7732, -7565, -7458, -7403, , -7389, , -7377, , -7369, -7357, , -7312, -7310, -7296, , -7681, -7590, -7549, -7486, -7479, -7469, -7454, , , , , -7408, , -7387, -7442, , , -7441, -7431, , -7404, -7393, , -7383, -7356, -7345, , , , , , , , , , -7335, , , , , , , , , -7304, -7284, -7279, -7263, -7258, , , , -7242, -7236, -7226, -7204, -7195, -7194, -7183, -7179, -7085, -7081, -7076, -7070, -7059, -7054, -7053, -7048, -7048
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -7673, , , , , , -7781, , , , , , , , , -7576, , -7563, , , -7488, , -7439, , , -7416, -7414, , , , -7532, , , , -7477, , -7422, , , -7235, , , , -7212, , , , , , , , -7929, -7880, -7852, -7802, , -7786, , , -7778, -7765, , , -7726, , , -7714, , , , , , , , , -7547, -7485, -7456, -7407, , -7382, -7347, -7311, -7282, -7273, , , , , , , , , , , , , , , , , , , , , , , , , , , , -7273
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -7673, , -7660, , -7637, -7607, , , -7903, -7729, -7818, , -7714, -7712, -7502, , , , , , , , , , , , , , , , , , , -7592, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -7549, -7457, -7610, -7587, -7529, , , , , , , , , , , -7504, -8020, -8013, , , , , , -8001, -7976, -7952, , , , , , , , , , , , , , , , , -7952
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
                        stepSize: 100
                        
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
  chart_bestScoreProblemStatisticChart1_3d79f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3d79f.resize();
});
