
var chart_bestScoreDistributionSummaryChart1_d4424 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_d4424'), {
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
                                    min: -2126,
                                    max: -2126,
                                    q1: -2126,
                                    q3: -2126,
                                    median: -2126,
                                    mean: -2126,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -4011,
                                    max: -4011,
                                    q1: -4011,
                                    q3: -4011,
                                    median: -4011,
                                    mean: -4011,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -4982,
                                    max: -4982,
                                    q1: -4982,
                                    q3: -4982,
                                    median: -4982,
                                    mean: -4982,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -14195,
                                    max: -14195,
                                    q1: -14195,
                                    q3: -14195,
                                    median: -14195,
                                    mean: -14195,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -37244,
                                    max: -37244,
                                    q1: -37244,
                                    q3: -37244,
                                    median: -37244,
                                    mean: -37244,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -66201,
                                    max: -66201,
                                    q1: -66201,
                                    q3: -66201,
                                    median: -66201,
                                    mean: -66201,
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
  chart_bestScoreDistributionSummaryChart1_d4424.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_d4424.resize();
});