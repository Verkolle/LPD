
var chart_bestScoreDistributionSummaryChart1_2ca9a = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_2ca9a'), {
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
                                    min: -2111,
                                    max: -2111,
                                    q1: -2111,
                                    q3: -2111,
                                    median: -2111,
                                    mean: -2111,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -3034,
                                    max: -3034,
                                    q1: -3034,
                                    q3: -3034,
                                    median: -3034,
                                    mean: -3034,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -6954,
                                    max: -6954,
                                    q1: -6954,
                                    q3: -6954,
                                    median: -6954,
                                    mean: -6954,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -15183,
                                    max: -15183,
                                    q1: -15183,
                                    q3: -15183,
                                    median: -15183,
                                    mean: -15183,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -31726,
                                    max: -31726,
                                    q1: -31726,
                                    q3: -31726,
                                    median: -31726,
                                    mean: -31726,
                                    items: [],
                                    outliers: [],
                                }
                            , 
                                {
                                    min: -65428,
                                    max: -65428,
                                    q1: -65428,
                                    q3: -65428,
                                    median: -65428,
                                    mean: -65428,
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
  chart_bestScoreDistributionSummaryChart1_2ca9a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_2ca9a.resize();
});