
var chart_bestScoreDistributionSummaryChart1_c7928 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_c7928'), {
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
                                    min: -2031,
                                    max: -2031,
                                    q1: -2031,
                                    q3: -2031,
                                    median: -2031,
                                    mean: -2031,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3772,
                                    max: -3772,
                                    q1: -3772,
                                    q3: -3772,
                                    median: -3772,
                                    mean: -3772,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -7022,
                                    max: -7022,
                                    q1: -7022,
                                    q3: -7022,
                                    median: -7022,
                                    mean: -7022,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -16037,
                                    max: -16037,
                                    q1: -16037,
                                    q3: -16037,
                                    median: -16037,
                                    mean: -16037,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -34365,
                                    max: -34365,
                                    q1: -34365,
                                    q3: -34365,
                                    median: -34365,
                                    mean: -34365,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -69590,
                                    max: -69590,
                                    q1: -69590,
                                    q3: -69590,
                                    median: -69590,
                                    mean: -69590,
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
  chart_bestScoreDistributionSummaryChart1_c7928.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_c7928.resize();
});