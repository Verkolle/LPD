
var chart_bestScoreDistributionSummaryChart0_e8a22 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_e8a22'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4', 'Problem_5'
        ],
        datasets: [
                {
                    label: 'Config_0 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -1,
                                    max: -1,
                                    q1: -1,
                                    q3: -1,
                                    median: -1,
                                    mean: -1,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2,
                                    max: -2,
                                    q1: -2,
                                    q3: -2,
                                    median: -2,
                                    mean: -2,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3,
                                    max: -3,
                                    q1: -3,
                                    q3: -3,
                                    median: -3,
                                    mean: -3,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7,
                                    max: -7,
                                    q1: -7,
                                    q3: -7,
                                    median: -7,
                                    mean: -7,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -27,
                                    max: -27,
                                    q1: -27,
                                    q3: -27,
                                    median: -27,
                                    mean: -27,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -100,
                                    max: -100,
                                    q1: -100,
                                    q3: -100,
                                    median: -100,
                                    mean: -100,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best hard score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best hard score'
                },
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
  chart_bestScoreDistributionSummaryChart0_e8a22.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_e8a22.resize();
});