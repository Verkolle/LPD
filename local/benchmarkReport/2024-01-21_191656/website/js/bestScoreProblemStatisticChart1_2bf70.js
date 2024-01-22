
var chart_bestScoreProblemStatisticChart1_2bf70 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_2bf70'), {
    type: 'line',
    data: {
        labels: [
            418, 462, 510, 641, 688, 728, 812, 853, 895, 940, 1015, 1095, 1135, 1175, 1212, 1251, 1328, 1371, 1411, 1697, 1864, 1945, 1984, 2030, 2075, 2113, 2150, 2190, 2272, 2516, 2593, 2632, 2673, 5591, 5630, 5863, 5940, 5977, 6301, 6535, 6574, 6613, 6650, 6732, 6773, 6847, 6885, 6926, 6968, 7048, 7086, 7322, 7361, 7595, 7635, 7722, 7836, 7997, 8201, 8318, 8359, 8445, 8483, 8690, 9087, 9133, 9173, 9213, 9486, 9526, 9814, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -35349, -35675, -36349, -36908, -37049, -36902, -36540, -36671, -36276, -36787, -36709, -37775, -37764, -37854, -37765, -37931, -38071, -37751, -37751, -37566, -37348, -37719, -38045, -37961, -38064, -37895, -37862, -37840, -38364, -38849, -38800, -38658, -38528, -38971, -38859, -38770, -38759, -38666, -38521, -38437, -38240, -38105, -38062, -37909, -37777, -37729, -37693, -37654, -37355, -37293, -37259, -37257, -37234, -37234, -37204, -37401, -37392, -37358, -37334, -38036, -38033, -37936, -37898, -37456, -38175, -38066, -38034, -37997, -37714, -37257, -37244, -37244
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
  chart_bestScoreProblemStatisticChart1_2bf70.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_2bf70.resize();
});
