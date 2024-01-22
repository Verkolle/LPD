
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_62c22 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_62c22'), {
    type: 'bar',
    data: {
        labels: [
            'classExample10', 'classExample100', 'classExample200', 'classExample25', 'classExample5', 'classExample50'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.9068047337278107, 14.423833614390109, 3.735830458353869, 4.170734683915059, 8.122208325888868, 9.755459168411607
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    4.6301775147929, 0, 5.158534581895843, 0, 10.330534214757906, 1.2376607837271911
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    4.1962524654832345, 1.371557054525014, 7.051092492196484, 0.7413961435196484, 10.19653385742362, 3.810200418785522
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    1.0355029585798818, 2.7131347198800824, 5.040249712502053, 2.2241884305589457, 0, 1.0357463356266825
                  ]
                }, 
{
                  label: 'SA with TS 5',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 3.6537380550871275, 0, 3.7100317305345376, 11.504377345006253, 0
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
                },
                ticks: {
                        stepSize: 0.1
                        
                },
                type: 'linear',
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_62c22.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_62c22.resize();
});