
var chart_bestScoreSummaryChart1_1a2df = new Chart(document.getElementById('chart_bestScoreSummaryChart1_1a2df'), {
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
                    -366, -745, -2215, -4494, -11651, -23950
                  ]
                }, 
{
                  label: 'SA 1 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2212, -4816, -11468, -22678
                  ]
                }, 
{
                  label: 'SA 1 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2213, -4819, -11446, -22852
                  ]
                }, 
{
                  label: 'SA 2 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2208, -4490, -11026, -23304
                  ]
                }, 
{
                  label: 'SA 2 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2207, -5033, -11836, -23146
                  ]
                }, 
{
                  label: 'SA 2 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2222, -4831, -11399, -23114
                  ]
                }, 
{
                  label: 'SA 4 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2397, -4499, -11349, -23530
                  ]
                }, 
{
                  label: 'SA 4 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2213, -4521, -11706, -23832
                  ]
                }, 
{
                  label: 'SA 4 400 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -366, -745, -2207, -4836, -11627, -23811
                  ]
                }, 
{
                  label: 'SA 8 100',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -746, -2306, -4860, -11499, -23757
                  ]
                }, 
{
                  label: 'SA 8 200',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -740, -2219, -4861, -12069, -23127
                  ]
                }, 
{
                  label: 'SA 8 400',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2229, -4833, -11716, -22906
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
                text: 'Best soft score summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 100
                        
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
  chart_bestScoreSummaryChart1_1a2df.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_1a2df.resize();
});