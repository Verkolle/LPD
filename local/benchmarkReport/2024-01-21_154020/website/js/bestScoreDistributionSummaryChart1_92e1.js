
var chart_bestScoreDistributionSummaryChart1_92e1 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_92e1'), {
    type: 'boxplot',
    data: {
        labels: [
            'Problem_0', 'Problem_1', 'Problem_2', 'Problem_3'
        ],
        datasets: [
                {
                    label: 'Config_0 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -2006,
                                    max: -2006,
                                    q1: -2006,
                                    q3: -2006,
                                    median: -2006,
                                    mean: -2006,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -2940,
                                    max: -2940,
                                    q1: -2940,
                                    q3: -2940,
                                    median: -2940,
                                    mean: -2940,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -37381,
                                    max: -37381,
                                    q1: -37381,
                                    q3: -37381,
                                    median: -37381,
                                    mean: -37381,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -68415,
                                    max: -68415,
                                    q1: -68415,
                                    q3: -68415,
                                    median: -68415,
                                    mean: -68415,
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
  chart_bestScoreDistributionSummaryChart1_92e1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_92e1.resize();
});