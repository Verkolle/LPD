
var chart_bestScoreProblemStatisticChart1_db636 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_db636'), {
    type: 'line',
    data: {
        labels: [
            1340, 1343, 1345, 1346, 1348, 1352, 1358, 1359, 1362, 1366, 1370, 1371, 1376, 1378, 1380, 1381, 1384, 1385, 1391, 1394, 1397, 1401, 1409, 1411, 1417, 1421, 1425, 1428, 1439, 1444, 1446, 1448, 1460, 1467, 1468, 1487, 1490, 1492, 1503, 1524, 1537, 1543, 1547, 1551, 1570, 1574, 1590, 1597, 1605, 1614, 1618, 1631, 1634, 1635, 1637, 1654, 1658, 1679, 1684, 1697, 1711, 1717, 1724, 1725, 1747, 1748, 1752, 1767, 1773, 1779, 1789, 1796, 1819, 1836, 1854, 1864, 1865, 1880, 1898, 1921, 1924, 1932, 1936, 1947, 1961, 1972, 1983, 1997, 2015, 2018, 2027, 2048, 2050, 2067, 2099, 2100, 2102, 2108, 2140, 2154, 2167, 2183, 2184, 2189, 2198, 2202, 2206, 2221, 2243, 2244, 2273, 2278, 2279, 2280, 2284, 2289, 2315, 2323, 2325, 2331, 2335, 2360, 2366, 2367, 2368, 2372, 2380, 2397, 2412, 2450, 2453, 2458, 2467, 2483, 2488, 2491, 2500, 2510, 2536, 2537, 2555, 2558, 2564, 2570, 2578, 2617, 2622, 2630, 2646, 2649, 2654, 2660, 2673, 2700, 2730, 2740, 2742, 2783, 2785, 2800, 2804, 2810, 2824, 2835, 2866, 2881, 2897, 2920, 2925, 2948, 2970, 2984, 2986, 3010, 3027, 3028, 3061, 3072, 3074, 3099, 3157, 3177, 3196, 3201, 3244, 3247, 3252, 3267, 3274, 3278, 3286, 3331, 3349, 3356, 3362, 3373, 3397, 3414, 3440, 3441, 3447, 3452, 3466, 3472, 3496, 3501, 3510, 3522, 3541, 3550, 3559, 3573, 3590, 3601, 3622, 3629, 3649, 3666, 3709, 3728, 3733, 3744, 3749, 3793, 3809, 3829, 3862, 3922, 3929, 3947, 3948, 3969, 3980, 4004, 4005, 4025, 4026, 4031, 4036, 4064, 4082, 4143, 4145, 4159, 4182, 4183, 4185, 4205, 4206, 4227, 4250, 4268, 4307, 4311, 4343, 4363, 4366, 4367, 4418, 4445, 4466, 4513, 4523, 4536, 4547, 4555, 4567, 4615, 4616, 4637, 4648, 4692, 4696, 4703, 4721, 4736, 4737, 4747, 4771, 4776, 4780, 4793, 4808, 4830, 4839, 4849, 4896, 4919, 4930, 4938, 4942, 4951, 4956, 4980, 4982, 5018, 5024, 5030, 5055, 5063, 5086, 5108, 5111, 5149, 5156, 5165, 5188, 5195, 5201, 5236, 5242, 5244, 5269, 5286, 5287, 5310, 5331, 5343, 5356, 5376, 5397, 5398, 5415, 5430, 5438, 5440, 5465, 5466, 5471, 5475, 5482, 5489, 5502, 5524, 5567, 5592, 5603, 5609, 5622, 5630, 5633, 5647, 5670, 5679, 5686, 5707, 5718, 5724, 5740, 5759, 5763, 5765, 5768, 5784, 5800, 5806, 5812, 5827, 5838, 5852, 5856, 5866, 5894, 5930, 5943, 5947, 6001, 6004, 6006, 6009, 6023, 6037, 6045, 6090, 6097, 6133, 6175, 6217, 6230, 6255, 6271, 6284, 6294, 6307, 6312, 6329, 6344, 6353, 6375, 6380, 6393, 6395, 6413, 6434, 6464, 6488, 6492, 6511, 6543, 6552, 6574, 6575, 6622, 6641, 6655, 6656, 6698, 6727, 6737, 6739, 6787, 6795, 6813, 6821, 6831, 6860, 6905, 6919, 6946, 6953, 6965, 6997, 7001, 7013, 7032, 7053, 7090, 7113, 7163, 7171, 7178, 7191, 7223, 7251, 7253, 7266, 7268, 7272, 7306, 7334, 7337, 7357, 7391, 7422, 7443, 7497, 7499, 7505, 7531, 7578, 7655, 7673, 7685, 7699, 7726, 7737, 7749, 7755, 7771, 7802, 7814, 7815, 7841, 7856, 7858, 7890, 7894, 7899, 7924, 7935, 7940, 7975, 7987, 8044, 8060, 8066, 8086, 8093, 8108, 8127, 8132, 8146, 8154, 8199, 8203, 8228, 8242, 8264, 8283, 8313, 8325, 8394, 8472, 8509, 8518, 8549, 8555, 8589, 8592, 8599, 8610, 8630, 8671, 8697, 8753, 8761, 8802, 8886, 8905, 8947, 8980, 9024, 9068, 9103, 9227, 9340, 9389, 9391, 9472, 9476, 9566, 9614, 9639, 9655, 9656, 9698, 9724, 9733, 9743, 9823, 9888, 9912, 9936, 9979, 9982, 9991, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 250',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , -20228, , , , , , -20223, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -20223
                  ]
                }, 
{
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -20228, , , , , , , -20223, , , , , , , , , , , , -20221, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -22724, , , -22723, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23355, -23343, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -24009, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -24009
                  ]
                }, 
{
                  label: 'Tabu 5 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -20228, , , , , , , , , , , , , , , -20223, , , , , , , , , , -20220, , , , , , -20532, , , , , , , , , -20857, , , , -20853, , , , , -21185, , , , , , , , , -21191, , , , , , -21187, , , , , , , , , , , , , , , -21824, , , , -21822, , , , , , , -21836, , , , , , , , -21859, , , , , , -21851, , , , , , , , , , , , , -22187, , , , , -22179, , , , , , , , , , -22750, , , , , , , , , -22740, , , , , , , -22740, , , , -22643, , , , , , -22623, , , , , , , , , , , , , , , , , , , , , , , , , -22954, , , , , , , , , , , , , , , -22642, , , , , -22633, , , -22628, , , , , , -22625, , , -22610, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -22836, , , , -22833, , , , , -22853, , , , -22868, , , -22861, , , , , , , -22864, , , -23182, , , , , -23167, , , , , , , , , , , , , , , , , , , , , , , -23184, , , , , , -23198, , , , , -23193, , , , , , , , , , , , -22547, , , -22546, , , , -22538, , , , -22537, , , , , -22839, , , , , , , , , , , , , , , , , , , , , , -22843, , -22843, , , , -22832, , , -22826, , , -22821, , , -22820, , , , -22839, , , , , , , , , , , , , , -23152, , , , , , , , , -23154, , , -23484, , -23484, , , , , , , -23483, , , -23476, , , -23451, , , , -23465, , , , , , , , , , , -23929, , -23926, , , , , -23925, , , -23916, , , -23901, , , -23901, , -23909, , , , , , , , , , , , , , , , , , , -23975, , , , , , -23963, , -23960, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23960
                  ]
                }, 
{
                  label: 'Tabu 5 2000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -20228, , , , , , , , , , , , , , , , , , , , , , , , , -20223, , , , , , , , , -20535, , , , , , , , , , -20531, , , , , , , , , -20863, , , , , , , , , , -20859, , , , , , -20850, , , , , , , , -21180, , , , , , , -21218, , , , , , , -21231, , , , , , , -21235, , , , , , , , , -21227, , , , , , , , , , , , -21549, , , , -21542, , , , , , , , , -21525, , , , , , , -21993, , , , , , , , -22004, , , , , -21991, , , , , , -21971, , , , , -21984, , , , , , -21981, , , , , , , , , , , , , , -21987, , , , , -22307, , , , , -22325, , , , , , , , -22318, , , , , , -22649, , , , , , , , , , , , , , , -22973, , , , , , , , , , , , -22976, , , -22668, , , , , , , , , -23133, , , , , , , , , , , , , , , , -23118, , , -23109, , , , , , , -23413, , , , , , , -23405, , , -23404, , , , , , , , , , , , -23411, , , , , -23402, , , , , -23378, , , , , , , , , , , -23383, , , , , , , , -23399, , , , , , , , , , -23716, , , , , , -23721, , , , , , , , -23407, , , , , , , , , , , , , , , , , -23419, , , , , , , , , , , , -23413, , , , , , , -23401, , , , , , , , , -23399, , , , -23094, , , , -23091, , , , -23083, , , , , , , , , -23071, , , , , -23069, , , -23059, , , , -23382, , , , , -23372, , , , , , , , , , -23379, , , -23045, -23042, , , , , , , , , , , , , , , -23375, , , , , , , , -23374, , , , , , -23226, , , , , -23222, , , , -23220, , , , , , , , , , , -23352, , , , , -23350, , , , -23342, , -23336, , -23343, , -23323, , , -23319, , -23323, -23317, , , -23311, , , , , , , , , , , , -23301, -23301
                  ]
                }, 
{
                  label: 'Tabu 10 250',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , -20228, , , , -20223, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -20223
                  ]
                }, 
{
                  label: 'Tabu 10 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , -20228, , , , , , , , -20223, , , , , , , , -20221, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23554, , -23548, , -23536, , -23522, , -23548, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23548
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -20228, , , , , , , , , , , , , , -20223, , , , , , , , , , -20220, , , , -20532, , , , , , , , , -20857, , , , , -20853, , , , , , -21185, , , , , , , , , -21191, , , , , , -21187, , , , , , , , , -21824, , , , , , , , , , , , , , , , , , , , , , , , , , -21852, , , , -21844, , , , , -21840, , , , -22174, , , , , -22496, , , , , , , , , , , , -23067, , , , , , , , , -23500, , , , , , , -23500, , , , -23403, , -23090, , , , , -23070, , , , , , , , , , , , , , , , -23079, , , , -22756, , , , , , -22892, , , , , , , , , , , , , , , -22892, , , -22887, , , , , , -22884, , , -22873, , , , , , , , , , , , , , , -23209, , , , , -22873, , , , -22884, , -22881, , , , -22873, , , , -22871, , , , -22870, , , , , , , , -22865, , , , -22864, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -22875, , , -22871, , , , , -22866, , , , , -22864, , , , , -22874, , , -23189, -23184, , , -22871, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -22874, , , , , -22873, -23193, , -23191, -23173, , , , , , , , , , -23504, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23203, , , -23537, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23198, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23207, , -23203, , -23201, , , , -23186, -23182, , , -23181, -23178, -23582, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23582
                  ]
                }, 
{
                  label: 'Tabu 10 2000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , , , , -20228, , , , , , , , , , , , , , , , , -20223, , , , , , , , , -20535, , , , , , , , , , , -20531, , , , , , , , , -20863, , , , , , , , , , -20859, , , , , , -20850, , , , , , , -21180, , , , , , , -21218, , , , , , , -21231, , , , , , , , , -21235, , , , , , , , , -21227, , , , , , , , , , , -21549, , , , , , -21542, , , , , , , , , -22010, , , , , , -22021, , , , , , , , , , , , , -22014, , , , , -21994, , , , , -22007, , , , , , , , , -21977, , , , , -21976, , , , , , -21981, , , , , , -21999, , , , , , , -21992, , , , , , , -22323, , , , , , , , -21999, , , , , -22010, , , , , , , -21998, , , , , , , , , , , , , , , , , -22013, , , , , , , , , -22318, , -22304, , , , , , , , , , , , , , , , , , , , , -22303, , , , , , , , , , -22621, , , , , , -22620, , , , , , , , , , -22597, , , , , , -22592, , , , , , -22605, , , , , , -22595, , , , , , , , , , , , -22611, , , , , , , , -22924, , , , , , , , -22923, , , , , , , -22922, , , , -22919, , , , , , -22929, , , , -22912, , , -22908, , , -22921, , , , , , , , , , , , , -22920, , , , -22918, , , , -22910, , , , -22901, , , , , -22893, , , , , -22877, , , -22860, , , , , -22854, , , , -23174, , , -23170, , , , , -23269, , , , , -23260, , , , , , -23583, , , , , , , , , , , , , , , , , , , , , , , , , , , -23690, , , -23552, , , , , , -23551, , , , -23544, , , , -23555, , -23551, -23547, , , , , , , , , , , , , , , , , -23549, , -23550, , -23553, , -23873, , , , , , , , , , , , , , , , , , , -23896, , -23896
                  ]
                }, 
{
                  label: 'Tabu 15 250',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -20228, , , , , -20223, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -20223
                  ]
                }, 
{
                  label: 'Tabu 15 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , -20228, , , , , -20223, , , , , , -20221, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23380, , , , , -23370, , , , -23357, , , -23349, , , , , , , -23372, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23372
                  ]
                }, 
{
                  label: 'Tabu 15 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , -20228, , , , , , , , -20223, , , , , , -20220, , , , , -20532, , , , , , , , , , -20857, , , , -20853, , , , , , -21185, , , , , , , , , -21191, , , , -21187, , , , , , , , , , , -21824, , , , , , , -21823, , , , , , , , , -21838, , , , , , , , , -21846, , , , , -21838, , , , , , , -21834, , , , -21846, , , -22168, , , , , -22160, , , , , , , , , , , -22143, , , , , -22611, , , , , , , , , , , , , , , , , , , , , , -22645, , , -22640, , , -22638, , , -22644, , , -22637, , , , , , -22299, , , , -22619, , -22637, , , , , , , , , , , , , , , , , , , , -22978, , , , -22975, -22972, , , , , , , , , -23010, , , , , -23006, , , , , -23011, , , , , -22993, , , , , , , -22984, , , , -22993, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23003, , , , , , -22990, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23596, , , , , , , -23613, , , , -23607, , , , -23606, , , , -23605, , , , , -23600, , , , , , , -23596, , , -23592, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23156, , , -23162, -23141, , , -23134, , -23130, , -23126, -23124, , , -23124
                  ]
                }, 
{
                  label: 'Tabu 15 2000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , -20228, , , , , , , , , , , , , , , , -20223, , , , , , , , -20535, , , , , , , , , , , -20531, , , , , , , , , -20863, , , , , , , , -20859, , , , , , , -20850, , , , , , , , -21180, , , , , , , -21218, , , , , , , -21231, , , , , , , , , -21235, , , , , , , , , , , -21227, , , , , , , , , , -21549, , , , , , , , , -21542, , , , , , , , -22010, , , , , , , -22021, , , , , , , , , , , -22014, , , , , , -21994, , , , , , -22007, , , , , , , , , , , -21977, , , , , -21982, , , , , , , -22000, , , , , , , , , , , , , , -21995, , , , , -22326, , , , , , -22337, , , , , , , , , , , , , , , , , -22331, , , , , , , -22329, , , , -22333, , , , , , , , , -22638, , , , , -22624, , , , , -22306, , , , , , , , -22304, , , , , , , , , , , , , , , , -22303, , , , , -22620, , , , , , -22627, , , , , , , -22626, , , , , , -22602, , , , , , , , , , -22603, , , -22604, , , , , , , , , , , , , , , , , , , , , , , , , -22620, , , , -22599, , , , , , , -22593, , , , -22592, , -22598, , , , , , -22597, , , , , , , , -22596, , , , -22587, , , , , , -22600, , , , -22588, , , -22585, , , , , -22583, , , -22582, , , , , , , , , , , , -22608, , , , , -22606, , , , , , , -22593, , , -22927, , , , -22923, , , , -22955, , , , , , -23270, , , , , -23290, , , , , , -23281, , , , , , , , , -23289, , , , , , , , , , -23274, , , , , , , -23270, , , , , , -23268, , , -23263, , , , , , , , , , , , , -23280, , -23271, , , , -23265, , , , -23267, , , , , , , , , , -23267
                  ]
                }, 
{
                  label: 'Tabu 20 250',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -20228, , , , -20223, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -20223
                  ]
                }, 
{
                  label: 'Tabu 20 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -20228, , , , , , -20223, , , , , , , , , , , , , -20221, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -20221
                  ]
                }, 
{
                  label: 'Tabu 20 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -20228, , , , , , , , , , , , , , , -20223, , , , , , , , , , -20220, , , , , , , , -20532, , , , , , , , , -20857, , , , -20853, , , , , , , -21185, , , , , , , , -21191, , , , , , -21187, , , , , , , , , , -21824, , , , , , , , -21823, , , , , , , -21838, , , , , , -21846, , , , , -21838, , , , -21834, , , , , , , -21846, , , , , -22168, , , , , , -22160, , , , , , , , , , , -22605, , , -23038, , , , , , , , , , , , , , , , , , , , , , , -23029, , -23042, , , -23036, , -22714, , , , , , -22703, , , , , , , -22365, -22498, , , , , , , , , , , , , , , , , , , , , , , , , , -22525, , , -22512, , , , , , , , , , , , , -22854, , , -22846, , , , , , , , , -22858, , , , , , , , , , , , -23186, , , , , , , , , , , , -23488, , , , -23486, , , , , , , -23483, , , , -23452, , , , -23452, , , -23769, , , , , , , , , , , , , , , -23790, , , -23788, , -23783, , , , -23778, , , -23779, , , -23789, , , , , , , , , , , , -23814, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -24333, , -24331, , , , -24328, , , -24329, , , -24328, , , -24321, , , -24639, , , , , , , , , , , , , -24621, , , -24614, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -24614
                  ]
                }, 
{
                  label: 'Tabu 20 2000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , -20228, , , , , , , , , , , , , , , , , , , , , -20223, , , , , , , , , , -20535, , , , , , , , , -20531, , , , , , , , , , -20863, , , , , , , , , -20859, , , , , , , -20850, , , , , , , , -21180, , , , , , , -21218, , , , , , , -21231, , , , , -21235, , , , , , , , , -21227, , , , , , , , , , , -21549, , , , , , , , , -21542, , , , , , , , , -22010, , , , , , , -22021, , , , , , , , , , , , , -22014, , , , , , , -21994, , , , , , -22007, , , , , , , , , -21977, , , , , , -21982, , , , , , -22000, , , , , , , , -21993, , , , , , , , -22324, , , , , , , , , , , -22000, , , , , -22011, , , , , , , , , -21999, , , , , , , , , , , , -22357, , , , , , , , , , -22660, , , , -22646, , , , , , , , , , -22663, , , , , -22637, , , , , , , , -22635, , , , -22952, , , , , , , , -22959, , , , , , -22946, , , , , , -22922, , , , , , -22923, , , , , , -22924, , , , , , , , -22914, , , , , , , , , , , , , , -23229, , , , , , , -23542, , , , , , , , , -23541, , , , , , , , , -23537, , , , , , , , -23520, , , , , , , -23537, , , , , , , -23653, , , , , , -23372, , , , , -23370, , , , -23256, , , , -23247, , , , , -23236, , , , -23219, , , , , -23217, , , , , -23202, , , , -23198, , , , , , , -23195, , , , -23194, , , -23525, , , , -23527, , , , , , , , , , , -23539, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -23559, , -23558, , -23555, , , , , -23546
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
                text: 'classExample_5_200 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 10000,
                type: 'linear',
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
  chart_bestScoreProblemStatisticChart1_db636.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_db636.resize();
});
