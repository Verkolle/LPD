
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cc0f5 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cc0f5'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2538543552945557, 5.267962889853928, 10.136277384854235, 0, 4.878048780487805, 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.5144781600636328, 6.291946308724833, 9.31516301535277, 4.201994546744855, 9.694350108058043, 0.3791172480957184
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3.8365854896850515, 1.4878602447690485, 0, 3.7239009449818847, 0, 2.0973183541442038
                  ]
                }, 
{
                  label: 'SA 2 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.5551717331227792, 5.023287907538382, 4.661412617188959, 4.9745291756715035, 5.1719940175993875
                  ]
                }, 
{
                  label: 'SA with TS 5',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3.203641963817293, 0, 12.264964636881146, 3.4773839315728536, 5.4067613460944735, 1.7808076240826407
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cc0f5.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_cc0f5.resize();
});