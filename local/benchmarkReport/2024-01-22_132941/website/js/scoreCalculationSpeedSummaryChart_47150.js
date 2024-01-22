
var chart_scoreCalculationSpeedSummaryChart_47150 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_47150'), {
    type: 'line',
    data: {
        labels: [
            120, 480, 2943, 11696, 46784, 186796
        ],
        datasets: [
            {
                  label: 'Tabu 5 250',
                    borderWidth: 1
                  ,
                  data: [
                    63987, 38987, 28919, 27176, 23134, 27087
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                    borderWidth: 1
                  ,
                  data: [
                    63052, 38550, 28993, 27761, 28974, 31152
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                    borderWidth: 1
                  ,
                  data: [
                    61658, 38917, 26776, 26917, 28182, 33115
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                    borderWidth: 1
                  ,
                  data: [
                    62418, 38472, 29823, 28940, 27681, 33006
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                    borderWidth: 1
                  ,
                  data: [
                    64275, 38916, 30678, 28077, 22684, 26397
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                    borderWidth: 1
                  ,
                  data: [
                    65216, 38340, 28518, 28159, 28212, 31867
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                    borderWidth: 1
                  ,
                  data: [
                    65958, 38694, 30378, 28411, 28795, 33132
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                    borderWidth: 4
,
                  data: [
                    65378, 38822, 29775, 27792, 28847, 33525
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                    borderWidth: 1
                  ,
                  data: [
                    64892, 38695, 29726, 25360, 22505, 25833
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                    borderWidth: 1
                  ,
                  data: [
                    66535, 37051, 31599, 26608, 28775, 25949
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                    borderWidth: 1
                  ,
                  data: [
                    66324, 37902, 30886, 27853, 29215, 31507
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                    borderWidth: 1
                  ,
                  data: [
                    66266, 36912, 30800, 28262, 27045, 32521
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                    borderWidth: 1
                  ,
                  data: [
                    65998, 35926, 30725, 27925, 21440, 26489
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                    borderWidth: 1
                  ,
                  data: [
                    65452, 31534, 31525, 28950, 28989, 31518
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                    borderWidth: 1
                  ,
                  data: [
                    65718, 32322, 30494, 28280, 28381, 33888
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                    borderWidth: 1
                  ,
                  data: [
                    66237, 33563, 30371, 28165, 28307, 33309
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Score calculation speed summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale (logarithmic)'
                },
                ticks: {
                },
                suggestedMin: 0,
                suggestedMax: 186796,
                type: 'logarithmic',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Score calculation speed per second'
                },
                ticks: {
                        stepSize: 1000
                        
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
  chart_scoreCalculationSpeedSummaryChart_47150.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_47150.resize();
});
