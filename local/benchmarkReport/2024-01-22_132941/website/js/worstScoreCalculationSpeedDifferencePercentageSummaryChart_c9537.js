
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c9537 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c9537'), {
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
                    3.7772876188004805, 23.63480687511892, 8.003435912757693, 7.160883280757098, 7.901119402985074, 4.854256183950761
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.260858282785689, 22.249001078201307, 8.279802808485211, 9.467665615141955, 35.13992537313433, 20.58994309603995
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 23.412824253187036, 0, 6.139589905362776, 31.445895522388064, 28.188750822591256
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.232605663498654, 22.001649013762922, 11.379593665969525, 14.11671924290221, 29.109141791044774, 27.766809894321216
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    4.24438029128418, 23.409653072873724, 14.572751717956379, 10.71372239747634, 5.802238805970149, 2.183253977470677
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    5.770540724642382, 21.583053212405655, 6.505826112936959, 11.037066246056783, 31.58582089552239, 23.3577207447838
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.9739530961108045, 22.705651043318323, 13.452345383925904, 12.030757097791799, 34.305037313432834, 28.254558123330625
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    6.033280352914463, 23.11156212342234, 11.20032865252465, 9.589905362776026, 34.547574626865675, 29.775868075717106
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    5.2450614680982195, 22.708822223631635, 11.017328951299671, 0, 4.967350746268657, 0
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.909760290635441, 17.4954017885457, 18.012399163429937, 4.921135646687698, 34.211753731343286, 0.44903805210389813
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.567550034058841, 20.194076235174734, 15.349566776217507, 9.830441640378549, 36.263992537313435, 21.964154376185498
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.473482759739207, 17.054607724995243, 15.028383627128772, 11.443217665615142, 26.142723880597014, 25.889366314404054
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.038827078400208, 13.927823936069005, 14.748282043621153, 10.114353312302839, 0, 2.539387605001355
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.153297220149859, 0, 17.73603226770242, 14.15615141955836, 35.20988805970149, 22.006735570781558
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.584709202374388, 2.4988900868903405, 13.885569166417689, 11.514195583596216, 32.3740671641791, 31.181047497387066
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.42644912257939, 6.434324855711296, 13.426202569465193, 11.060725552050474, 32.02891791044776, 28.939728254558123
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c9537.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_c9537.resize();
});