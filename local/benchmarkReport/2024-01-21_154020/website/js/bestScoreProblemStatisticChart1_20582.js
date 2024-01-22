
var chart_bestScoreProblemStatisticChart1_20582 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_20582'), {
    type: 'line',
    data: {
        labels: [
            1563, 1619, 1683, 1736, 1788, 1837, 1890, 1997, 2046, 2102, 2150, 2197, 2248, 2297, 2348, 2397, 2442, 2489, 2541, 2637, 2685, 2738, 2845, 2893, 2940, 2986, 3095, 3144, 3192, 3238, 3292, 3343, 3388, 3433, 3527, 3577, 3625, 3672, 3718, 3767, 3821, 3869, 3914, 3961, 4008, 4063, 4150, 4193, 4242, 4293, 4340, 4436, 4488, 4539, 4586, 4636, 4832, 4877, 4924, 4974, 5028, 5080, 5125, 5173, 5224, 5274, 5318, 5364, 5457, 5509, 5555, 5644, 5691, 5742, 5787, 5835, 5927, 6031, 6127, 6326, 6369, 6418, 6511, 6557, 6602, 6701, 7017, 7061, 7294, 7338, 7434, 7476, 7616, 7660, 7705, 7750, 7887, 7929, 8016, 8425, 8515, 8558, 8602, 8644, 8688, 8738, 8827, 8869, 9012, 9053, 9094, 9137, 9188, 9231, 9273, 9590, 9637, 9764, 9859, 9902, 9944, 9986, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -59128, -59506, -59393, -59872, -59819, -59785, -60321, -60737, -60726, -60825, -60782, -60762, -60524, -60913, -61311, -61303, -61659, -61867, -62243, -62694, -62381, -62431, -62211, -62209, -62251, -62651, -62626, -62678, -62645, -62987, -63387, -63723, -64227, -64169, -63930, -63986, -64113, -64521, -64398, -64020, -64063, -63865, -63886, -64221, -64209, -64548, -64590, -64522, -64856, -64756, -64730, -64846, -64836, -64792, -65031, -65258, -65800, -65749, -65845, -65826, -66273, -66217, -65913, -66321, -66228, -66198, -66271, -66233, -66139, -65781, -65690, -65786, -65685, -65716, -65703, -65655, -65729, -65647, -65574, -65912, -65898, -66207, -66190, -66161, -66193, -66097, -66366, -66307, -66798, -66786, -66412, -66326, -66298, -66605, -66977, -67485, -67407, -67492, -67648, -68199, -68169, -68212, -68409, -68677, -68704, -68799, -68766, -68630, -68767, -68563, -68864, -68832, -68828, -68784, -68660, -68369, -68331, -68310, -68568, -68530, -68421, -68416, -68415
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
  chart_bestScoreProblemStatisticChart1_20582.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_20582.resize();
});
