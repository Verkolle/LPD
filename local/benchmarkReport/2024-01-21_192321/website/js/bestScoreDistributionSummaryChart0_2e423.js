
var chart_bestScoreDistributionSummaryChart0_2e423 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart0_2e423'), {
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
                                    min: -13,
                                    max: -13,
                                    q1: -13,
                                    q3: -13,
                                    median: -13,
                                    mean: -13,
                                    items: [],
                                    outliers: [],
                                }
                            , 
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
                                    min: -34,
                                    max: -34,
                                    q1: -34,
                                    q3: -34,
                                    median: -34,
                                    mean: -34,
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
  chart_bestScoreDistributionSummaryChart0_2e423.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart0_2e423.resize();
});