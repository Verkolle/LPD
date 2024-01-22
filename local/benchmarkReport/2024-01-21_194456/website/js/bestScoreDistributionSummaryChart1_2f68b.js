
var chart_bestScoreDistributionSummaryChart1_2f68b = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_2f68b'), {
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
                                    min: -1184,
                                    max: -1184,
                                    q1: -1184,
                                    q3: -1184,
                                    median: -1184,
                                    mean: -1184,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -1198,
                                    max: -1198,
                                    q1: -1198,
                                    q3: -1198,
                                    median: -1198,
                                    mean: -1198,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2197,
                                    max: -2197,
                                    q1: -2197,
                                    q3: -2197,
                                    median: -2197,
                                    mean: -2197,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6453,
                                    max: -6453,
                                    q1: -6453,
                                    q3: -6453,
                                    median: -6453,
                                    mean: -6453,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -12079,
                                    max: -12079,
                                    q1: -12079,
                                    q3: -12079,
                                    median: -12079,
                                    mean: -12079,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -21936,
                                    max: -21936,
                                    q1: -21936,
                                    q3: -21936,
                                    median: -21936,
                                    mean: -21936,
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
                                    min: -1184,
                                    max: -1184,
                                    q1: -1184,
                                    q3: -1184,
                                    median: -1184,
                                    mean: -1184,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -1187,
                                    max: -1187,
                                    q1: -1187,
                                    q3: -1187,
                                    median: -1187,
                                    mean: -1187,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2197,
                                    max: -2197,
                                    q1: -2197,
                                    q3: -2197,
                                    median: -2197,
                                    mean: -2197,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6100,
                                    max: -6100,
                                    q1: -6100,
                                    q3: -6100,
                                    median: -6100,
                                    mean: -6100,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -12244,
                                    max: -12244,
                                    q1: -12244,
                                    q3: -12244,
                                    median: -12244,
                                    mean: -12244,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -26181,
                                    max: -26181,
                                    q1: -26181,
                                    q3: -26181,
                                    median: -26181,
                                    mean: -26181,
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
                                    min: -1184,
                                    max: -1184,
                                    q1: -1184,
                                    q3: -1184,
                                    median: -1184,
                                    mean: -1184,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -1203,
                                    max: -1203,
                                    q1: -1203,
                                    q3: -1203,
                                    median: -1203,
                                    mean: -1203,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2241,
                                    max: -2241,
                                    q1: -2241,
                                    q3: -2241,
                                    median: -2241,
                                    mean: -2241,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7114,
                                    max: -7114,
                                    q1: -7114,
                                    q3: -7114,
                                    median: -7114,
                                    mean: -7114,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -14567,
                                    max: -14567,
                                    q1: -14567,
                                    q3: -14567,
                                    median: -14567,
                                    mean: -14567,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -27184,
                                    max: -27184,
                                    q1: -27184,
                                    q3: -27184,
                                    median: -27184,
                                    mean: -27184,
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
  chart_bestScoreDistributionSummaryChart1_2f68b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_2f68b.resize();
});