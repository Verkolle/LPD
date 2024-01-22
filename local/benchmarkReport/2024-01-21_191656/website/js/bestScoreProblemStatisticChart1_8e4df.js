
var chart_bestScoreProblemStatisticChart1_8e4df = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_8e4df'), {
    type: 'line',
    data: {
        labels: [
            1730, 1780, 1949, 1997, 2046, 2095, 2141, 2191, 2280, 2333, 2378, 2422, 2469, 2514, 2569, 2623, 2674, 2719, 2774, 2824, 2868, 2956, 3004, 3054, 3096, 3138, 3182, 3227, 3410, 3455, 3592, 3767, 3808, 3894, 3945, 3991, 4032, 4076, 4118, 4207, 4248, 4376, 4424, 4469, 4512, 4556, 4598, 5087, 5130, 5172, 5216, 5263, 5310, 5354, 5399, 5442, 5487, 5577, 5620, 5662, 5706, 5771, 5824, 5874, 5917, 6027, 6077, 6163, 6209, 6260, 6304, 6561, 6602, 6645, 6692, 6859, 6908, 6953, 6995, 7040, 7837, 7921, 8676, 8763, 9343, 9386, 9604, 9690, 9822, 9948, 9994, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -61704, -62193, -62005, -62111, -62029, -62155, -62736, -63219, -63538, -63500, -63330, -63353, -63211, -63259, -63352, -63850, -63772, -63778, -63542, -63401, -63904, -63944, -63915, -63903, -64114, -64068, -64678, -64909, -65057, -64954, -65541, -65959, -65896, -66007, -66998, -67358, -67290, -67105, -67078, -67041, -67198, -68047, -68080, -67997, -67888, -67752, -68070, -68071, -67971, -67951, -67928, -67866, -67821, -67606, -67572, -67445, -67347, -67344, -67183, -67177, -67013, -66872, -67024, -66921, -67016, -66805, -67342, -66891, -66780, -66619, -66564, -67374, -66972, -66781, -66695, -66299, -66198, -65856, -65799, -65794, -65779, -65762, -65969, -65902, -65722, -65614, -65794, -65765, -65718, -66568, -66201, -66201
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
  chart_bestScoreProblemStatisticChart1_8e4df.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_8e4df.resize();
});
