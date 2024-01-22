
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e5d9a = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e5d9a'), {
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
                    0.0015285611653750324, 0.6780091416962926, 0.53475935828877, 0, 4.3207936008941985, 0.924600334049153
                  ]
                }, 
{
                  label: 'SA 1 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.9014728288471305, 0, 1.6818307140887785, 4.229976597156729, 1.3153185397279885
                  ]
                }, 
{
                  label: 'SA 1 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.752052093364516, 0.9319451498222447, 2.010179756458991, 4.208023159636063, 2.5638338747423943, 2.141493676926748
                  ]
                }, 
{
                  label: 'SA 2 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.0440072759511472, 0.22092432706957849, 1.475420398170221, 0.7513096222773642, 2.899158196234587, 1.0737294201861132
                  ]
                }, 
{
                  label: 'SA 2 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.8880940370828939, 0.11427120365667852, 0.6668384769022614, 3.2637165701681834, 3.870201543889064, 1.7448103078024337
                  ]
                }, 
{
                  label: 'SA 2 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.0070008101374177, 0.5281868969019807, 1.8619934282584885, 1.8403639371381306, 2.52191833455587, 1.1661894535910284
                  ]
                }, 
{
                  label: 'SA 4 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.270234328426652, 1.8537328593194518, 0.18362218929192708, 1.499172870140612, 3.83876488874917, 2.386065378191362
                  ]
                }, 
{
                  label: 'SA 4 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.2656486449305269, 0.11681056373793804, 4.142774305779267, 1.795561069754618, 3.9121170840755877, 1.2914578859460748
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.5991959768270128, 0, 0.04510018684363121, 3.770333609043287, 5.731950120507178, 2.46957766642806
                  ]
                }, 
{
                  label: 'SA 8 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.3057122330750065, 1.1681056373793803, 1.0050898782294955, 2.929418251998897, 0, 0.9931997136721546
                  ]
                }, 
{
                  label: 'SA 8 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.44328273795875944, 1.4779075672930422, 1.4528703047484053, 0.3618693134822167, 3.1576373607181534, 2.5501073729420187
                  ]
                }, 
{
                  label: 'SA 8 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.5900246098347626, 1.7318435754189943, 2.6351394884350237, 3.9392059553349874, 3.4056376401550876, 0
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e5d9a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_e5d9a.resize();
});