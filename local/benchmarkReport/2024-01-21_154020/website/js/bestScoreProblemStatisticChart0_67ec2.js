
var chart_bestScoreProblemStatisticChart0_67ec2 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart0_67ec2'), {
    type: 'line',
    data: {
        labels: [
            1563, 1619, 1683, 1736, 1788, 1837, 1890, 1997, 2046, 2102, 2150, 2197, 2248, 2297, 2348, 2397, 2442, 2489, 2541, 2637, 2685, 2738, 2845, 2893, 2940, 2986, 3095, 3144, 3192, 3238, 3292, 3343, 3388, 3433, 3527, 3577, 3625, 3672, 3767, 3821, 3869, 3914, 3961, 4008, 4063, 4150, 4193, 4242, 4293, 4340, 4436, 4488, 4539, 4586, 4636, 4832, 4877, 4924, 4974, 5028, 5125, 5173, 5224, 5274, 5318, 5364, 5555, 5644, 5691, 5742, 5835, 5927, 6127, 6326, 6369, 6418, 6511, 6557, 6602, 6701, 7017, 7061, 7294, 7476, 7616, 7660, 7705, 7750, 7887, 7929, 8016, 8425, 8515, 8558, 8602, 8644, 8688, 8738, 8869, 9012, 9053, 9094, 9590, 9637, 9764, 9859, 9902, 9986, 10000
        ],
        datasets: [
            {
                  label: 'Config_0 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -214, -210, -207, -205, -205, -204, -200, -198, -196, -195, -194, -191, -189, -186, -184, -182, -180, -179, -178, -176, -176, -174, -174, -173, -171, -170, -170, -168, -166, -165, -164, -159, -156, -155, -155, -154, -153, -152, -152, -151, -151, -150, -149, -149, -148, -146, -145, -144, -143, -143, -142, -140, -140, -139, -138, -137, -136, -135, -135, -134, -134, -132, -132, -128, -127, -126, -126, -124, -123, -122, -122, -120, -120, -118, -117, -116, -115, -115, -114, -114, -112, -112, -111, -111, -110, -109, -108, -107, -107, -106, -105, -104, -104, -103, -101, -99, -98, -97, -97, -96, -95, -94, -94, -92, -92, -91, -90, -90, -89
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
                text: 'Problem_3 best hard score statistic'
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
  chart_bestScoreProblemStatisticChart0_67ec2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart0_67ec2.resize();
});
