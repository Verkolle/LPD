
var chart_bestScoreProblemStatisticChart1_b925d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b925d'), {
    type: 'line',
    data: {
        labels: [
            22, 23, 24, 25, 27, 76, 80, 81, 106, 108, 111, 122, 125, 126, 129, 130, 131, 134, 135, 136, 139, 140, 144, 148, 153, 156, 158, 162, 165, 166, 168, 170, 172, 173, 174, 176, 178, 179, 182, 184, 186, 187, 188, 191, 192, 195, 198, 199, 200, 204, 205, 208, 209, 211, 213, 215, 218, 221, 228, 230, 235, 242, 244, 264, 270, 271, 274, 278, 282, 285, 291, 296, 323, 335, 337, 341, 344, 345, 349, 352, 353, 360, 368, 376, 377, 383, 385, 391, 394, 399, 406, 407, 412, 425, 426, 432, 433, 446, 454, 458, 463, 464, 465, 466, 467, 468, 471, 473, 475, 477, 478, 479, 481, 484, 485, 486, 488, 489, 491, 492, 494, 495, 496, 499, 503, 505, 510, 511, 515, 516, 519, 536, 538, 540, 542, 557, 560, 568, 570, 571, 574, 579, 582, 585, 586, 589, 593, 597, 600, 606, 607, 609, 610, 611, 613, 619, 621, 622, 628, 642, 643, 647, 652, 655, 657, 711, 715, 718, 720, 723, 727, 735, 736, 737, 740, 742, 744, 747, 750, 759, 763, 767, 779, 785, 786, 788, 792, 794, 797, 799, 801, 804, 806, 808, 809, 810, 816, 818, 837, 841, 843, 851, 852, 861, 863, 864, 866, 868, 870, 874, 875, 877, 879, 880, 884, 886, 888, 891, 900, 903, 914, 917, 925, 926, 928, 930, 932, 934, 936, 938, 943, 944, 945, 947, 951, 955, 956, 959, 960, 964, 965, 971, 979, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 997, 1001, 1002, 1005, 1008, 1011, 1015, 1016, 1022, 1023, 1029, 1031, 1033, 1036, 1037, 1038, 1040, 1043, 1044, 1046, 1052, 1055, 1060, 1061, 1065, 1069, 1072, 1075, 1077, 1079, 1082, 1085, 1089, 1093, 1095, 1098, 1100, 1101, 1102, 1103, 1105, 1106, 1118, 1119, 1121, 1126, 1128, 1136, 1138, 1143, 1144, 1145, 1146, 1148, 1150, 1154, 1155, 1157, 1160, 1164, 1165, 1168, 1170, 1175, 1177, 1182, 1185, 1186, 1190, 1193, 1203, 1227, 1231, 1238, 1250, 1260, 1261, 1275, 1284, 1285, 1295, 1303, 1307, 1407, 1467, 1470, 1473, 1475, 1486, 1491, 1494, 1516, 1529, 1535, 1540, 1544, 1548, 1564, 1568, 1571, 1595, 1618, 1621, 1626, 1632, 1633, 1645, 1648, 1650, 1652, 1668, 1673, 1702, 1720, 1726, 1734, 1741, 1746, 1795, 1797, 1803, 1820, 1867, 1869, 1872, 1885, 1890, 1894, 1901, 1952, 1955, 1957, 1958, 1961, 1962, 1975, 1978, 1979, 1997, 2008, 2010, 2012, 2022, 2046, 2049, 2056, 2062, 2063, 2064, 2075, 2076, 2088, 2124, 2130, 2162, 2166, 2169, 2171, 2173, 2176, 2184, 2195, 2224, 2232, 2242, 2274, 2277, 2289, 2296, 2302, 2308, 2313, 2324, 2331, 2332, 2333, 2350, 2352, 2355, 2356, 2362, 2370, 2373, 2376, 2379, 2380, 2381, 2383, 2385, 2397, 2399, 2400, 2406, 2409, 2430, 2431, 2447, 2462, 2467, 2476, 2501, 2511, 2520, 2543, 2560, 2636, 2652, 2682, 2807, 2813, 2821, 2822, 2829, 2844, 2865, 2880, 2900, 2902, 2918, 2935, 2960, 2970, 2977, 3039, 3046, 3055, 3075, 3098, 3107, 3115, 3122, 3136, 3138, 3142, 3150, 3153, 3159, 3160, 3168, 3177, 3180, 3187, 3190, 3202, 3205, 3206, 3209, 3224, 3232, 3244, 3280, 3311, 3325, 3357, 3391, 3397, 3638, 3709, 3729, 3737, 3743, 3826, 3853, 3950, 3977, 3999, 4032, 4070, 4210, 4228, 4237, 4267, 4269, 4294, 4296, 4310, 4333, 4403, 4449, 4550, 4807, 4818, 5487, 5503, 5814, 5869, 5870, 5877, 5910, 6056, 6396, 6547, 6663, 6827, 6875, 7023, 7174, 7323, 8115, 8141, 9261, 9343, 9417, 9460, 9476, 9485, 9533, 9673, 9772, 9785, 9805, 9884, 10000
        ],
        datasets: [
            {
                  label: 'LAHC 100 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -2503, , -2498, , -2497, , -2503, , -2502, , -2820, , , -2813, , , -2804, , , , , , , , , , , -2812, , -2810, , , , -2803, , , , , , -2801, , -2797, , , , -2806, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2798, , -2790, , -2788, , , -3095, -3091, -3075, , , -3073, , -3069, , -3067, , , -3062, , -3060, , , , , -3058, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2760, -2738, , -2733, -2729, , , , , , , , , , , , , , , , , -2604, , , -2603, -2599, -2598, , -2596, , , , , , , , , , , , , -2595, , , , , , , , , , , , , , , , , , , -2594, -2591, , -2588, , -2584, , , , , , , , , , , , , , , , , , , -2582, , , -2578, -2577, , , , , , , , , , , -2568, , , -2567, -2566, , , -2565, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2263, -2258, , , , , , , , , , , , -2254, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2245, -2240, , , , , , , , , , , , -2238, , -2227, , , , , , -2223, , -2222, -2221, -2220, , , , , , , , , , , , , , , , , , , , , , , , -2218, , , -2217, -2216, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2211, -2210, , -2209, , , , , , -2206, , -2204, , , , , , , , , , , , , , , , , , -2200, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2199, , , , , , , , , , , , , , , , , , , , , , , , -2198, -2197, , , , , -2196, , , , , , , , , , , , -2195, , , -2195
                  ]
                }, 
{
                  label: 'LAHC 100 8',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -2503, , , , , , , , , , , , , , , , , , -2496, , , , -2505, , , -2503, , , , , , -2496, , , , , -2495, , , , , , -2494, , , , , -2493, , , -2489, , -2488, , , -2486, , , -2472, , , , , , -2463, , , , , , , , , , , -2459, , -2441, , , , , -2761, , -2760, -2759, , -2751, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2746, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2741, , , , -2601, , , , , , -2600, , , , -2596, , , , , , -2595, , , , , -2594, , , , , , , , -2585, , , , , , , , , , , , , , -2569, , , , , -2565, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2564, , , , , , , , , -2561, , , , -2560, , , , , , , , -2555, , , , , , , , -2552, , , -2551, , , , , , -2550, -2548, , , , , , , -2544, , , , , , -2542, , , -2541, , , , , , , , , , , , , , -2538, , , , , , , , , , , -2537, -2536, , , , -2232, , -2230, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2225, , , , , , -2222, , , , , , , , , -2218, , , , -2216, , -2215, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2210, -2209, , -2206, , , , , , , , , , , , , , , , -2205, -2204, , , , , , , , , , -2204
                  ]
                }, 
{
                  label: 'LAHC 100 16 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -2503, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2496, , , , , , -2512, , , , -2506, , , , -2807, , , , , , , , , , , , , , , -2803, , -2800, , , , , , , -2797, , , , , , , , , , , , -2793, , , , , , , -2792, , , , , , , , , , , , , , -2791, , , , , , , , , , , , , , , , -2794, , , , , -2793, , , , -2798, , , , -2783, , , , , , , , , -2777, , , , , -2776, , , , , , , , , , -2772, , , , , , , -2770, , , , , , , , , , , , , , -2766, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2757, , , , , , , , , , -2745, , , , , , , , , , , , , , , , , , , , , -2741, , , -2736, , , , -2735, , , , -2732, , , , , , -2731, , , , , , , , , , , , , , , , , , -2725, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2721, , , , , , , , , , , , , , , , , , , , , , , , , , -2719, , , , , , -2715, , , , , , , , -2710, , -2703, , , , , , -2701, -2699, , , , -2698, , , , , , , , , , , -2394, , , , , , , , , , , , , , , , , , , , , -2393, , , -2392, , , , , , , , , , , , , , -2391, , , , , , , -2386, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2242, -2234, , -2233, , -2231, , , -2229, , , -2228, , -2227, , , -2223, , -2222, , , -2221, , , , , , , , , -2220, -2218, , , , , , , , , , -2211, , , , , , , , -2211
                  ]
                }, 
{
                  label: 'LAHC 100 32',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2503, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2499, , , , , , , , , , , -2493, , , , , , -2491, , , , , , , , , , , , , , , , , , , , -2487, , , , , , , , -2483, , , , , , -2480, , , , , , , , -2332, , , , , -2323, , , , -2643, , , , , , , , , , , , -2642, , , , -2637, , , , , , , , , , , , -2635, , , , , , , , , , , , -2634, , , , , , , , , , , , , , -2628, , , , , , , , , , , , -2624, , , , , , , , , , , , , , , , -2614, , , , , , , , , -2607, , , , , , , -2606, , , , , , , , -2604, , , , , , , -2603, , , , , -2586, , , , , , , , , , , -2585, , , , , , , -2271, , , , , , , -2270, , , -2262, , , -2260, , , , , , -2258, , , -2253, , , , , -2252, , , , -2247, , , , , , , , , -2246, , , , , , , , , -2245, , , , , , , -2238, , , , , , , , , -2237, , , , , , , , , , , , , , , , , , , , , , , , , -2235, , , , , , , , , -2234, , , , , , , , -2233, , , , , , , , , , , -2230, , , , , , , , , -2227, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2222, , , , , -2221, , , , , , , , , , -2220, , , , -2219, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2219
                  ]
                }, 
{
                  label: 'LAHC 200 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2503, , , , -2498, -2497, , -2503, , , -2502, -2820, , , -2813, , , -2804, , , , , , , , , , -2812, , -2810, , , , -2803, , , , , -2801, , -2797, , , , -2806, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2798, -2790, -2788, , , -3095, , -3091, -3075, , -3073, , -3069, , -3067, , , -3062, , , , -3060, , , , , , -3058, -3057, , , , , , , , , , -3053, -3048, -3037, , -3030, , , -3029, , -2727, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2724, -2720, , , , , -2719, -2718, , , , , , , , , , , , , , , , , , , , , , , , -2711, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2707, , , , , , , , , , , , , , -2703, , , , -2698, -2691, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2378, -2374, , , , , , , , , -2372, -2369, , , , , , , , , , , , , , -2368, , , , , , , , , , -2367, -2366, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2364, -2363, , , -2362, , , , , , , , , , , , , , , , , , , , , , -2361, , , -2359, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2357, -2356, -2353, -2352, -2351, -2349, -2347, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2346, , , , , , , , , , , , , , , , , -2346
                  ]
                }, 
{
                  label: 'LAHC 200 8',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2503, , , , , , , , , , , , , , , , , , -2496, , , , , -2505, , -2503, , , , -2496, , , , , , -2495, , , , , , , -2494, , , , , -2493, , -2489, , , -2488, , , , , -2486, , , -2472, , , , , -2463, , , , , , , , , -2459, , , -2441, , , , , -2761, , -2760, -2759, , -2751, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2746, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2618, -2612, , , , , , -2608, , , -2603, , , , , , , , , , -2598, , , , , , -2583, , , -2575, , , , , , , , , , , , , , , -2573, , , , , -2571, , , -2567, -2566, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2564, , , , -2563, -2562, , , , -2560, , , -2554, , , , , -2549, , -2248, -2241, , , -2239, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2238, , , , , , , , , , , , , , , , , , , -2237, , , , -2236, , , , , , , -2223, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2219, , -2212, -2211, -2209, , , -2208, , -2207, -2206, -2202, -2201, , -2200, -2199, -2199
                  ]
                }, 
{
                  label: 'LAHC 200 16',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2503, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2496, , , , , -2512, , , , -2506, , , , , -2807, , , , , , , , , , , , , , -2803, , -2800, , , , , , -2797, , , , , , , , , , , -2793, , , , , , , , , -2792, , , , , , , , , , , , , -2791, , , , , , , , , , , , , , , , , , -2794, , , , -2793, , -2798, , , , -2783, , , , , , , , , -2777, , , , , -2776, , , , , , , , , -2772, , , , , -2770, , , , , , , , , , , , , , , -2766, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2757, , , , , , , -2745, , , , , , , , , , , , , , , , , , , , , , , , -2741, , , -2736, , , -2735, , , , , -2732, , , -2731, , , , , , , , , , , , , , , , , -2725, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2724, , , -2719, , -2717, , , , , -2713, , , , , -2706, , , , , , , , , , , , , , , , , , , , -2409, , , , -2408, , , , , -2404, , , -2403, , -2401, , , , , , -2400, , , , , , , , , , , , , -2396, , -2395, , , , , -2394, , -2392, , , , , -2235, , -2230, , , -2229, , , , , , , -2227, , , , , , , , , , , , -2226, -2225, , -2223, , , , , , , , -2222, -2220, , , -2218, , , , , , , , , , , , , , , -2217, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2217
                  ]
                }, 
{
                  label: 'LAHC 200 32',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -2503, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2499, , , , , , , , , , , , , -2493, , , , , , -2491, , , , , , , , , , , , , , , , , -2487, , , , , , , , , , , , -2483, , , , -2480, , , , , , -2332, , , , , , , , -2323, , , -2643, , , , , , , , , , , , , -2642, , , , , -2637, , , , , , , , , , , -2635, , , , , , , , , , , -2634, , , , , , , , , , , , , , , , -2628, , , , , , , , -2624, , , , , , , , , , , , , , , , , , -2614, , , , , , , , , , -2607, , , , , , , -2606, , , , , , , -2604, , , , , , , , -2603, , , , -2586, , , , , , , , , , , -2585, , , , , , , -2271, , , , , , , , , -2270, , , -2262, , , -2260, , , , -2258, , , , -2253, , , , , -2252, , , , -2247, , , , , , , , , , -2246, , , , , , , , , , -2245, , , , , , , -2238, , , , , , , -2237, , , , , , , , , , , , , , , , , , , , , , , , , , -2235, , , , , , , , , , -2234, , , , , , -2233, , , , , , , , , , , , -2230, , , , , , , , , -2227, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2222, , , , , , , -2221, , , , , , , , , , , -2220, , , , -2219, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2219
                  ]
                }, 
{
                  label: 'LAHC 400 4',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -2503, , , -2498, , -2497, , , -2503, , -2502, , -2820, , , -2813, , , -2804, , , , , , , , , , , -2812, , -2810, , , , -2803, , , , , -2801, -2797, , , , -2806, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2798, , , , -2790, , -2788, , -3095, , -3091, -3075, , -3073, , -3069, , -3067, , , , -3062, , -3060, , , , , -3058, -3057, , , , , , , , , -3053, , -3048, -3037, , -3030, , , -3029, -2727, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2726, , -2720, , , , , , , , , , , , , , , , , , , , , , , , , , , -2719, -2718, , , , , , , , , , , , -2716, , -2715, , , -2706, , , -2705, , -2704, -2702, , -2701, , , , , , , , , , , , , -2698, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2692, , , , , , , , , , , -2401, -2394, , -2393, , , , -2387, , , , , -2385, , , , , , , , , , , , -2384, -2381, -2379, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2377, -2375, -2365, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2364, , -2360, , , , , , , , , , , , -2359, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2358, -2357, -2356, -2354, -2353, , , , , , , , , , , , , , , , , , , , , , -2353
                  ]
                }, 
{
                  label: 'LAHC 400 8',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2503, , , , , , , , , , , , , , , , , , , , , -2496, , , -2505, , , -2503, , , , , -2496, , , , , , -2495, , , , , , , -2494, , , , , -2493, , , -2489, , -2488, , , -2486, , , -2472, , , , , , -2463, , , , , , , , , -2459, , , -2441, , , , -2761, , , -2760, -2759, , -2751, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2746, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2618, -2612, , -2608, , -2603, , , , , , , , , , , , , , , -2598, , , , , -2583, -2575, , , , , , , , , , , , , , , , , -2573, , , , -2571, , , -2567, , , , -2566, , , , , , , , , , , , , , , , , , , , , , , , , , , -2564, -2563, , , -2562, , , , , -2560, , , , , , -2554, , , -2549, -2248, -2241, , , -2239, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2238, , , , , , , , , -2231, , , , , , , , , , , , , , , , , , , , , , , , , , -2229, , -2228, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2228
                  ]
                }, 
{
                  label: 'LAHC 400 16',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2503, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2496, , , , , , -2512, , , -2506, -2807, , , , , , , , , , , , , , , , , -2803, , -2800, , , , , -2797, , , , , -2793, , , , , , -2792, , , , , , , , , , , , , , , , , , , , , , , -2791, , , , , , , , , , , , , , , -2794, , , , -2793, , , , , , , , -2798, -2783, , , , , , , , , , , -2777, , , , -2776, , , , , , , , , , -2772, , , , , -2770, , , , , , , , , , , , , , , -2766, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2757, , , , , , , -2745, , , , , , , , , , , , , , , , , , , , , , , , , -2741, , , -2736, , , -2735, , , , , -2732, , , , -2731, , , , , , , , , , , , , , , , , , , -2725, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2724, , , , -2719, -2717, , , , , -2713, , , , -2706, , , , , , , , , , , , , , , , , , -2409, , , , -2408, , , , , -2404, , -2403, , , -2401, , , , , -2400, , , , , , , , , , , , , , -2396, , -2395, , , , -2394, , , -2393, , , , , , , , , , , , , -2387, -2384, , -2383, , , , -2219, , , , , , , , , , , , -2217, , , , , , , , , , , , , , , , , -2214, -2213, , -2212, -2211, , -2210, , -2209, -2207, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2207
                  ]
                }, 
{
                  label: 'LAHC 400 32',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -2503, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2499, , , , , , , , , , , , , -2493, , , , , , -2491, , , , , , , , , , , , , , , , , , , -2487, , , , , , , , , , -2483, , , , -2480, , , , , , , , , -2332, , , , , -2323, , , -2643, , , , , , , , , , , , , -2642, , , , , , -2637, , , , , , , , , , -2635, , , , , , , , , , , -2634, , , , , , , , , , , , , , , , , -2628, , , , , , , , -2624, , , , , , , , , , , , , , , , , -2614, , , , , , , , , , , -2607, , , , , , , , -2606, , , , , , , , , -2604, , , , , -2603, , , , -2586, , , , , , , , , , , , -2585, , , , , , , , -2271, , , , , , , -2270, , , -2262, , , -2260, , , , -2258, , , -2253, , , , , -2252, , , , -2247, , , , , , , , -2246, , , , , , , , , , -2245, , , , , , , -2238, , , , , , , -2237, , , , , , , , , , , , , , , , , , , , , , , , , , , , -2235, , , , , , , , , , , -2234, , , , , , , -2233, , , , , , , , , , , , , , -2230, , , , , , -2227, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2222, , , , , , , -2221, , , , , , , , , , , , -2220, , , -2219, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2219
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
                        stepSize: 10
                        
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
  chart_bestScoreProblemStatisticChart1_b925d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b925d.resize();
});
