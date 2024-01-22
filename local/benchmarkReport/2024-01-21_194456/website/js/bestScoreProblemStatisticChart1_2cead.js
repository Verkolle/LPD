
var chart_bestScoreProblemStatisticChart1_2cead = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_2cead'), {
    type: 'line',
    data: {
        labels: [
            328, 330, 353, 461, 627, 644, 728, 745, 871, 1425, 1476, 1519, 1564, 1605, 1645, 1673, 1763, 1816, 1859, 1941, 1951, 1961, 1980, 2058, 2078, 2082, 2127, 2134, 2147, 2154, 2170, 2172, 2192, 2258, 2299, 2335, 2341, 2356, 2375, 2382, 2394, 2426, 2467, 2509, 2585, 2595, 2600, 2660, 2708, 2834, 2874, 2916, 2998, 3063, 3115, 3160, 3328, 3372, 3392, 3413, 3432, 3488, 3506, 3525, 3762, 3781, 3802, 3822, 3841, 3964, 3970, 3989, 3998, 4019, 4113, 4154, 4172, 4191, 4196, 4237, 4290, 4291, 4442, 4520, 4560, 4602, 4639, 4719, 4759, 4797, 4856, 4878, 4900, 4919, 4941, 4958, 4999, 5040, 5200, 5280, 5366, 6077, 6120, 6521, 6562, 6601, 6647, 6691, 6838, 7028, 7108, 7151, 7190, 7673, 7791, 7870, 7878, 7899, 7912, 7918, 7937, 7953, 7957, 7976, 7994, 8018, 8073, 8092, 8110, 8519, 8562, 8745, 8787, 8982, 9061, 9100, 9178, 9214, 9218, 9253, 9293, 9406, 9448, 9498, 9682, 9706, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -10114, , , , , , , , , , , , , , , , , -11839, , -12166, -12163, -12477, -12474, , , -12796, , -12795, , -12799, -12797, , , -12496, , -12490, -12468, , -12463, , , , , , , , , , , , , , , , , -12114, -12108, -12097, -12094, -12126, -12125, -12126, -12126, -12127, -12102, -12101, -12096, , , , -12079, -12075, , , -12089, -12088, , , , , , , , , , , , , -12513, -12526, -12508, , -12200, , , , , , , , , , , , , , -12168, , , , , , , , -12506, -12495, , -12486, -12496, , -12490, -12489, , -12477, -12464, -12466, -12469, , , , , , , , , , , , , , , , -12097, -12079, -12079
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -10114, , , , -10464, -10463, , -10808, , -10675, -10674, -10985, -10978, -10792, , , -10791, -10798, , -10799, , , , , -11110, -11116, , , , -11392, , , -11391, -11390, , -11697, , , -11703, , -11709, -11744, -11743, , , -11743, -11731, -11724, -11733, -11728, -11727, -11722, -11721, -11685, -11684, -11680, , , , , , , , , , , , , , , , , , -11409, -11408, , , -11404, -11401, , , -11712, -11741, -12051, -12026, -12021, -11717, -12028, -12027, , -12040, , -12032, , -12009, -12008, -12006, -12059, -12076, -12073, -11769, -11767, -11764, -11765, -11757, -11761, -11760, , -11756, -11754, -11747, -12070, -12045, -12040, -12037, , , -12036, , , -12005, , , -12001, , , , , -11972, -11971, -11970, -11969, -12295, -12283, -12275, -12268, -12267, , -12263, -12259, -12248, -12245, -12244, , , -12244
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -10114, , , -10456, -10470, , , -11122, , -12156, , , , , , -12844, -12520, , , , , , , , , , , , -12513, , , , , , , , , , , , , , , , -13428, -12965, , , , , , , , , , , , , , , , , , , , , , , , -13444, -13442, -13234, , , , , , , , , -13487, -13480, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -14567, , , , , , , , -14567
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
  chart_bestScoreProblemStatisticChart1_2cead.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_2cead.resize();
});
