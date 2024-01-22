
var chart_bestScoreProblemStatisticChart1_3a962 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3a962'), {
    type: 'line',
    data: {
        labels: [
            7, 10, 35, 69, 70, 94, 109, 120, 146, 148, 168, 197, 204, 260, 264, 272, 536, 551, 558, 559, 565, 590, 592, 903, 925, 1190, 1219, 1248, 1901, 1930, 1959, 2231, 2264, 2361, 2425, 2489, 2574, 2619, 3199, 3959, 4026, 5685, 5786, 5869, 5936, 8894, 9000, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -3326, , , -3409, -3401, , -3397, -3396, , -3387, , -3245, , , , , , , , , , , -3240, -3236, -3193, -3185, -3181, -3149, -3141, -3136, -3094, -3079, , , , , , , , , , , , , , , -3079
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -3326, , -3401, , , -3397, , , -3396, , -3257, , , -3245, , , , , , -3236, , , , , , , , , , , , , -3226, -3193, -3185, -3181, , , , , -3180, -3164, -3156, -3152, -3134, -3111, -3111
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -3326, , -3397, , , , , , , , , , , -3266, , -3258, -3172, -3171, -3163, -3157, , -3129, -3024, , , , , , , , , , , , , , , -3017, -2988, -2974, -2969, , , , , , , -2969
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
  chart_bestScoreProblemStatisticChart1_3a962.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3a962.resize();
});
