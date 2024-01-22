
var chart_worstScoreDifferencePercentageSummaryChart1_31434 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_31434'), {
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
                    0, 0, 7.756117793446703, 3.7539432176656153, 7.857689364957919, 4.022869453536065
                  ]
                }, 
{
                  label: 'LAHC 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 7.631688096225632, 22.334384858044164, 9.104820198928845, 0.3272983386502051
                  ]
                }, 
{
                  label: 'LAHC 100 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 8.958938199917046, 19.668769716088327, 5.225707727620505, 1.0937564734639764
                  ]
                }, 
{
                  label: 'LAHC 100 8 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0.4, 8.585649108253838, 20.078864353312305, 6.977811782708493, 4.515888469983842
                  ]
                }, 
{
                  label: 'LAHC 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.6666666666666667, 0, -2.003154574132492, 3.4965570007651112, 3.57542362348262
                  ]
                }, 
{
                  label: 'LAHC 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 8.336789713811696, 14.16403785488959, -1.4996174445294568, 2.4568090483490077
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 2.6959767731231854, 22.902208201892744, 7.865340474368783, 8.712764635207359
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 1.3333333333333335, 8.79303193695562, 24.51104100946372, 2.234123947972456, -0.15329162696275428
                  ]
                }, 
{
                  label: 'LAHC 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 7.051016175860639, 0, 0, 0.49301901644777724
                  ]
                }, 
{
                  label: 'LAHC 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.6666666666666667, 7.465781833264205, 11.766561514195583, 3.4353481254781943, 0
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.4, 2.4056408129406885, 23.675078864353313, 2.3565416985462893, 6.463106434105316
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0.6666666666666667, 7.590211530485276, 23.65930599369085, 0.6350420811017597, 3.629282843766831
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
  chart_worstScoreDifferencePercentageSummaryChart1_31434.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_31434.resize();
});