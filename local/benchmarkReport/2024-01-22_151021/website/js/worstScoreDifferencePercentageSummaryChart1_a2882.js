
var chart_worstScoreDifferencePercentageSummaryChart1_a2882 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_a2882'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'LAHC 100 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 6.71483212919677, 0, 2.772977219167321, -7.053811659192825
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 6.332341691457713, 0.5105046141763204, 6.975648075412412, -2.834080717488789
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 6.03484912877178, 6.145690162968781, 4.021995286724273, -2.9327354260089686
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 5.694857628559286, 6.891812291380325, 7.360565593087196, -6.2152466367713
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0.2974925626859329, 4.123306499116435, 5.490966221523959, 1.1928251121076232
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.9370816599732262, 6.544836379090523, 6.0278814058511685, -0.5106048703849175, -8.403587443946188
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 5.77985550361241, 12.114667190261143, 6.0722702278083265, -5.946188340807175
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 5.694857628559286, 0.6086785784409975, 7.368421052631578, -4.1524663677130045
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 4.987237384645591, 0, 0
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 5.31236719082023, 4.967602591792657, -2.01885310290652, -7.37219730941704
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 6.204844878878029, 11.78087571176124, 6.0722702278083265, -2.928251121076233
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 5.694857628559286, 0.6086785784409975, 7.368421052631578, -6.300448430493273
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
  chart_worstScoreDifferencePercentageSummaryChart1_a2882.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_a2882.resize();
});