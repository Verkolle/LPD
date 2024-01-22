
var chart_worstScoreDifferencePercentageSummaryChart1_1e1ed = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_1e1ed'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'SA 1 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 7.592824363788068, 10.70931849791377, -5.668420097950299, -4.557757792718065
                  ]
                }, 
{
                  label: 'SA 1 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 7.717980809345015, 4.3115438108484, -4.008706693270452, 0.9953723915131406
                  ]
                }, 
{
                  label: 'SA 1 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 7.676261994159366, 4.251937214385058, -3.809178305822601, 0.23574609272679647
                  ]
                }, 
{
                  label: 'SA 2 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 7.88485607008761, 10.788793959864892, 0, -1.7375360167641667
                  ]
                }, 
{
                  label: 'SA 2 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 7.926574885273258, 0, -7.346272446943587, -1.0477604121190955
                  ]
                }, 
{
                  label: 'SA 2 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.2677376171352075, 7.300792657488528, 4.013510828531691, -3.3829131144567386, -0.9080590238365494
                  ]
                }, 
{
                  label: 'SA 4 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 10.609974170474866, -2.9294395066207146, -2.724177071509648
                  ]
                }, 
{
                  label: 'SA 4 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 7.676261994159366, 10.172859129743692, -6.167241066569925, -4.042608923426177
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0.2677376171352075, 7.926574885273258, 3.9141665010927875, -5.450752766189008, -3.9509298873657555
                  ]
                }, 
{
                  label: 'SA 8 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.13386880856760375, 3.796412181894034, 3.4373137293860516, -4.2898603301287865, -3.715183794638959
                  ]
                }, 
{
                  label: 'SA 8 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.9370816599732262, 7.425949103045474, 3.4174448638982717, -9.45945945945946, -0.9648127128263337
                  ]
                }, 
{
                  label: 'SA 8 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 7.008760951188986, 3.97377309755613, -6.25793578813713, 0
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
  chart_worstScoreDifferencePercentageSummaryChart1_1e1ed.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_1e1ed.resize();
});