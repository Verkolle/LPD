
var chart_bestScoreDistributionSummaryChart1_2ddce = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_2ddce'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4', 'Problem_5'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -2067,
                                    max: -2067,
                                    q1: -2067,
                                    q3: -2067,
                                    median: -2067,
                                    mean: -2067,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2786,
                                    max: -2786,
                                    q1: -2786,
                                    q3: -2786,
                                    median: -2786,
                                    mean: -2786,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6981,
                                    max: -6981,
                                    q1: -6981,
                                    q3: -6981,
                                    median: -6981,
                                    mean: -6981,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -15627,
                                    max: -15627,
                                    q1: -15627,
                                    q3: -15627,
                                    median: -15627,
                                    mean: -15627,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -34769,
                                    max: -34769,
                                    q1: -34769,
                                    q3: -34769,
                                    median: -34769,
                                    mean: -34769,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -62091,
                                    max: -62091,
                                    q1: -62091,
                                    q3: -62091,
                                    median: -62091,
                                    mean: -62091,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -2067,
                                    max: -2067,
                                    q1: -2067,
                                    q3: -2067,
                                    median: -2067,
                                    mean: -2067,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2738,
                                    max: -2738,
                                    q1: -2738,
                                    q3: -2738,
                                    median: -2738,
                                    mean: -2738,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7739,
                                    max: -7739,
                                    q1: -7739,
                                    q3: -7739,
                                    median: -7739,
                                    mean: -7739,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -18347,
                                    max: -18347,
                                    q1: -18347,
                                    q3: -18347,
                                    median: -18347,
                                    mean: -18347,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -38735,
                                    max: -38735,
                                    q1: -38735,
                                    q3: -38735,
                                    median: -38735,
                                    mean: -38735,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -69761,
                                    max: -69761,
                                    q1: -69761,
                                    q3: -69761,
                                    median: -69761,
                                    mean: -69761,
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
                text: 'Best soft score distribution summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
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
  chart_bestScoreDistributionSummaryChart1_2ddce.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_2ddce.resize();
});