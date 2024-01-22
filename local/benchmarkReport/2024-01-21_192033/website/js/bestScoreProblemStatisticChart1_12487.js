
var chart_bestScoreProblemStatisticChart1_12487 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_12487'), {
    type: 'line',
    data: {
        labels: [
            135, 191, 247, 304, 422, 469, 513, 557, 642, 689, 734, 777, 867, 997, 1086, 1208, 1250, 1382, 1421, 1468, 1846, 1888, 2067, 2153, 2242, 2550, 2712, 2809, 3261, 3441, 3485, 4260, 4304, 4430, 4474, 4558, 4599, 4644, 4687, 4851, 4892, 4940, 4983, 6663, 6706, 6750, 6796, 6840, 6879, 6920, 6960, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -16190, -16083, -15935, -15886, -15698, -15689, -16045, -16085, -16080, -15939, -15887, -15949, -15953, -16132, -16061, -16040, -16029, -16027, -16048, -15926, -15823, -15791, -15740, -15708, -15606, -15504, -15595, -15579, -15798, -15639, -15619, -15572, -15628, -15587, -15562, -15687, -15679, -15608, -15589, -15560, -15500, -15499, -15472, -15420, -15407, -15321, -15299, -15268, -15248, -15262, -15231, -15231
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
  chart_bestScoreProblemStatisticChart1_12487.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_12487.resize();
});
