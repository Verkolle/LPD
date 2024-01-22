
var chart_bestScoreDistributionSummaryChart1_25d7d = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_25d7d'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4', 'Problem_5'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -1030,
                                    max: -1030,
                                    q1: -1030,
                                    q3: -1030,
                                    median: -1030,
                                    mean: -1030,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3079,
                                    max: -3079,
                                    q1: -3079,
                                    q3: -3079,
                                    median: -3079,
                                    mean: -3079,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7048,
                                    max: -7048,
                                    q1: -7048,
                                    q3: -7048,
                                    median: -7048,
                                    mean: -7048,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -15779,
                                    max: -15779,
                                    q1: -15779,
                                    q3: -15779,
                                    median: -15779,
                                    mean: -15779,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -31880,
                                    max: -31880,
                                    q1: -31880,
                                    q3: -31880,
                                    median: -31880,
                                    mean: -31880,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -65276,
                                    max: -65276,
                                    q1: -65276,
                                    q3: -65276,
                                    median: -65276,
                                    mean: -65276,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -1030,
                                    max: -1030,
                                    q1: -1030,
                                    q3: -1030,
                                    median: -1030,
                                    mean: -1030,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3111,
                                    max: -3111,
                                    q1: -3111,
                                    q3: -3111,
                                    median: -3111,
                                    mean: -3111,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7273,
                                    max: -7273,
                                    q1: -7273,
                                    q3: -7273,
                                    median: -7273,
                                    mean: -7273,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -15795,
                                    max: -15795,
                                    q1: -15795,
                                    q3: -15795,
                                    median: -15795,
                                    mean: -15795,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -28805,
                                    max: -28805,
                                    q1: -28805,
                                    q3: -28805,
                                    median: -28805,
                                    mean: -28805,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -64705,
                                    max: -64705,
                                    q1: -64705,
                                    q3: -64705,
                                    median: -64705,
                                    mean: -64705,
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
                                    min: -1030,
                                    max: -1030,
                                    q1: -1030,
                                    q3: -1030,
                                    median: -1030,
                                    mean: -1030,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2969,
                                    max: -2969,
                                    q1: -2969,
                                    q3: -2969,
                                    median: -2969,
                                    mean: -2969,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7952,
                                    max: -7952,
                                    q1: -7952,
                                    q3: -7952,
                                    median: -7952,
                                    mean: -7952,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -19102,
                                    max: -19102,
                                    q1: -19102,
                                    q3: -19102,
                                    median: -19102,
                                    mean: -19102,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -35290,
                                    max: -35290,
                                    q1: -35290,
                                    q3: -35290,
                                    median: -35290,
                                    mean: -35290,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -71570,
                                    max: -71570,
                                    q1: -71570,
                                    q3: -71570,
                                    median: -71570,
                                    mean: -71570,
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
  chart_bestScoreDistributionSummaryChart1_25d7d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_25d7d.resize();
});