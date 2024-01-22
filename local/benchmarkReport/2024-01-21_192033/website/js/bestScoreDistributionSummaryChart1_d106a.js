
var chart_bestScoreDistributionSummaryChart1_d106a = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_d106a'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3', 'Problem_4'
        ],
        datasets: [
                {
                    label: 'Config_0 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -2766,
                                    max: -2766,
                                    q1: -2766,
                                    q3: -2766,
                                    median: -2766,
                                    mean: -2766,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6287,
                                    max: -6287,
                                    q1: -6287,
                                    q3: -6287,
                                    median: -6287,
                                    mean: -6287,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -15231,
                                    max: -15231,
                                    q1: -15231,
                                    q3: -15231,
                                    median: -15231,
                                    mean: -15231,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -31924,
                                    max: -31924,
                                    q1: -31924,
                                    q3: -31924,
                                    median: -31924,
                                    mean: -31924,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -68934,
                                    max: -68934,
                                    q1: -68934,
                                    q3: -68934,
                                    median: -68934,
                                    mean: -68934,
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
  chart_bestScoreDistributionSummaryChart1_d106a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_d106a.resize();
});