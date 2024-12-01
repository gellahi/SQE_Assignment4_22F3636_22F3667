/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1244.0, "minX": 0.0, "maxY": 10532.0, "series": [{"data": [[0.0, 1244.0], [0.1, 1244.0], [0.2, 1255.0], [0.3, 1255.0], [0.4, 1257.0], [0.5, 1257.0], [0.6, 1257.0], [0.7, 1257.0], [0.8, 1265.0], [0.9, 1265.0], [1.0, 1266.0], [1.1, 1266.0], [1.2, 1266.0], [1.3, 1266.0], [1.4, 1272.0], [1.5, 1272.0], [1.6, 1275.0], [1.7, 1275.0], [1.8, 1276.0], [1.9, 1276.0], [2.0, 1279.0], [2.1, 1279.0], [2.2, 1280.0], [2.3, 1280.0], [2.4, 1280.0], [2.5, 1280.0], [2.6, 1284.0], [2.7, 1284.0], [2.8, 1285.0], [2.9, 1285.0], [3.0, 1286.0], [3.1, 1286.0], [3.2, 1286.0], [3.3, 1286.0], [3.4, 1287.0], [3.5, 1287.0], [3.6, 1289.0], [3.7, 1289.0], [3.8, 1289.0], [3.9, 1291.0], [4.0, 1292.0], [4.1, 1292.0], [4.2, 1292.0], [4.3, 1292.0], [4.4, 1293.0], [4.5, 1293.0], [4.6, 1293.0], [4.7, 1293.0], [4.8, 1293.0], [4.9, 1294.0], [5.0, 1294.0], [5.1, 1297.0], [5.2, 1297.0], [5.3, 1301.0], [5.4, 1301.0], [5.5, 1306.0], [5.6, 1306.0], [5.7, 1307.0], [5.8, 1307.0], [5.9, 1308.0], [6.0, 1308.0], [6.1, 1308.0], [6.2, 1308.0], [6.3, 1310.0], [6.4, 1310.0], [6.5, 1311.0], [6.6, 1311.0], [6.7, 1311.0], [6.8, 1311.0], [6.9, 1312.0], [7.0, 1312.0], [7.1, 1312.0], [7.2, 1312.0], [7.3, 1313.0], [7.4, 1313.0], [7.5, 1317.0], [7.6, 1317.0], [7.7, 1317.0], [7.8, 1317.0], [7.9, 1323.0], [8.0, 1323.0], [8.1, 1325.0], [8.2, 1325.0], [8.3, 1325.0], [8.4, 1325.0], [8.5, 1326.0], [8.6, 1326.0], [8.7, 1328.0], [8.8, 1328.0], [8.9, 1328.0], [9.0, 1328.0], [9.1, 1330.0], [9.2, 1330.0], [9.3, 1332.0], [9.4, 1332.0], [9.5, 1332.0], [9.6, 1332.0], [9.7, 1333.0], [9.8, 1333.0], [9.9, 1334.0], [10.0, 1334.0], [10.1, 1337.0], [10.2, 1337.0], [10.3, 1337.0], [10.4, 1337.0], [10.5, 1338.0], [10.6, 1338.0], [10.7, 1340.0], [10.8, 1341.0], [10.9, 1341.0], [11.0, 1341.0], [11.1, 1341.0], [11.2, 1341.0], [11.3, 1341.0], [11.4, 1341.0], [11.5, 1341.0], [11.6, 1341.0], [11.7, 1342.0], [11.8, 1346.0], [11.9, 1346.0], [12.0, 1358.0], [12.1, 1358.0], [12.2, 1359.0], [12.3, 1359.0], [12.4, 1361.0], [12.5, 1361.0], [12.6, 1363.0], [12.7, 1363.0], [12.8, 1365.0], [12.9, 1365.0], [13.0, 1365.0], [13.1, 1365.0], [13.2, 1367.0], [13.3, 1367.0], [13.4, 1369.0], [13.5, 1369.0], [13.6, 1370.0], [13.7, 1370.0], [13.8, 1370.0], [13.9, 1370.0], [14.0, 1371.0], [14.1, 1371.0], [14.2, 1373.0], [14.3, 1373.0], [14.4, 1375.0], [14.5, 1375.0], [14.6, 1376.0], [14.7, 1376.0], [14.8, 1376.0], [14.9, 1376.0], [15.0, 1376.0], [15.1, 1376.0], [15.2, 1378.0], [15.3, 1378.0], [15.4, 1378.0], [15.5, 1378.0], [15.6, 1379.0], [15.7, 1379.0], [15.8, 1380.0], [15.9, 1380.0], [16.0, 1381.0], [16.1, 1381.0], [16.2, 1386.0], [16.3, 1386.0], [16.4, 1388.0], [16.5, 1388.0], [16.6, 1391.0], [16.7, 1391.0], [16.8, 1391.0], [16.9, 1391.0], [17.0, 1392.0], [17.1, 1392.0], [17.2, 1395.0], [17.3, 1395.0], [17.4, 1396.0], [17.5, 1396.0], [17.6, 1396.0], [17.7, 1396.0], [17.8, 1397.0], [17.9, 1397.0], [18.0, 1402.0], [18.1, 1402.0], [18.2, 1402.0], [18.3, 1402.0], [18.4, 1402.0], [18.5, 1402.0], [18.6, 1406.0], [18.7, 1406.0], [18.8, 1409.0], [18.9, 1409.0], [19.0, 1410.0], [19.1, 1410.0], [19.2, 1411.0], [19.3, 1411.0], [19.4, 1418.0], [19.5, 1418.0], [19.6, 1419.0], [19.7, 1419.0], [19.8, 1422.0], [19.9, 1422.0], [20.0, 1424.0], [20.1, 1424.0], [20.2, 1425.0], [20.3, 1425.0], [20.4, 1428.0], [20.5, 1428.0], [20.6, 1432.0], [20.7, 1432.0], [20.8, 1435.0], [20.9, 1435.0], [21.0, 1436.0], [21.1, 1436.0], [21.2, 1436.0], [21.3, 1436.0], [21.4, 1439.0], [21.5, 1439.0], [21.6, 1441.0], [21.7, 1441.0], [21.8, 1441.0], [21.9, 1441.0], [22.0, 1442.0], [22.1, 1442.0], [22.2, 1444.0], [22.3, 1444.0], [22.4, 1447.0], [22.5, 1447.0], [22.6, 1447.0], [22.7, 1447.0], [22.8, 1450.0], [22.9, 1450.0], [23.0, 1450.0], [23.1, 1450.0], [23.2, 1452.0], [23.3, 1452.0], [23.4, 1453.0], [23.5, 1453.0], [23.6, 1453.0], [23.7, 1453.0], [23.8, 1453.0], [23.9, 1453.0], [24.0, 1455.0], [24.1, 1455.0], [24.2, 1459.0], [24.3, 1459.0], [24.4, 1461.0], [24.5, 1461.0], [24.6, 1463.0], [24.7, 1463.0], [24.8, 1463.0], [24.9, 1463.0], [25.0, 1467.0], [25.1, 1467.0], [25.2, 1468.0], [25.3, 1468.0], [25.4, 1470.0], [25.5, 1470.0], [25.6, 1475.0], [25.7, 1475.0], [25.8, 1477.0], [25.9, 1477.0], [26.0, 1480.0], [26.1, 1480.0], [26.2, 1483.0], [26.3, 1483.0], [26.4, 1483.0], [26.5, 1483.0], [26.6, 1491.0], [26.7, 1491.0], [26.8, 1493.0], [26.9, 1493.0], [27.0, 1494.0], [27.1, 1494.0], [27.2, 1495.0], [27.3, 1495.0], [27.4, 1502.0], [27.5, 1502.0], [27.6, 1503.0], [27.7, 1503.0], [27.8, 1504.0], [27.9, 1504.0], [28.0, 1504.0], [28.1, 1504.0], [28.2, 1505.0], [28.3, 1505.0], [28.4, 1508.0], [28.5, 1508.0], [28.6, 1508.0], [28.7, 1508.0], [28.8, 1509.0], [28.9, 1509.0], [29.0, 1513.0], [29.1, 1513.0], [29.2, 1515.0], [29.3, 1515.0], [29.4, 1516.0], [29.5, 1516.0], [29.6, 1521.0], [29.7, 1521.0], [29.8, 1522.0], [29.9, 1522.0], [30.0, 1523.0], [30.1, 1523.0], [30.2, 1526.0], [30.3, 1526.0], [30.4, 1528.0], [30.5, 1528.0], [30.6, 1531.0], [30.7, 1531.0], [30.8, 1536.0], [30.9, 1536.0], [31.0, 1544.0], [31.1, 1544.0], [31.2, 1544.0], [31.3, 1544.0], [31.4, 1551.0], [31.5, 1551.0], [31.6, 1551.0], [31.7, 1551.0], [31.8, 1553.0], [31.9, 1553.0], [32.0, 1555.0], [32.1, 1555.0], [32.2, 1556.0], [32.3, 1556.0], [32.4, 1556.0], [32.5, 1556.0], [32.6, 1559.0], [32.7, 1559.0], [32.8, 1562.0], [32.9, 1562.0], [33.0, 1563.0], [33.1, 1563.0], [33.2, 1563.0], [33.3, 1563.0], [33.4, 1564.0], [33.5, 1564.0], [33.6, 1566.0], [33.7, 1566.0], [33.8, 1567.0], [33.9, 1567.0], [34.0, 1569.0], [34.1, 1569.0], [34.2, 1574.0], [34.3, 1574.0], [34.4, 1583.0], [34.5, 1583.0], [34.6, 1588.0], [34.7, 1588.0], [34.8, 1588.0], [34.9, 1588.0], [35.0, 1589.0], [35.1, 1589.0], [35.2, 1591.0], [35.3, 1591.0], [35.4, 1603.0], [35.5, 1603.0], [35.6, 1606.0], [35.7, 1606.0], [35.8, 1608.0], [35.9, 1608.0], [36.0, 1612.0], [36.1, 1612.0], [36.2, 1615.0], [36.3, 1615.0], [36.4, 1616.0], [36.5, 1616.0], [36.6, 1616.0], [36.7, 1616.0], [36.8, 1617.0], [36.9, 1617.0], [37.0, 1619.0], [37.1, 1619.0], [37.2, 1630.0], [37.3, 1630.0], [37.4, 1642.0], [37.5, 1642.0], [37.6, 1646.0], [37.7, 1646.0], [37.8, 1646.0], [37.9, 1646.0], [38.0, 1647.0], [38.1, 1647.0], [38.2, 1651.0], [38.3, 1651.0], [38.4, 1653.0], [38.5, 1653.0], [38.6, 1656.0], [38.7, 1656.0], [38.8, 1656.0], [38.9, 1656.0], [39.0, 1661.0], [39.1, 1661.0], [39.2, 1663.0], [39.3, 1663.0], [39.4, 1663.0], [39.5, 1664.0], [39.6, 1664.0], [39.7, 1675.0], [39.8, 1675.0], [39.9, 1675.0], [40.0, 1675.0], [40.1, 1676.0], [40.2, 1676.0], [40.3, 1677.0], [40.4, 1677.0], [40.5, 1677.0], [40.6, 1677.0], [40.7, 1680.0], [40.8, 1680.0], [40.9, 1685.0], [41.0, 1685.0], [41.1, 1689.0], [41.2, 1689.0], [41.3, 1691.0], [41.4, 1691.0], [41.5, 1691.0], [41.6, 1691.0], [41.7, 1694.0], [41.8, 1694.0], [41.9, 1695.0], [42.0, 1695.0], [42.1, 1696.0], [42.2, 1696.0], [42.3, 1697.0], [42.4, 1697.0], [42.5, 1701.0], [42.6, 1701.0], [42.7, 1707.0], [42.8, 1707.0], [42.9, 1711.0], [43.0, 1711.0], [43.1, 1711.0], [43.2, 1711.0], [43.3, 1714.0], [43.4, 1714.0], [43.5, 1714.0], [43.6, 1714.0], [43.7, 1728.0], [43.8, 1728.0], [43.9, 1730.0], [44.0, 1730.0], [44.1, 1737.0], [44.2, 1737.0], [44.3, 1737.0], [44.4, 1737.0], [44.5, 1739.0], [44.6, 1739.0], [44.7, 1757.0], [44.8, 1757.0], [44.9, 1757.0], [45.0, 1757.0], [45.1, 1757.0], [45.2, 1757.0], [45.3, 1759.0], [45.4, 1759.0], [45.5, 1766.0], [45.6, 1766.0], [45.7, 1770.0], [45.8, 1770.0], [45.9, 1775.0], [46.0, 1775.0], [46.1, 1775.0], [46.2, 1775.0], [46.3, 1788.0], [46.4, 1788.0], [46.5, 1788.0], [46.6, 1788.0], [46.7, 1797.0], [46.8, 1797.0], [46.9, 1800.0], [47.0, 1800.0], [47.1, 1800.0], [47.2, 1800.0], [47.3, 1809.0], [47.4, 1809.0], [47.5, 1816.0], [47.6, 1816.0], [47.7, 1818.0], [47.8, 1818.0], [47.9, 1818.0], [48.0, 1818.0], [48.1, 1818.0], [48.2, 1818.0], [48.3, 1825.0], [48.4, 1825.0], [48.5, 1828.0], [48.6, 1828.0], [48.7, 1833.0], [48.8, 1833.0], [48.9, 1836.0], [49.0, 1836.0], [49.1, 1842.0], [49.2, 1842.0], [49.3, 1847.0], [49.4, 1847.0], [49.5, 1849.0], [49.6, 1849.0], [49.7, 1853.0], [49.8, 1853.0], [49.9, 1875.0], [50.0, 1875.0], [50.1, 1875.0], [50.2, 1875.0], [50.3, 1899.0], [50.4, 1899.0], [50.5, 1912.0], [50.6, 1912.0], [50.7, 1913.0], [50.8, 1913.0], [50.9, 1917.0], [51.0, 1917.0], [51.1, 1933.0], [51.2, 1933.0], [51.3, 1936.0], [51.4, 1936.0], [51.5, 1938.0], [51.6, 1938.0], [51.7, 1940.0], [51.8, 1940.0], [51.9, 1949.0], [52.0, 1949.0], [52.1, 1960.0], [52.2, 1960.0], [52.3, 1962.0], [52.4, 1962.0], [52.5, 1969.0], [52.6, 1969.0], [52.7, 1973.0], [52.8, 1973.0], [52.9, 1973.0], [53.0, 1973.0], [53.1, 1988.0], [53.2, 1988.0], [53.3, 1990.0], [53.4, 1990.0], [53.5, 2005.0], [53.6, 2005.0], [53.7, 2008.0], [53.8, 2008.0], [53.9, 2009.0], [54.0, 2009.0], [54.1, 2012.0], [54.2, 2012.0], [54.3, 2015.0], [54.4, 2015.0], [54.5, 2021.0], [54.6, 2021.0], [54.7, 2038.0], [54.8, 2038.0], [54.9, 2038.0], [55.0, 2038.0], [55.1, 2056.0], [55.2, 2056.0], [55.3, 2061.0], [55.4, 2061.0], [55.5, 2084.0], [55.6, 2084.0], [55.7, 2103.0], [55.8, 2103.0], [55.9, 2109.0], [56.0, 2109.0], [56.1, 2116.0], [56.2, 2116.0], [56.3, 2121.0], [56.4, 2121.0], [56.5, 2131.0], [56.6, 2131.0], [56.7, 2132.0], [56.8, 2132.0], [56.9, 2133.0], [57.0, 2133.0], [57.1, 2140.0], [57.2, 2140.0], [57.3, 2143.0], [57.4, 2143.0], [57.5, 2163.0], [57.6, 2163.0], [57.7, 2170.0], [57.8, 2170.0], [57.9, 2175.0], [58.0, 2175.0], [58.1, 2179.0], [58.2, 2179.0], [58.3, 2183.0], [58.4, 2183.0], [58.5, 2200.0], [58.6, 2200.0], [58.7, 2206.0], [58.8, 2206.0], [58.9, 2210.0], [59.0, 2210.0], [59.1, 2213.0], [59.2, 2213.0], [59.3, 2220.0], [59.4, 2220.0], [59.5, 2222.0], [59.6, 2222.0], [59.7, 2228.0], [59.8, 2228.0], [59.9, 2235.0], [60.0, 2235.0], [60.1, 2244.0], [60.2, 2244.0], [60.3, 2248.0], [60.4, 2248.0], [60.5, 2248.0], [60.6, 2248.0], [60.7, 2248.0], [60.8, 2248.0], [60.9, 2262.0], [61.0, 2262.0], [61.1, 2280.0], [61.2, 2280.0], [61.3, 2289.0], [61.4, 2289.0], [61.5, 2290.0], [61.6, 2290.0], [61.7, 2290.0], [61.8, 2290.0], [61.9, 2301.0], [62.0, 2301.0], [62.1, 2316.0], [62.2, 2316.0], [62.3, 2347.0], [62.4, 2347.0], [62.5, 2366.0], [62.6, 2366.0], [62.7, 2374.0], [62.8, 2374.0], [62.9, 2375.0], [63.0, 2375.0], [63.1, 2385.0], [63.2, 2385.0], [63.3, 2388.0], [63.4, 2388.0], [63.5, 2393.0], [63.6, 2393.0], [63.7, 2399.0], [63.8, 2399.0], [63.9, 2400.0], [64.0, 2400.0], [64.1, 2406.0], [64.2, 2406.0], [64.3, 2422.0], [64.4, 2422.0], [64.5, 2433.0], [64.6, 2433.0], [64.7, 2436.0], [64.8, 2436.0], [64.9, 2437.0], [65.0, 2437.0], [65.1, 2458.0], [65.2, 2458.0], [65.3, 2467.0], [65.4, 2467.0], [65.5, 2481.0], [65.6, 2481.0], [65.7, 2484.0], [65.8, 2484.0], [65.9, 2492.0], [66.0, 2492.0], [66.1, 2518.0], [66.2, 2518.0], [66.3, 2521.0], [66.4, 2521.0], [66.5, 2524.0], [66.6, 2524.0], [66.7, 2539.0], [66.8, 2539.0], [66.9, 2551.0], [67.0, 2551.0], [67.1, 2553.0], [67.2, 2553.0], [67.3, 2557.0], [67.4, 2557.0], [67.5, 2558.0], [67.6, 2558.0], [67.7, 2571.0], [67.8, 2571.0], [67.9, 2580.0], [68.0, 2580.0], [68.1, 2618.0], [68.2, 2618.0], [68.3, 2624.0], [68.4, 2624.0], [68.5, 2647.0], [68.6, 2647.0], [68.7, 2651.0], [68.8, 2651.0], [68.9, 2655.0], [69.0, 2655.0], [69.1, 2660.0], [69.2, 2660.0], [69.3, 2669.0], [69.4, 2669.0], [69.5, 2726.0], [69.6, 2726.0], [69.7, 2728.0], [69.8, 2728.0], [69.9, 2771.0], [70.0, 2771.0], [70.1, 2778.0], [70.2, 2778.0], [70.3, 2786.0], [70.4, 2786.0], [70.5, 2797.0], [70.6, 2797.0], [70.7, 2800.0], [70.8, 2800.0], [70.9, 2808.0], [71.0, 2808.0], [71.1, 2809.0], [71.2, 2809.0], [71.3, 2812.0], [71.4, 2812.0], [71.5, 2818.0], [71.6, 2818.0], [71.7, 2823.0], [71.8, 2823.0], [71.9, 2843.0], [72.0, 2843.0], [72.1, 2850.0], [72.2, 2850.0], [72.3, 2862.0], [72.4, 2862.0], [72.5, 2864.0], [72.6, 2864.0], [72.7, 2875.0], [72.8, 2875.0], [72.9, 2880.0], [73.0, 2880.0], [73.1, 2902.0], [73.2, 2902.0], [73.3, 2920.0], [73.4, 2920.0], [73.5, 2927.0], [73.6, 2927.0], [73.7, 2927.0], [73.8, 2927.0], [73.9, 2927.0], [74.0, 2927.0], [74.1, 2936.0], [74.2, 2936.0], [74.3, 2937.0], [74.4, 2937.0], [74.5, 2954.0], [74.6, 2954.0], [74.7, 2954.0], [74.8, 2954.0], [74.9, 2965.0], [75.0, 2965.0], [75.1, 2971.0], [75.2, 2971.0], [75.3, 2974.0], [75.4, 2974.0], [75.5, 2976.0], [75.6, 2976.0], [75.7, 2980.0], [75.8, 2980.0], [75.9, 2980.0], [76.0, 2980.0], [76.1, 2981.0], [76.2, 2981.0], [76.3, 3007.0], [76.4, 3007.0], [76.5, 3011.0], [76.6, 3011.0], [76.7, 3019.0], [76.8, 3019.0], [76.9, 3035.0], [77.0, 3035.0], [77.1, 3041.0], [77.2, 3041.0], [77.3, 3043.0], [77.4, 3043.0], [77.5, 3054.0], [77.6, 3054.0], [77.7, 3068.0], [77.8, 3068.0], [77.9, 3072.0], [78.0, 3072.0], [78.1, 3083.0], [78.2, 3083.0], [78.3, 3090.0], [78.4, 3090.0], [78.5, 3117.0], [78.6, 3117.0], [78.7, 3130.0], [78.8, 3130.0], [78.9, 3132.0], [79.0, 3132.0], [79.1, 3141.0], [79.2, 3141.0], [79.3, 3163.0], [79.4, 3163.0], [79.5, 3191.0], [79.6, 3191.0], [79.7, 3194.0], [79.8, 3194.0], [79.9, 3199.0], [80.0, 3199.0], [80.1, 3214.0], [80.2, 3214.0], [80.3, 3215.0], [80.4, 3215.0], [80.5, 3218.0], [80.6, 3218.0], [80.7, 3223.0], [80.8, 3223.0], [80.9, 3228.0], [81.0, 3228.0], [81.1, 3234.0], [81.2, 3234.0], [81.3, 3239.0], [81.4, 3239.0], [81.5, 3260.0], [81.6, 3260.0], [81.7, 3267.0], [81.8, 3267.0], [81.9, 3306.0], [82.0, 3306.0], [82.1, 3313.0], [82.2, 3313.0], [82.3, 3358.0], [82.4, 3358.0], [82.5, 3364.0], [82.6, 3364.0], [82.7, 3403.0], [82.8, 3403.0], [82.9, 3416.0], [83.0, 3416.0], [83.1, 3449.0], [83.2, 3449.0], [83.3, 3466.0], [83.4, 3466.0], [83.5, 3468.0], [83.6, 3468.0], [83.7, 3469.0], [83.8, 3469.0], [83.9, 3473.0], [84.0, 3473.0], [84.1, 3484.0], [84.2, 3484.0], [84.3, 3484.0], [84.4, 3484.0], [84.5, 3485.0], [84.6, 3485.0], [84.7, 3491.0], [84.8, 3491.0], [84.9, 3495.0], [85.0, 3495.0], [85.1, 3521.0], [85.2, 3521.0], [85.3, 3543.0], [85.4, 3543.0], [85.5, 3550.0], [85.6, 3550.0], [85.7, 3631.0], [85.8, 3631.0], [85.9, 3634.0], [86.0, 3634.0], [86.1, 3648.0], [86.2, 3648.0], [86.3, 3659.0], [86.4, 3659.0], [86.5, 3663.0], [86.6, 3663.0], [86.7, 3687.0], [86.8, 3687.0], [86.9, 3691.0], [87.0, 3691.0], [87.1, 3704.0], [87.2, 3704.0], [87.3, 3742.0], [87.4, 3742.0], [87.5, 3796.0], [87.6, 3796.0], [87.7, 3870.0], [87.8, 3870.0], [87.9, 3873.0], [88.0, 3873.0], [88.1, 3874.0], [88.2, 3874.0], [88.3, 3877.0], [88.4, 3877.0], [88.5, 3886.0], [88.6, 3886.0], [88.7, 3907.0], [88.8, 3907.0], [88.9, 3923.0], [89.0, 3923.0], [89.1, 4019.0], [89.2, 4019.0], [89.3, 4034.0], [89.4, 4034.0], [89.5, 4039.0], [89.6, 4039.0], [89.7, 4051.0], [89.8, 4051.0], [89.9, 4059.0], [90.0, 4059.0], [90.1, 4137.0], [90.2, 4137.0], [90.3, 4144.0], [90.4, 4144.0], [90.5, 4167.0], [90.6, 4167.0], [90.7, 4280.0], [90.8, 4280.0], [90.9, 4305.0], [91.0, 4305.0], [91.1, 4349.0], [91.2, 4349.0], [91.3, 4444.0], [91.4, 4444.0], [91.5, 4541.0], [91.6, 4541.0], [91.7, 4583.0], [91.8, 4583.0], [91.9, 4584.0], [92.0, 4584.0], [92.1, 4800.0], [92.2, 4800.0], [92.3, 4844.0], [92.4, 4844.0], [92.5, 4865.0], [92.6, 4865.0], [92.7, 4918.0], [92.8, 4918.0], [92.9, 4952.0], [93.0, 4952.0], [93.1, 4980.0], [93.2, 4980.0], [93.3, 4984.0], [93.4, 4984.0], [93.5, 5200.0], [93.6, 5200.0], [93.7, 5216.0], [93.8, 5216.0], [93.9, 5384.0], [94.0, 5384.0], [94.1, 5515.0], [94.2, 5515.0], [94.3, 5562.0], [94.4, 5562.0], [94.5, 5609.0], [94.6, 5609.0], [94.7, 5631.0], [94.8, 5631.0], [94.9, 5633.0], [95.0, 5633.0], [95.1, 5655.0], [95.2, 5655.0], [95.3, 5683.0], [95.4, 5683.0], [95.5, 5772.0], [95.6, 5772.0], [95.7, 6397.0], [95.8, 6397.0], [95.9, 6614.0], [96.0, 6614.0], [96.1, 6658.0], [96.2, 6658.0], [96.3, 6777.0], [96.4, 6777.0], [96.5, 6883.0], [96.6, 6883.0], [96.7, 6888.0], [96.8, 6888.0], [96.9, 6930.0], [97.0, 6930.0], [97.1, 6975.0], [97.2, 6975.0], [97.3, 7123.0], [97.4, 7123.0], [97.5, 7155.0], [97.6, 7155.0], [97.7, 7304.0], [97.8, 7304.0], [97.9, 7319.0], [98.0, 7319.0], [98.1, 7325.0], [98.2, 7325.0], [98.3, 7445.0], [98.4, 7445.0], [98.5, 7451.0], [98.6, 7451.0], [98.7, 7518.0], [98.8, 7518.0], [98.9, 7580.0], [99.0, 7580.0], [99.1, 8769.0], [99.2, 8769.0], [99.3, 9163.0], [99.4, 9163.0], [99.5, 9350.0], [99.6, 9350.0], [99.7, 9999.0], [99.8, 9999.0], [99.9, 10532.0], [100.0, 10532.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 64.0, "series": [{"data": [[1200.0, 26.0], [1300.0, 64.0], [1400.0, 47.0], [1500.0, 40.0], [1600.0, 35.0], [1700.0, 22.0], [1800.0, 18.0], [1900.0, 15.0], [2000.0, 11.0], [2100.0, 14.0], [2300.0, 10.0], [2200.0, 17.0], [2400.0, 11.0], [2500.0, 10.0], [2600.0, 7.0], [2800.0, 12.0], [2700.0, 6.0], [2900.0, 16.0], [3000.0, 11.0], [3100.0, 8.0], [3200.0, 9.0], [3300.0, 4.0], [3400.0, 12.0], [3500.0, 3.0], [3600.0, 7.0], [3700.0, 3.0], [3800.0, 5.0], [3900.0, 2.0], [4000.0, 5.0], [4100.0, 3.0], [4300.0, 2.0], [4200.0, 1.0], [4500.0, 3.0], [4400.0, 1.0], [4800.0, 3.0], [4900.0, 4.0], [5300.0, 1.0], [5200.0, 2.0], [5500.0, 2.0], [5600.0, 5.0], [5700.0, 1.0], [6300.0, 1.0], [6600.0, 2.0], [6800.0, 2.0], [6900.0, 2.0], [6700.0, 1.0], [7100.0, 2.0], [7400.0, 2.0], [7300.0, 3.0], [7500.0, 2.0], [8700.0, 1.0], [9100.0, 1.0], [9300.0, 1.0], [9900.0, 1.0], [10500.0, 1.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 137.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 363.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 137.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 363.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 39.08600000000001, "minX": 1.73308704E12, "maxY": 39.08600000000001, "series": [{"data": [[1.73308704E12, 39.08600000000001]], "isOverall": false, "label": "Books Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308704E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1257.0, "minX": 1.0, "maxY": 6777.0, "series": [{"data": [[2.0, 6777.0], [3.0, 1257.0], [4.0, 4850.333333333333], [5.0, 1711.0], [6.0, 3041.0], [7.0, 2898.6], [8.0, 1513.5], [9.0, 1332.0], [10.0, 1477.0], [11.0, 1408.5], [12.0, 1367.0], [13.0, 1361.3333333333333], [14.0, 1308.6666666666667], [15.0, 1561.333333333333], [16.0, 2146.428571428571], [17.0, 2238.090909090909], [18.0, 1560.6666666666667], [19.0, 1530.5], [20.0, 1561.6666666666667], [21.0, 1378.5], [22.0, 1362.6666666666667], [23.0, 1662.4166666666667], [24.0, 1482.2], [25.0, 1504.6666666666667], [26.0, 1401.75], [27.0, 1814.25], [28.0, 2092.25], [29.0, 1832.1666666666665], [30.0, 2466.5789473684213], [31.0, 1986.3333333333333], [32.0, 2272.8333333333335], [33.0, 2008.1666666666665], [34.0, 2647.333333333333], [35.0, 1524.0], [36.0, 1850.7777777777778], [37.0, 2281.714285714286], [38.0, 1642.75], [39.0, 1546.923076923077], [41.0, 1744.2500000000002], [40.0, 3178.741935483871], [42.0, 1863.4], [43.0, 1677.6666666666667], [44.0, 1624.8461538461538], [45.0, 1477.0], [47.0, 2747.0000000000005], [46.0, 3700.3749999999995], [48.0, 2336.5], [49.0, 3283.0476190476193], [50.0, 2804.1919191919173], [1.0, 5632.5]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}, {"data": [[39.08600000000001, 2470.857999999999]], "isOverall": false, "label": "EMPTY_SERIE_NAME-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1175.0, "minX": 1.73308704E12, "maxY": 793745.3166666667, "series": [{"data": [[1.73308704E12, 793745.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73308704E12, 1175.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308704E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2470.857999999999, "minX": 1.73308704E12, "maxY": 2470.857999999999, "series": [{"data": [[1.73308704E12, 2470.857999999999]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308704E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1141.9099999999992, "minX": 1.73308704E12, "maxY": 1141.9099999999992, "series": [{"data": [[1.73308704E12, 1141.9099999999992]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308704E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 812.6679999999994, "minX": 1.73308704E12, "maxY": 812.6679999999994, "series": [{"data": [[1.73308704E12, 812.6679999999994]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308704E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1244.0, "minX": 1.73308704E12, "maxY": 10532.0, "series": [{"data": [[1.73308704E12, 10532.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73308704E12, 4129.200000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73308704E12, 8757.110000000011]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73308704E12, 5653.9]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.73308704E12, 1244.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73308704E12, 1875.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308704E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1376.0, "minX": 1.0, "maxY": 4041.5, "series": [{"data": [[8.0, 3013.0], [2.0, 3909.5], [9.0, 1376.0], [10.0, 2223.5], [11.0, 2383.0], [12.0, 1927.0], [3.0, 2574.5], [13.0, 1535.0], [14.0, 2107.5], [15.0, 1463.0], [1.0, 2658.5], [4.0, 4021.5], [18.0, 2007.0], [19.0, 1677.0], [20.0, 1521.5], [21.0, 1635.5], [22.0, 2457.0], [6.0, 4041.5], [24.0, 2360.5], [28.0, 2753.5], [7.0, 1459.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 853.5, "minX": 1.0, "maxY": 1221.0, "series": [{"data": [[8.0, 873.0], [2.0, 1162.5], [9.0, 928.0], [10.0, 1065.0], [11.0, 1043.0], [12.0, 885.0], [3.0, 1162.5], [13.0, 1065.0], [14.0, 1221.0], [15.0, 947.0], [1.0, 860.0], [4.0, 853.5], [18.0, 1136.0], [19.0, 1093.0], [20.0, 1029.0], [21.0, 980.0], [22.0, 891.5], [6.0, 1203.5], [24.0, 916.5], [28.0, 1010.0], [7.0, 952.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.73308704E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73308704E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308704E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.73308704E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73308704E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308704E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.73308704E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73308704E12, 8.333333333333334]], "isOverall": false, "label": "-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308704E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.73308704E12, "maxY": 8.333333333333334, "series": [{"data": [[1.73308704E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308704E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

