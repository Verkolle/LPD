
var chart_bestScoreProblemStatisticChart1_5a819 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_5a819'), {
    type: 'line',
    data: {
        labels: [
            1519, 1588, 1647, 1806, 1855, 1900, 1947, 2000, 2113, 2161, 2210, 2272, 2326, 2420, 2473, 2521, 2568, 2615, 2669, 2718, 2764, 2810, 2904, 3142, 3198, 3245, 3288, 3332, 3382, 3433, 3478, 3566, 3615, 3707, 3749, 3840, 3891, 3937, 4035, 4595, 4685, 4733, 4779, 4829, 4965, 5012, 5062, 5113, 5987, 6047, 6096, 6144, 6188, 6332, 6379, 6424, 6526, 7189, 7241, 8999, 9045, 9094, 9152, 9257, 9303, 9350, 9537, 9584, 9637, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -61486, -61989, -62586, -63050, -63178, -63114, -63283, -63457, -63057, -63615, -63997, -63944, -63934, -64075, -64395, -64333, -64247, -64354, -64357, -64282, -64311, -64104, -64150, -64292, -64651, -64511, -64138, -64673, -64750, -64701, -64697, -64662, -64503, -64358, -64326, -64461, -64325, -64310, -64254, -65209, -65379, -65337, -65216, -65211, -65345, -64841, -64989, -65033, -64433, -64411, -64237, -64171, -64134, -63802, -63793, -63712, -63800, -64931, -65049, -66016, -66009, -66025, -66133, -66379, -66158, -65979, -65835, -65567, -65428, -65428
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
                text: 'Problem_5 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_5a819.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_5a819.resize();
});
