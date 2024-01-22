
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d71fd = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d71fd'), {
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
                    2.4492957064717555, 4.596096539504416, 2.9492635024549916, 5.381766884147416, 0.9825289742259125, 17.658382919145957
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 6.888775537598326, 0.9525368248772503, 2.990654205607477, 3.5426396817159658, 19.254462723136157
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    5.577875663552608, 6.311578834331123, 3.672667757774141, 0, 2.3456149455111572, 19.947497374868746
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.97516820756087, 3.409487503020215, 1.6170212765957446, 3.3856462704990298, 0, 18.53692684634232
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.333365603368993, 3.720905259201589, 1.148936170212766, 7.3743607829307, 3.1897595571700395, 16.062303115155757
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.687964890201203, 5.0632231737764775, 2.762684124386252, 5.875506965261859, 6.424494032174365, 6.818340917045853
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.76417057940849, 5.726328223576472, 2.7037643207855973, 3.4843942867219186, 2.975263795191143, 10.133006650332517
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    5.7569743614566695, 1.0604311525141614, 2.392798690671031, 5.445247751719274, 1.3630859712852448, 0
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.105490746567275, 0, 0.6481178396072014, 7.423734791042144, 2.103442311018855, 16.16380819040952
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    7.301095567710602, 6.174662407044485, 0, 4.768118497619468, 4.352188202733092, 17.906895344767236
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.800910015005567, 5.879352465838009, 3.158756137479542, 2.8460588961382474, 3.888600588133541, 20.199509975498774
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    5.305193862239218, 6.155869956240436, 2.2422258592471356, 0.2962440486686651, 1.5983393876491958, 17.115855792789638
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d71fd.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d71fd.resize();
});