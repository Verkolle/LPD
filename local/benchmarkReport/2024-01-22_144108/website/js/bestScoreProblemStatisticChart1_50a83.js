
var chart_bestScoreProblemStatisticChart1_50a83 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_50a83'), {
    type: 'line',
    data: {
        labels: [
            22, 23, 24, 25, 26, 27, 51, 56, 60, 61, 65, 73, 77, 78, 79, 82, 84, 91, 94, 95, 103, 105, 106, 107, 108, 110, 112, 115, 117, 121, 124, 126, 128, 130, 133, 137, 138, 140, 143, 146, 150, 159, 160, 162, 163, 165, 167, 169, 170, 173, 179, 180, 181, 182, 185, 189, 190, 191, 195, 199, 202, 204, 205, 207, 209, 210, 213, 214, 222, 224, 226, 229, 236, 240, 241, 242, 247, 248, 249, 250, 251, 252, 255, 258, 263, 268, 290, 301, 305, 310, 321, 323, 326, 331, 333, 339, 347, 440, 444, 449, 452, 453, 454, 457, 460, 463, 465, 466, 469, 471, 474, 475, 477, 478, 479, 482, 485, 489, 491, 492, 493, 496, 498, 499, 503, 506, 516, 519, 523, 532, 533, 540, 542, 545, 546, 548, 549, 551, 556, 558, 560, 562, 570, 575, 578, 580, 581, 585, 596, 597, 600, 620, 623, 624, 628, 644, 657, 672, 681, 689, 713, 733, 734, 737, 739, 745, 746, 758, 761, 762, 764, 767, 769, 771, 775, 787, 790, 798, 812, 813, 820, 826, 829, 840, 850, 852, 855, 868, 872, 882, 883, 886, 888, 890, 895, 896, 898, 941, 944, 953, 955, 961, 962, 967, 970, 973, 975, 984, 985, 986, 989, 993, 995, 996, 997, 1000, 1004, 1008, 1009, 1012, 1016, 1020, 1035, 1039, 1043, 1044, 1047, 1049, 1050, 1052, 1053, 1058, 1060, 1064, 1065, 1067, 1073, 1074, 1075, 1095, 1097, 1101, 1107, 1141, 1147, 1155, 1159, 1162, 1170, 1184, 1185, 1192, 1195, 1199, 1201, 1208, 1218, 1261, 1265, 1283, 1291, 1302, 1316, 1333, 1336, 1341, 1362, 1389, 1393, 1401, 1480, 1483, 1489, 1490, 1491, 1494, 1510, 1514, 1545, 1548, 1549, 1571, 1595, 1601, 1610, 1633, 1638, 1640, 1641, 1642, 1645, 1708, 1713, 1814, 1832, 1839, 1840, 1871, 1872, 1883, 1884, 1890, 1915, 1930, 1933, 1953, 2004, 2058, 2063, 2071, 2077, 2078, 2079, 2089, 2090, 2094, 2140, 2143, 2148, 2168, 2210, 2216, 2228, 2261, 2270, 2284, 2286, 2289, 2297, 2320, 2340, 2345, 2352, 2374, 2376, 2380, 2381, 2431, 2436, 2437, 2443, 2447, 2464, 2467, 2536, 2537, 2598, 2615, 2633, 2644, 2645, 2648, 2661, 2664, 2666, 2691, 2694, 2712, 2728, 2736, 2754, 2787, 2794, 2950, 2965, 2980, 2997, 3071, 3089, 3093, 3137, 3167, 3197, 3220, 3222, 3234, 3235, 3250, 3258, 3295, 3316, 3346, 3391, 3412, 3453, 3487, 3488, 3491, 3509, 3514, 3516, 3534, 3543, 3577, 3584, 3590, 3594, 3668, 3678, 3761, 3794, 3810, 3819, 3837, 3838, 3928, 4008, 4009, 4093, 4106, 4254, 4262, 4485, 4515, 4533, 4539, 4551, 4679, 4681, 4690, 4696, 4697, 4700, 4709, 4747, 4756, 4764, 4769, 4773, 4782, 4789, 4800, 4833, 4837, 4849, 4851, 4856, 4858, 4862, 4865, 4868, 4883, 4891, 4894, 4897, 4927, 4933, 4948, 4996, 5106, 5109, 5127, 5128, 5168, 5177, 5183, 5288, 5364, 5390, 5435, 5436, 5442, 5561, 5565, 5587, 5761, 5763, 5769, 5865, 5894, 5916, 5917, 5919, 5922, 5924, 5970, 5999, 6000, 6001, 6002, 6008, 6049, 6064, 6167, 6369, 6372, 6375, 6387, 6389, 6397, 6409, 6411, 6418, 6447, 6449, 6513, 6571, 6587, 6667, 6671, 7021, 7167, 7215, 7282, 7284, 7329, 7395, 7407, 7520, 7529, 7546, 7984, 7986, 8068, 8189, 8242, 8252, 8536, 8591, 8712, 8754, 9414, 9792, 9811, 9813, 10000
        ],
        datasets: [
            {
                  label: 'SA 100 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -2503, , -2498, , , , , , , , , , , , -2835, , , , , -2826, , , , , , , , , , , , , , , , , , , -3410, , , , , , , , , , , , , , , , , , , , , , , , , , , , -3332, -3052, -3044, , -3051, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2954, -2886, , , , , , , , , , , , , , , , , , , , , , -2809, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2520, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3156, , , , , , , , , , , , , , , , , , , , -2973, -2961, -2960, -2953, , , , , , -2952, , , , -2947, -2946, , , , , -2944, -2935, , , -2933, -2637, , , -2628, -2627, , , , , , -2620, , , , , , , , , , , , , , , , -2617, , , , , , , , , , , , , , , , -2615, -2606, , -2605, , , , , , , , , , , , -2598, -2597, , , , , , , , -2596, -2588, -2586, , , , , , , , , , -2580, , , -2577, , , , , , -2576, -2574, , , , , , , , , , , -2568, , , -2563, , , -2562, -2561, -2557, -2556, , , , , -2255, , , , , , , , , , , , , , , , , , , , , , , -2253, , , -2252, , -2244, , , -2240, , , , , , , , , , , -2239, , , , , , , , , , , , , -2238, , , , , -2237, , , , , , , , , , , -2233, -2232, , , , , , , , , , , , , , , -2226, , , , , , , , , , , , -2225, , , , , , , , , , , , -2224, , , , , -2224
                  ]
                }, 
{
                  label: 'SA 100 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -2503, , , , , , -2498, , , , , , , , , , , , , , , -2502, , , , , , , , , , , , , , , , , , , , , , -2671, , , , , , , , , , , , , , , -2666, , -2669, , , , , , -2676, , , , , , , , , , -2686, -2682, -2671, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2646, -2639, , , , -2649, -2647, -2640, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2397, , , , , , , , , , , , , , , , , , , , , , , , , , , , -2389, , , , , , , , , -2386, -2384, , , , , , -2381, , , , -2241, , , , , , , , , , , , , , , , , , , -2239, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2238, , , , , , -2237, -2236, , , , , , , , , , , , , , -2234, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2233, , -2231, -2230, , , , , , , , -2229, -2228, , , , , , -2228
                  ]
                }, 
{
                  label: 'SA 100 4 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -2503, , , , , , , , , , -2498, , -2497, , , , , , , , , , -2503, , , , , -2502, , -2820, , -2813, , -2804, , , , , , , , , , , -2812, , -2810, -2803, , , , , -2801, , -2797, , -2806, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2798, , , , , , , , , , -2790, , , , -2788, , , , -3095, , , -3091, , , -3075, , -3073, -3069, , -3067, , , , , , , , , , -3062, , , , , , , , , -3060, , -3058, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2760, -2738, , -2733, -2729, , , , , , , -2604, , -2603, -2599, -2598, -2596, , , , , , , , , , , , , , , , -2595, , , , , , , , , , , , , , , , , -2594, -2591, -2588, -2584, , , -2582, -2578, -2577, , , , , -2568, -2567, -2566, -2565, , , , , , , , , , , , , -2263, -2258, , , , , , , , , , , , , , , , , , , , , , , , , , , , -2254, , , , , , , , , , , , , , , , , , , , , , , -2245, -2240, , , , , , , , , , , , , -2238, , -2227, -2223, , , -2222, , -2221, -2220, , , , , , , , , , , , , , -2218, -2217, -2216, , , , , , , , , , -2211, , , , -2210, , , -2209, , , , -2206, -2204, , , , , , , , , , , , , , , -2200, , , , , , , , , , , , , , , , , , , , -2199, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2198, , , -2197, , , , , , , -2196, , , , , , , , , , , , , -2196
                  ]
                }, 
{
                  label: 'SA 200 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2503, , , , , -2498, , , , , , , , , , , -2835, , , -2826, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3410, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3151, -3138, , , , , , , , -3793, -3791, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3539, -3528, -3522, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3218, -3208, , , , , , , , , , , , , , , , , , , , -3228, -3226, -3218, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2710, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2686, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2411, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2411
                  ]
                }, 
{
                  label: 'SA 200 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -2503, , , , , , -2498, , , , , , , , , , , , , , , , -2502, , , , , , , , , , , , , , , , , , , , , , -2671, , , , , , , , , , , , , , , -2666, , -2669, , , , , -2676, , , , , , , -2682, , -2671, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2991, -2988, -2981, -2973, -2960, , , , , , , , , , , , , , -2958, -2951, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2618, -2617, -2615, -2612, , , , -2598, -2597, , , , -2593, -2583, -2582, , , , , , , , , , -2578, , , , , , , , , , -2575, -2572, , , -2261, , , , , , , , , , , , , , , , , , , , , , -2251, , , , , , , , , -2250, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2244, -2241, , , , , , , , , , , , , , , , , , , , , , , , , , , -2234, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2232, -2231, -2230, , , , , , , , , , , -2229, , , , , -2225, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2223, , , , , , , , , , , , , , , , , , , , , -2222, -2220, , , , , , , , , , , , , , , -2218, -2217, , , , , , , , , , , , -2215, , , , , -2213, -2211, , , , , , , , -2211
                  ]
                }, 
{
                  label: 'SA 200 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2503, , , , , , , , , , , , , , , , , , , , , , , , , , -2498, , , -2497, , , , , , , -2503, , , , , , , , -2502, -2820, -2813, -2804, , -2812, -2810, -2803, -2801, -2797, , -2806, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2798, -2790, , , , , , , , -2788, , , -3095, , -3091, -3075, , -3073, , -3069, -3067, , , -3062, -3060, , , , , -3058, , , -3057, , , , , , , , , , -3053, , , , , , -3048, , , , , -3037, , , , , , , -3030, , , , , , , , , , -3029, , , , , , , -2727, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2724, -2720, , , , , -2719, -2718, , , , , , -2711, , , , , , , , , , , -2707, , , , -2703, , , -2698, -2691, , , , , , , , , , , , , , , , , , , , , , , , , , -2378, -2374, , , , -2372, , -2369, , , , , , , , , , , -2368, , , , , , , , , -2367, -2366, , , , , , , , , , , , , , -2364, -2363, , , , , , , -2362, , , , , , , , , , , , , , , , , , , , , -2361, , , , , , -2359, , , , , , , , , -2357, -2356, , , , , , , , , , , , , , , -2353, , , , , , , , -2352, , , -2351, -2349, , -2347, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2346, , , , , , , , , , , -2346
                  ]
                }, 
{
                  label: 'SA 400 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2503, , , , , -2498, , , , , , , , , , , , -2835, , , , , -2826, , , , , , , , , , , , , , , , , , -3410, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3081, -3071, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3583, , , , , , , , , , , , , , , , , , , , , , , , , , , -3731, , , , , , , , , , , , , , , , , , , , , -3258, -3253, , , , , , , , , , , , , , , , , , , -3588, -3585, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3360, , , , , , , , , , , , , , , , , , , , , , , , , , , , -3120, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3003, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2763, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2757, , , , , , , , , , , , , , , , , , , , -2740, -2729, , , , , , , , , , , , , , , , , , , , , , , , , , , -2706, , , , , , , , , , -2703, , , , , , , , , , , , , , , , , , -2629, -2627, -2625, -2616, , , , , -2443, -2440, , -2439, -2438, -2437, -2434, , , , , , , , , , , , , , , , , , , , , , , -2258, , , , , , , , -2241, , , , -2241
                  ]
                }, 
{
                  label: 'SA 400 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2503, , , , , , , , -2498, , , , , , , , , , , , , , -2502, , , , , , , , , , , , , , , , , , , , , , , -2671, , , , , , , , , , , , , , , -2666, , -2669, , , , , , -2676, , , , , , , , -2682, , -2671, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2658, , , , , -2639, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3019, -3003, , , , , -2991, -2976, -2975, , , , , , , , , , -2968, , -2963, -2958, -2954, , , , , , , , , , , , , -2650, -2640, -2638, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2630, -2618, -2616, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2615, , , -2612, -2611, -2610, -2609, -2604, -2603, , -2599, , , , , , , , , , , , , , , , , , , , , , , , , -2597, -2596, , , , -2595, -2592, , -2589, -2588, -2581, -2572, , , -2275, , -2269, -2268, , -2266, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2259, -2252, -2248, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2246, -2245, , -2238, , , , , , , , , -2236, , , , , , , -2234, -2232, -2231, -2231
                  ]
                }, 
{
                  label: 'SA 400 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2503, , , , , , , , , , , -2498, -2497, , , , , , , , -2503, , , , , , , , -2502, -2820, , -2813, , -2804, , , , , , , , , -2812, , -2810, , , -2803, , , , -2801, , -2797, , , -2806, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2798, -2790, -2788, -3095, , -3091, -3075, -3073, -3069, , -3067, , -3062, , , , -3060, , , , , , , -3058, -3057, , , , , , , , , , , , , , -3053, , , -3048, -3037, , -3030, , -3029, , -2727, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2726, -2720, , , , , , , , , , , -2719, -2718, , , , , , , , , -2716, , -2715, -2706, -2705, , , , , , , -2704, , , -2702, , -2701, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2698, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2692, , , , -2401, -2394, -2393, , , , , -2387, , , , , -2385, , , , , , , , , , , -2384, -2381, -2379, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2377, -2375, -2365, , , , , , , , , , , , , , , , , , , , , , , , , , -2364, -2360, , , -2359, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2358, -2357, , -2356, , , -2354, , , , -2353, , , , , , , , , , , , , , , , , , , , , , , , -2353
                  ]
                }, 
{
                  label: 'SA 800 1',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2503, , , , , -2498, , , , , , , , , , , -2835, , , , -2826, , , , , , , , , , , , , , , , , , , , , -3410, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3081, , -3071, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3594, , , , -3587, -3579, , -3578, -3571, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3550, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3127, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2855, -2845, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2655, -2652, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2471, -2463, -2453, -2449, , -2439, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2439
                  ]
                }, 
{
                  label: 'SA 800 2',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -2503, , , , , , , , , , , , -2498, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2502, , , , , , , , , , , , , -2671, , , , , , , , , , , , , , , , , , , , , , -2666, , -2669, , , -2676, , , , , -2682, -2671, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2658, , -2639, , , , , , , , , , , , , , , , , , , , , , , , , , -2977, -2976, -2970, -2959, , -2958, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2604, -2589, -2587, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2491, -2487, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2236, , , , , , , , , , , , , , , , , , , , , , , , , -2236
                  ]
                }, 
{
                  label: 'SA 800 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -2503, , , , , , , , , , , , -2498, , -2497, , , , , , , , , , , -2503, , , , , , , , -2502, , -2820, , -2813, -2804, , , , , , , , , , , , -2812, , -2810, , , -2803, , , -2801, , -2797, , , , -2806, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2798, , -2790, , -2788, , -3095, , -3091, -3075, -3073, -3069, -3067, , , -3062, , , -3060, , -3058, -3057, , , , , , , , , , , , , , , -3053, , -3048, , -3037, -3030, -3029, , -2727, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2726, -2720, , , , , , , , , , , -2719, -2718, , , , , , , , , , , , -2716, , -2715, -2706, -2705, -2704, , -2702, -2701, , , , , , , , , -2698, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2696, , , , , , , , , , , , , , , , , , , , , , , , , , -2419, -2414, -2412, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2228, -2226, , , , , , , , , -2225, , , , -2224, , -2222, -2220, -2217, , -2216, -2213, , -2212, , -2211, -2210, -2208, -2205, , , , , -2203, -2202, , , , , -2201, , , , , , , , , , , , , , , , , , , , , , , , , -2198, , -2197, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2197
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
                text: 'classExample_2_25 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_50a83.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_50a83.resize();
});
