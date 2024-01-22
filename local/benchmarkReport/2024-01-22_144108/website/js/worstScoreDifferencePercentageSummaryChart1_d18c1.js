
var chart_worstScoreDifferencePercentageSummaryChart1_d18c1 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_d18c1'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 8.81508815088151, 1.6757976152110858, 7.857689364957919, 3.575442247658689
                  ]
                }, 
{
                  label: 'SA 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 8.651086510865108, 20.641314856590395, 7.536342769701607, -0.13735691987513007
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0.4, 9.96309963099631, 17.563648082500805, 7.2991583779648055, 1.1529656607700314
                  ]
                }, 
{
                  label: 'SA 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.6666666666666667, 1.1480114801148011, -4.205607476635514, 3.79495026778883, 3.1259105098855358
                  ]
                }, 
{
                  label: 'SA 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 9.348093480934809, 8.572349339349017, -1.4996174445294568, 5.7856399583766915
                  ]
                }, 
{
                  label: 'SA 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 3.8130381303813037, 21.237512085078954, 6.350420811017597, 7.483870967741936
                  ]
                }, 
{
                  label: 'SA 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 8.118081180811808, -2.159200773445053, 0, 0.029136316337148804
                  ]
                }, 
{
                  label: 'SA 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.6666666666666667, 8.528085280852808, 9.86142442797293, 2.0045906656465187, 0.8199791883454735
                  ]
                }, 
{
                  label: 'SA 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 3.5260352603526037, 21.978730261037704, 6.457536342769702, 4.778355879292404
                  ]
                }, 
{
                  label: 'SA 800 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.13333333333333333, 0, 0, 5.210405508798776, 0.029136316337148804
                  ]
                }, 
{
                  label: 'SA 800 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.6666666666666667, 8.323083230832308, 9.651949726071543, 11.346595256312165, 0
                  ]
                }, 
{
                  label: 'SA 800 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 9.92209922099221, 17.75700934579439, 1.996939556235654, 6.027055150884495
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
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
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
  chart_worstScoreDifferencePercentageSummaryChart1_d18c1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_d18c1.resize();
});