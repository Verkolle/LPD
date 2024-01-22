
var chart_bestScoreProblemStatisticChart0_cf466 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_cf466'), {
    type: 'line',
    data: {
        labels: [
            439, 506, 555, 616, 675, 731, 781, 829, 882, 980, 1023, 1074, 1126, 1216, 1267, 1318, 1366, 1410, 1454, 1496, 1537, 1587, 1630, 1672, 1713, 1752, 1793, 1840, 1924, 2006, 2102, 2146, 2188, 2229, 2270, 2317, 2356, 2396, 2438, 2604, 2651, 2692, 2781, 2820, 2857, 3023, 3061, 3102, 3143, 3185, 3232, 3274, 3315, 3356, 3531, 3654, 3693, 3771, 3849, 3970, 4013, 4096, 4179, 4390, 4921, 5080, 5162, 6000, 6041, 7230, 7533, 7813, 8169, 8221, 8299, 8337, 8463, 8712, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -107, -104, -99, -98, -97, -94, -92, -91, -89, -83, -82, -81, -78, -76, -75, -73, -72, -71, -70, -69, -67, -65, -64, -62, -60, -60, -59, -58, -58, -57, -57, -56, -55, -55, -54, -53, -52, -51, -50, -50, -49, -48, -48, -47, -46, -46, -45, -45, -44, -43, -42, -42, -41, -40, -39, -39, -38, -38, -37, -37, -36, -36, -35, -35, -34, -34, -33, -33, -32, -31, -31, -30, -30, -29, -29, -28, -28, -27, -27
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
                text: 'Problem_4 best hard score statistic'
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
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreProblemStatisticChart0_cf466.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_cf466.resize();
});
