
var chart_worstScoreDifferencePercentageSummaryChart1_49037 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_49037'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'Tabu 5 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 9.697217675941081, 15.466249130132221, -10.06242429889127, -18.721257973594422
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 8.428805237315876, 19.65901183020181, -8.338768284729339, -18.478959600454928
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 8.8379705400982, 15.81419624217119, -9.941302524923135, -15.220293724966622
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 8.960720130932897, 13.552540013917886, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 9.574468085106384, 17.81489213639527, -18.65275319109289, -16.441675320179993
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 1.9230769230769231, 21.920668058455114, -13.118419826702693, -16.609800721950254
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 9.206219312602292, 21.60751565762004, -11.99105562284543, -18.1624882559462
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0.4091653027823241, 5.862908837856646, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 9.328968903436989, 15.779401530967293, -14.935246436224729, -15.571379122780993
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 9.615384615384617, 21.74669450243563, -5.897698686294605, -14.345052662809671
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 8.715220949263502, 11.760612386917188, -5.077797447125687, -15.05216832319636
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 1.5548281505728314, 1.9832985386221296, 0, 0
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 8.797054009819966, 15.205288796102993, -15.727196496785615, 0.009889729515897741
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 9.451718494271685, 21.450939457202505, -19.034752632069317, -21.71290115215349
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 8.633387888707038, 12.004175365344468, -8.217646510761204, -16.431785590664095
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
                        stepSize: 1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_49037.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_49037.resize();
});