
var chart_bestScoreDistributionSummaryChart0_51a34 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_51a34'), {
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
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
                                    min: -104,
                                    max: -104,
                                    q1: -104,
                                    q3: -104,
                                    median: -104,
                                    mean: -104,
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
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: 0,
                                    max: 0,
                                    q1: 0,
                                    q3: 0,
                                    median: 0,
                                    mean: 0,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -12,
                                    max: -12,
                                    q1: -12,
                                    q3: -12,
                                    median: -12,
                                    mean: -12,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -44,
                                    max: -44,
                                    q1: -44,
                                    q3: -44,
                                    median: -44,
                                    mean: -44,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -95,
                                    max: -95,
                                    q1: -95,
                                    q3: -95,
                                    median: -95,
                                    mean: -95,
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
  chart_bestScoreDistributionSummaryChart0_51a34.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_51a34.resize();
});