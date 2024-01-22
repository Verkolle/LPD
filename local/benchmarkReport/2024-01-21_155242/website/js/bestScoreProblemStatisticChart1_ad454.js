
var chart_bestScoreProblemStatisticChart1_ad454 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_ad454'), {
    type: 'line',
    data: {
        labels: [
            439, 506, 555, 616, 675, 731, 781, 829, 882, 980, 1023, 1074, 1126, 1216, 1267, 1318, 1366, 1410, 1454, 1496, 1537, 1587, 1630, 1672, 1713, 1752, 1793, 1840, 1881, 1924, 2006, 2052, 2102, 2146, 2188, 2229, 2270, 2317, 2356, 2396, 2438, 2478, 2521, 2604, 2651, 2692, 2738, 2781, 2820, 2857, 2941, 2985, 3023, 3061, 3102, 3143, 3185, 3232, 3274, 3315, 3356, 3531, 3572, 3611, 3654, 3693, 3734, 3771, 3849, 3934, 3970, 4013, 4053, 4096, 4179, 4261, 4301, 4344, 4390, 4921, 5080, 5162, 5202, 6000, 6041, 7230, 7278, 7356, 7396, 7437, 7488, 7533, 7813, 8169, 8221, 8261, 8299, 8337, 8463, 8712, 8750, 8825, 8867, 9107, 9151, 9194, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -30892, -31211, -31167, -31629, -31547, -31867, -31815, -31728, -31928, -32265, -32394, -32416, -32313, -32872, -32831, -33009, -33102, -33589, -33802, -34119, -34509, -34477, -34744, -35197, -35243, -34836, -34853, -34708, -34573, -34535, -34749, -34466, -34406, -34548, -34593, -34563, -34599, -35025, -35095, -35019, -35489, -35427, -35240, -34861, -35227, -35221, -35147, -35079, -35025, -35108, -35074, -34842, -34648, -34674, -34660, -34621, -34676, -34773, -34683, -34692, -34784, -35433, -35422, -35224, -35076, -35012, -34908, -34819, -34794, -34626, -34568, -34629, -34625, -34598, -34777, -34476, -34419, -34367, -34365, -35135, -35052, -35191, -35127, -34632, -34541, -34945, -34936, -34926, -34841, -34834, -34793, -34742, -34981, -34569, -34682, -34664, -34558, -34578, -34467, -34724, -34674, -34585, -34544, -34494, -34448, -34365, -34365
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
                text: 'Problem_4 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_ad454.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_ad454.resize();
});
