
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9eccf = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9eccf'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'LAHC 100 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    33.185905941323895, 3.0990299897162235, 2.869263143830583, 5.7705171988874415, 15.928425929624158, 4.703770197486535
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    28.049114382595143, 0, 5.711804395751219, 5.344505862056826, 6.578264169029836, 8.088787334747838
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 6.954056532977571, 5.180706794041018, 3.823539766926029, 15.249430842353318, 7.537130732821935
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    34.36321897179925, 9.322104560993912, 2.1410915892845215, 2.7954793507728057, 9.414067180572752, 9.035417006691693
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    37.5687116952044, 1.9233441729897998, 9.219052708931793, 8.080132380382354, 7.580780444941487, 5.239105598172025
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    40.121311682567764, 9.536118291225437, 5.932260004008284, 5.288173784459388, 6.973678955146384, 9.198629019095804
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    41.41024830985025, 9.347119152839156, 0.8216981762308772, 0, 10.748092822622517, 8.979924922474295
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    42.690760514732204, 13.527335390088663, 4.412452401630036, 2.2075132908495583, 17.985381635179934, 11.336706381589686
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    39.70219666814094, 6.08688401567581, 12.996860177700581, 5.464211526951378, 3.24320006390542, 9.939611555410478
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    41.951517449084896, 9.505544901192362, 8.57772730309306, 6.826743653839383, 0, 6.7308633915456175
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    41.51976580105726, 9.055282247977987, 4.282183178569043, 7.192902158222723, 11.702680033550346, 1.4264729884119471
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    21.107390324550874, 11.954195502932267, 0, 5.502939830299616, 18.14514518512601, 0
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9eccf.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_9eccf.resize();
});