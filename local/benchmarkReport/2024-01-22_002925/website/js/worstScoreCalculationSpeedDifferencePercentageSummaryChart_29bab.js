
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_29bab = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_29bab'), {
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
                    7.728954348736562, 0, 3.1591566180100132, 5.122747789071961, 14.738448296099222, 0.4809794490599038
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    10.172064777327936, 3.326301187758287, 4.922078837881673, 0, 8.65839821589264, 6.346910632000268
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    8.111126622923356, 6.545675230471347, 11.116987518510683, 0.45135958313456387, 5.15278375523299, 7.554404493626181
                  ]
                }, 
{
                  label: 'SA 2 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.055353901996369, 0.09247753084992631, 0, 2.29349381674067, 7.641144019719082, 0
                  ]
                }, 
{
                  label: 'SA with TS 5',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 3.944744675317169, 0.05288766659614978, 5.948405563098602, 0, 6.716894823584811
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_29bab.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_29bab.resize();
});