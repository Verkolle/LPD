
var chart_bestScoreSummaryChart1_a3910 = new Chart(document.getElementById('chart_bestScoreSummaryChart1_a3910'), {
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
                    -366, -750, -2224, -6102, -12043, -23166
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2227, -4924, -11880, -24058
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2195, -5093, -12387, -23873
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -366, -747, -2204, -5067, -12158, -23047
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2411, -6467, -12613, -23274
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2210, -5442, -13266, -23544
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2346, -4888, -12042, -22034
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -740, -2199, -4786, -12778, -24174
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2241, -6340, -13070, -24018
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2231, -5594, -12621, -24137
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -747, -2353, -4839, -12762, -22577
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -366, -745, -2228, -4840, -12987, -23261
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
  chart_bestScoreSummaryChart1_a3910.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_a3910.resize();
});