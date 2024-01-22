
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4f064 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4f064'), {
    type: 'bar',
    data: {
        labels: [
            'classExample_0_5', 'classExample_1_10', 'classExample_2_25', 'classExample_3_50', 'classExample_4_100', 'classExample_5_200'
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    14.023996227667265, 17.08879980563654, 26.88616207022233, 7.923508290636221, 17.802594843159795, 13.985486420462708
                  ]
                }, 
{
                  label: 'SA 100 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    16.87769608271189, 12.39067055393586, 21.81589924270036, 7.8629926977851285, 19.949909673181146, 16.960051731570626
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    17.37368797918231, 14.179421768707485, 12.550115417324747, 6.055593657965869, 10.018065363770734, 8.654260669636441
                  ]
                }, 
{
                  label: 'SA 200 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    17.73869610017639, 16.651482021379984, 0, 14.67301407996127, 22.704877648218098, 0
                  ]
                }, 
{
                  label: 'SA 200 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    13.989067220873574, 18.634596695821184, 17.91195885473616, 0, 7.456068319921169, 10.400201178330219
                  ]
                }, 
{
                  label: 'SA 200 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 5.9675655976676385, 11.225853480743531, 12.704240125872431, 2.9766792576777794, 7.957321454231931
                  ]
                }, 
{
                  label: 'SA 400 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10.352957613650256, 4.51287657920311, 31.4583080225165, 14.955420179933029, 0, 21.439862049144992
                  ]
                }, 
{
                  label: 'SA 400 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    8.148937284968301, 0, 24.30243388814644, 23.16536894339775, 15.844145179832486, 6.15749389280069
                  ]
                }, 
{
                  label: 'SA 400 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.8024240730714824, 20.830296404275998, 15.87494431620297, 11.082422237463186, 19.715881097060272, 5.061790487138957
                  ]
                }, 
{
                  label: 'SA 800 1',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    12.927225414345342, 32.80490767735666, 14.870611104361561, 16.226247629805947, 19.740515684020366, 5.209081764621354
                  ]
                }, 
{
                  label: 'SA 800 2',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    15.227300511709949, 23.320578231292515, 17.547483092374357, 15.253963771331748, 16.587288553128595, 10.75585572639747
                  ]
                }, 
{
                  label: 'SA 800 4',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.6120609860458615, 15.992468415937806, 22.79593407038432, 16.791059829749464, 21.44851371325341, 18.465296738037075
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4f064.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4f064.resize();
});