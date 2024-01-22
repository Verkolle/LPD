
var chart_bestScoreProblemStatisticChart1_2b0b0 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_2b0b0'), {
    type: 'line',
    data: {
        labels: [
            101, 118, 138, 159, 224, 337, 420, 422, 433, 453, 476, 496, 518, 561, 580, 599, 622, 646, 670, 853, 875, 899, 954, 1018, 1062, 1083, 1105, 1168, 1190, 1209, 1228, 1329, 1435, 1476, 1494, 1513, 1556, 1888, 2069, 2089, 2131, 2175, 2198, 2219, 2239, 2263, 2284, 2304, 2324, 2346, 2366, 2390, 2415, 2482, 2522, 2625, 2713, 2732, 2751, 2774, 2818, 2840, 2864, 2885, 2892, 3001, 3021, 3716, 3941, 4029, 4091, 4150, 4172, 4254, 4551, 4983, 5003, 5115, 5177, 5291, 5325, 5348, 5589, 5609, 5668, 5686, 5773, 5796, 5999, 6022, 6974, 6993, 7012, 8010, 8038, 8264, 8285, 8412, 8430, 8448, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -16183, -16083, , , , , -17089, -17030, -17010, -17140, -16829, -16767, -16754, , , -17249, -17072, -16763, -16791, -16779, -16718, -16613, -16751, -16628, -16588, -17095, -17089, -17083, -16993, -16924, -16726, -16700, -16581, -16547, -16521, -16519, -16475, -16464, -16457, -16455, -16407, -16387, -16380, -16320, -16316, -16309, -16305, -16280, -16071, -16070, -16064, -16061, -16038, -16033, -16008, -16006, -16004, -15939, -15935, -16264, -16257, -16279, , -16165, -16163, -16110, -16383, -16470, -16463, -16356, -16295, , -16175, -16151, -16255, -16230, -16140, -16112, -16111, -16104, -16229, -16122, -16079, -15945, -15943, -15940, -15894, -15854, -15802, -15792, -15775, , , -15756, -15692, -15690, -15683, -15627, -15627
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -16183, -16083, , , -15990, -17553, -17119, -17111, , , , , , , , -19014, -19587, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -18196, , , , , , , , , -19208, , , , , , , , , , , , , , , , , , , , -18155, -18347, , , , , , -18347
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
                text: 'Problem_3 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_2b0b0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_2b0b0.resize();
});
