
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8d72c = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8d72c'), {
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
                    2.08216435904824, 6.152813213374513, 0.5407390099803064, 8.822753814277643, 4.637384339684745, 0
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.4901047906461837, 5.878877400295421, 0.7677158783671016, 0, 3.734045276670446, 5.9474584175345875
                  ]
                }, 
{
                  label: 'LAHC 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3.145235892691952, 8.580636497918626, 9.719950599152174, 7.828216236579394, 0, 4.790921809420177
                  ]
                }, 
{
                  label: 'SA 2 100 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 7.146501947092789, 4.632998431189292, 3.8651346769636468, 5.324946055663241, 6.336079589616042
                  ]
                }, 
{
                  label: 'SA with TS 5',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3.108839720356076, 0, 0, 10.977585232623847, 7.2742566653256775, 5.6925229286491525
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8d72c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_8d72c.resize();
});