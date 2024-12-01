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
        data: {"result": {"minY": 616.0, "minX": 0.0, "maxY": 3080.0, "series": [{"data": [[0.0, 616.0], [0.1, 616.0], [0.2, 616.0], [0.3, 616.0], [0.4, 623.0], [0.5, 623.0], [0.6, 623.0], [0.7, 624.0], [0.8, 629.0], [0.9, 629.0], [1.0, 630.0], [1.1, 630.0], [1.2, 633.0], [1.3, 633.0], [1.4, 633.0], [1.5, 633.0], [1.6, 639.0], [1.7, 639.0], [1.8, 640.0], [1.9, 640.0], [2.0, 645.0], [2.1, 645.0], [2.2, 648.0], [2.3, 648.0], [2.4, 648.0], [2.5, 650.0], [2.6, 650.0], [2.7, 653.0], [2.8, 653.0], [2.9, 667.0], [3.0, 667.0], [3.1, 670.0], [3.2, 670.0], [3.3, 671.0], [3.4, 671.0], [3.5, 674.0], [3.6, 674.0], [3.7, 675.0], [3.8, 675.0], [3.9, 840.0], [4.0, 840.0], [4.1, 840.0], [4.2, 840.0], [4.3, 843.0], [4.4, 843.0], [4.5, 844.0], [4.6, 844.0], [4.7, 845.0], [4.8, 845.0], [4.9, 846.0], [5.0, 846.0], [5.1, 847.0], [5.2, 847.0], [5.3, 847.0], [5.4, 847.0], [5.5, 849.0], [5.6, 849.0], [5.7, 849.0], [5.8, 849.0], [5.9, 849.0], [6.0, 849.0], [6.1, 850.0], [6.2, 850.0], [6.3, 851.0], [6.4, 851.0], [6.5, 851.0], [6.6, 851.0], [6.7, 852.0], [6.8, 852.0], [6.9, 853.0], [7.0, 853.0], [7.1, 853.0], [7.2, 853.0], [7.3, 853.0], [7.4, 853.0], [7.5, 853.0], [7.6, 853.0], [7.7, 854.0], [7.8, 854.0], [7.9, 854.0], [8.0, 854.0], [8.1, 854.0], [8.2, 854.0], [8.3, 854.0], [8.4, 854.0], [8.5, 855.0], [8.6, 855.0], [8.7, 855.0], [8.8, 855.0], [8.9, 855.0], [9.0, 855.0], [9.1, 856.0], [9.2, 856.0], [9.3, 856.0], [9.4, 856.0], [9.5, 856.0], [9.6, 856.0], [9.7, 856.0], [9.8, 856.0], [9.9, 857.0], [10.0, 857.0], [10.1, 857.0], [10.2, 857.0], [10.3, 858.0], [10.4, 858.0], [10.5, 858.0], [10.6, 858.0], [10.7, 858.0], [10.8, 858.0], [10.9, 859.0], [11.0, 859.0], [11.1, 859.0], [11.2, 859.0], [11.3, 859.0], [11.4, 859.0], [11.5, 859.0], [11.6, 859.0], [11.7, 860.0], [11.8, 860.0], [11.9, 860.0], [12.0, 860.0], [12.1, 860.0], [12.2, 860.0], [12.3, 860.0], [12.4, 860.0], [12.5, 860.0], [12.6, 860.0], [12.7, 861.0], [12.8, 861.0], [12.9, 861.0], [13.0, 861.0], [13.1, 861.0], [13.2, 861.0], [13.3, 861.0], [13.4, 861.0], [13.5, 861.0], [13.6, 861.0], [13.7, 863.0], [13.8, 863.0], [13.9, 863.0], [14.0, 863.0], [14.1, 863.0], [14.2, 863.0], [14.3, 863.0], [14.4, 863.0], [14.5, 864.0], [14.6, 864.0], [14.7, 864.0], [14.8, 864.0], [14.9, 864.0], [15.0, 864.0], [15.1, 864.0], [15.2, 864.0], [15.3, 864.0], [15.4, 864.0], [15.5, 864.0], [15.6, 864.0], [15.7, 865.0], [15.8, 865.0], [15.9, 865.0], [16.0, 865.0], [16.1, 865.0], [16.2, 865.0], [16.3, 865.0], [16.4, 865.0], [16.5, 865.0], [16.6, 865.0], [16.7, 865.0], [16.8, 865.0], [16.9, 865.0], [17.0, 865.0], [17.1, 865.0], [17.2, 865.0], [17.3, 866.0], [17.4, 866.0], [17.5, 866.0], [17.6, 866.0], [17.7, 866.0], [17.8, 866.0], [17.9, 866.0], [18.0, 866.0], [18.1, 867.0], [18.2, 867.0], [18.3, 867.0], [18.4, 867.0], [18.5, 867.0], [18.6, 867.0], [18.7, 867.0], [18.8, 867.0], [18.9, 868.0], [19.0, 868.0], [19.1, 868.0], [19.2, 868.0], [19.3, 868.0], [19.4, 868.0], [19.5, 868.0], [19.6, 868.0], [19.7, 868.0], [19.8, 868.0], [19.9, 868.0], [20.0, 868.0], [20.1, 869.0], [20.2, 869.0], [20.3, 869.0], [20.4, 869.0], [20.5, 869.0], [20.6, 869.0], [20.7, 869.0], [20.8, 869.0], [20.9, 869.0], [21.0, 869.0], [21.1, 869.0], [21.2, 869.0], [21.3, 869.0], [21.4, 869.0], [21.5, 870.0], [21.6, 870.0], [21.7, 870.0], [21.8, 870.0], [21.9, 870.0], [22.0, 870.0], [22.1, 870.0], [22.2, 870.0], [22.3, 870.0], [22.4, 870.0], [22.5, 870.0], [22.6, 870.0], [22.7, 870.0], [22.8, 870.0], [22.9, 871.0], [23.0, 871.0], [23.1, 871.0], [23.2, 871.0], [23.3, 872.0], [23.4, 872.0], [23.5, 872.0], [23.6, 872.0], [23.7, 872.0], [23.8, 872.0], [23.9, 872.0], [24.0, 872.0], [24.1, 873.0], [24.2, 873.0], [24.3, 873.0], [24.4, 873.0], [24.5, 873.0], [24.6, 873.0], [24.7, 873.0], [24.8, 873.0], [24.9, 873.0], [25.0, 873.0], [25.1, 873.0], [25.2, 873.0], [25.3, 873.0], [25.4, 873.0], [25.5, 873.0], [25.6, 873.0], [25.7, 873.0], [25.8, 873.0], [25.9, 873.0], [26.0, 873.0], [26.1, 873.0], [26.2, 873.0], [26.3, 874.0], [26.4, 874.0], [26.5, 874.0], [26.6, 874.0], [26.7, 874.0], [26.8, 874.0], [26.9, 874.0], [27.0, 874.0], [27.1, 874.0], [27.2, 874.0], [27.3, 874.0], [27.4, 874.0], [27.5, 874.0], [27.6, 875.0], [27.7, 875.0], [27.8, 875.0], [27.9, 875.0], [28.0, 875.0], [28.1, 875.0], [28.2, 875.0], [28.3, 875.0], [28.4, 875.0], [28.5, 875.0], [28.6, 876.0], [28.7, 876.0], [28.8, 876.0], [28.9, 876.0], [29.0, 876.0], [29.1, 876.0], [29.2, 876.0], [29.3, 876.0], [29.4, 876.0], [29.5, 876.0], [29.6, 876.0], [29.7, 876.0], [29.8, 876.0], [29.9, 876.0], [30.0, 876.0], [30.1, 876.0], [30.2, 876.0], [30.3, 877.0], [30.4, 877.0], [30.5, 877.0], [30.6, 877.0], [30.7, 877.0], [30.8, 877.0], [30.9, 877.0], [31.0, 877.0], [31.1, 877.0], [31.2, 877.0], [31.3, 877.0], [31.4, 877.0], [31.5, 877.0], [31.6, 878.0], [31.7, 878.0], [31.8, 878.0], [31.9, 878.0], [32.0, 878.0], [32.1, 878.0], [32.2, 878.0], [32.3, 878.0], [32.4, 878.0], [32.5, 878.0], [32.6, 879.0], [32.7, 879.0], [32.8, 879.0], [32.9, 879.0], [33.0, 879.0], [33.1, 879.0], [33.2, 879.0], [33.3, 879.0], [33.4, 879.0], [33.5, 879.0], [33.6, 879.0], [33.7, 879.0], [33.8, 879.0], [33.9, 880.0], [34.0, 880.0], [34.1, 880.0], [34.2, 880.0], [34.3, 880.0], [34.4, 880.0], [34.5, 880.0], [34.6, 880.0], [34.7, 880.0], [34.8, 880.0], [34.9, 880.0], [35.0, 880.0], [35.1, 881.0], [35.2, 881.0], [35.3, 881.0], [35.4, 881.0], [35.5, 881.0], [35.6, 881.0], [35.7, 881.0], [35.8, 881.0], [35.9, 881.0], [36.0, 881.0], [36.1, 881.0], [36.2, 881.0], [36.3, 881.0], [36.4, 881.0], [36.5, 882.0], [36.6, 882.0], [36.7, 882.0], [36.8, 882.0], [36.9, 882.0], [37.0, 882.0], [37.1, 882.0], [37.2, 882.0], [37.3, 882.0], [37.4, 882.0], [37.5, 882.0], [37.6, 882.0], [37.7, 882.0], [37.8, 882.0], [37.9, 882.0], [38.0, 882.0], [38.1, 882.0], [38.2, 882.0], [38.3, 882.0], [38.4, 882.0], [38.5, 883.0], [38.6, 883.0], [38.7, 883.0], [38.8, 883.0], [38.9, 883.0], [39.0, 883.0], [39.1, 883.0], [39.2, 883.0], [39.3, 883.0], [39.4, 883.0], [39.5, 883.0], [39.6, 883.0], [39.7, 883.0], [39.8, 883.0], [39.9, 883.0], [40.0, 883.0], [40.1, 884.0], [40.2, 884.0], [40.3, 884.0], [40.4, 884.0], [40.5, 884.0], [40.6, 884.0], [40.7, 884.0], [40.8, 884.0], [40.9, 884.0], [41.0, 884.0], [41.1, 884.0], [41.2, 884.0], [41.3, 885.0], [41.4, 885.0], [41.5, 885.0], [41.6, 885.0], [41.7, 885.0], [41.8, 885.0], [41.9, 885.0], [42.0, 885.0], [42.1, 885.0], [42.2, 885.0], [42.3, 886.0], [42.4, 886.0], [42.5, 886.0], [42.6, 886.0], [42.7, 886.0], [42.8, 886.0], [42.9, 886.0], [43.0, 886.0], [43.1, 886.0], [43.2, 886.0], [43.3, 887.0], [43.4, 887.0], [43.5, 887.0], [43.6, 887.0], [43.7, 887.0], [43.8, 887.0], [43.9, 888.0], [44.0, 888.0], [44.1, 888.0], [44.2, 888.0], [44.3, 888.0], [44.4, 888.0], [44.5, 888.0], [44.6, 888.0], [44.7, 888.0], [44.8, 888.0], [44.9, 888.0], [45.0, 888.0], [45.1, 888.0], [45.2, 888.0], [45.3, 888.0], [45.4, 888.0], [45.5, 888.0], [45.6, 888.0], [45.7, 889.0], [45.8, 889.0], [45.9, 889.0], [46.0, 889.0], [46.1, 889.0], [46.2, 889.0], [46.3, 889.0], [46.4, 889.0], [46.5, 890.0], [46.6, 890.0], [46.7, 890.0], [46.8, 890.0], [46.9, 890.0], [47.0, 890.0], [47.1, 890.0], [47.2, 890.0], [47.3, 890.0], [47.4, 890.0], [47.5, 890.0], [47.6, 890.0], [47.7, 891.0], [47.8, 891.0], [47.9, 891.0], [48.0, 891.0], [48.1, 891.0], [48.2, 891.0], [48.3, 891.0], [48.4, 891.0], [48.5, 891.0], [48.6, 891.0], [48.7, 892.0], [48.8, 892.0], [48.9, 892.0], [49.0, 892.0], [49.1, 892.0], [49.2, 892.0], [49.3, 892.0], [49.4, 892.0], [49.5, 892.0], [49.6, 892.0], [49.7, 892.0], [49.8, 892.0], [49.9, 892.0], [50.0, 892.0], [50.1, 892.0], [50.2, 892.0], [50.3, 893.0], [50.4, 893.0], [50.5, 893.0], [50.6, 893.0], [50.7, 893.0], [50.8, 893.0], [50.9, 893.0], [51.0, 893.0], [51.1, 893.0], [51.2, 893.0], [51.3, 894.0], [51.4, 894.0], [51.5, 894.0], [51.6, 894.0], [51.7, 894.0], [51.8, 894.0], [51.9, 894.0], [52.0, 894.0], [52.1, 894.0], [52.2, 894.0], [52.3, 894.0], [52.4, 894.0], [52.5, 894.0], [52.6, 894.0], [52.7, 894.0], [52.8, 894.0], [52.9, 895.0], [53.0, 895.0], [53.1, 895.0], [53.2, 895.0], [53.3, 895.0], [53.4, 895.0], [53.5, 895.0], [53.6, 895.0], [53.7, 895.0], [53.8, 895.0], [53.9, 895.0], [54.0, 895.0], [54.1, 895.0], [54.2, 895.0], [54.3, 896.0], [54.4, 896.0], [54.5, 896.0], [54.6, 896.0], [54.7, 896.0], [54.8, 896.0], [54.9, 897.0], [55.0, 897.0], [55.1, 897.0], [55.2, 897.0], [55.3, 897.0], [55.4, 897.0], [55.5, 897.0], [55.6, 897.0], [55.7, 897.0], [55.8, 897.0], [55.9, 898.0], [56.0, 898.0], [56.1, 898.0], [56.2, 898.0], [56.3, 898.0], [56.4, 898.0], [56.5, 898.0], [56.6, 898.0], [56.7, 898.0], [56.8, 898.0], [56.9, 898.0], [57.0, 898.0], [57.1, 898.0], [57.2, 898.0], [57.3, 898.0], [57.4, 898.0], [57.5, 899.0], [57.6, 899.0], [57.7, 899.0], [57.8, 899.0], [57.9, 899.0], [58.0, 899.0], [58.1, 899.0], [58.2, 899.0], [58.3, 899.0], [58.4, 899.0], [58.5, 899.0], [58.6, 899.0], [58.7, 900.0], [58.8, 900.0], [58.9, 900.0], [59.0, 900.0], [59.1, 900.0], [59.2, 900.0], [59.3, 900.0], [59.4, 900.0], [59.5, 900.0], [59.6, 900.0], [59.7, 901.0], [59.8, 901.0], [59.9, 901.0], [60.0, 901.0], [60.1, 901.0], [60.2, 901.0], [60.3, 901.0], [60.4, 901.0], [60.5, 901.0], [60.6, 901.0], [60.7, 902.0], [60.8, 902.0], [60.9, 902.0], [61.0, 902.0], [61.1, 902.0], [61.2, 902.0], [61.3, 902.0], [61.4, 902.0], [61.5, 902.0], [61.6, 902.0], [61.7, 902.0], [61.8, 902.0], [61.9, 903.0], [62.0, 903.0], [62.1, 903.0], [62.2, 903.0], [62.3, 903.0], [62.4, 903.0], [62.5, 903.0], [62.6, 903.0], [62.7, 903.0], [62.8, 903.0], [62.9, 903.0], [63.0, 903.0], [63.1, 903.0], [63.2, 903.0], [63.3, 903.0], [63.4, 903.0], [63.5, 904.0], [63.6, 904.0], [63.7, 904.0], [63.8, 904.0], [63.9, 904.0], [64.0, 904.0], [64.1, 905.0], [64.2, 905.0], [64.3, 905.0], [64.4, 905.0], [64.5, 905.0], [64.6, 905.0], [64.7, 905.0], [64.8, 905.0], [64.9, 906.0], [65.0, 906.0], [65.1, 906.0], [65.2, 906.0], [65.3, 906.0], [65.4, 907.0], [65.5, 907.0], [65.6, 907.0], [65.7, 907.0], [65.8, 907.0], [65.9, 908.0], [66.0, 908.0], [66.1, 908.0], [66.2, 908.0], [66.3, 908.0], [66.4, 909.0], [66.5, 909.0], [66.6, 909.0], [66.7, 909.0], [66.8, 909.0], [66.9, 909.0], [67.0, 909.0], [67.1, 909.0], [67.2, 910.0], [67.3, 910.0], [67.4, 910.0], [67.5, 910.0], [67.6, 910.0], [67.7, 911.0], [67.8, 911.0], [67.9, 911.0], [68.0, 911.0], [68.1, 912.0], [68.2, 912.0], [68.3, 912.0], [68.4, 912.0], [68.5, 912.0], [68.6, 912.0], [68.7, 912.0], [68.8, 912.0], [68.9, 912.0], [69.0, 912.0], [69.1, 912.0], [69.2, 912.0], [69.3, 912.0], [69.4, 912.0], [69.5, 913.0], [69.6, 913.0], [69.7, 913.0], [69.8, 913.0], [69.9, 913.0], [70.0, 913.0], [70.1, 913.0], [70.2, 913.0], [70.3, 913.0], [70.4, 913.0], [70.5, 913.0], [70.6, 913.0], [70.7, 914.0], [70.8, 914.0], [70.9, 914.0], [71.0, 914.0], [71.1, 914.0], [71.2, 914.0], [71.3, 914.0], [71.4, 914.0], [71.5, 914.0], [71.6, 914.0], [71.7, 915.0], [71.8, 915.0], [71.9, 915.0], [72.0, 915.0], [72.1, 915.0], [72.2, 915.0], [72.3, 915.0], [72.4, 915.0], [72.5, 915.0], [72.6, 915.0], [72.7, 915.0], [72.8, 915.0], [72.9, 915.0], [73.0, 915.0], [73.1, 915.0], [73.2, 915.0], [73.3, 916.0], [73.4, 916.0], [73.5, 916.0], [73.6, 916.0], [73.7, 917.0], [73.8, 917.0], [73.9, 917.0], [74.0, 917.0], [74.1, 917.0], [74.2, 917.0], [74.3, 917.0], [74.4, 917.0], [74.5, 918.0], [74.6, 918.0], [74.7, 918.0], [74.8, 918.0], [74.9, 919.0], [75.0, 919.0], [75.1, 919.0], [75.2, 919.0], [75.3, 919.0], [75.4, 919.0], [75.5, 919.0], [75.6, 919.0], [75.7, 919.0], [75.8, 919.0], [75.9, 919.0], [76.0, 919.0], [76.1, 920.0], [76.2, 920.0], [76.3, 920.0], [76.4, 920.0], [76.5, 920.0], [76.6, 920.0], [76.7, 921.0], [76.8, 921.0], [76.9, 921.0], [77.0, 921.0], [77.1, 921.0], [77.2, 921.0], [77.3, 921.0], [77.4, 921.0], [77.5, 921.0], [77.6, 921.0], [77.7, 921.0], [77.8, 921.0], [77.9, 922.0], [78.0, 922.0], [78.1, 922.0], [78.2, 922.0], [78.3, 922.0], [78.4, 922.0], [78.5, 922.0], [78.6, 922.0], [78.7, 922.0], [78.8, 922.0], [78.9, 923.0], [79.0, 923.0], [79.1, 924.0], [79.2, 924.0], [79.3, 924.0], [79.4, 924.0], [79.5, 924.0], [79.6, 924.0], [79.7, 925.0], [79.8, 925.0], [79.9, 925.0], [80.0, 925.0], [80.1, 926.0], [80.2, 926.0], [80.3, 926.0], [80.4, 926.0], [80.5, 926.0], [80.6, 926.0], [80.7, 926.0], [80.8, 926.0], [80.9, 926.0], [81.0, 926.0], [81.1, 927.0], [81.2, 927.0], [81.3, 927.0], [81.4, 927.0], [81.5, 928.0], [81.6, 928.0], [81.7, 928.0], [81.8, 928.0], [81.9, 928.0], [82.0, 928.0], [82.1, 928.0], [82.2, 928.0], [82.3, 929.0], [82.4, 929.0], [82.5, 929.0], [82.6, 929.0], [82.7, 930.0], [82.8, 930.0], [82.9, 930.0], [83.0, 930.0], [83.1, 931.0], [83.2, 931.0], [83.3, 931.0], [83.4, 931.0], [83.5, 931.0], [83.6, 931.0], [83.7, 931.0], [83.8, 931.0], [83.9, 933.0], [84.0, 933.0], [84.1, 933.0], [84.2, 933.0], [84.3, 933.0], [84.4, 933.0], [84.5, 934.0], [84.6, 934.0], [84.7, 934.0], [84.8, 934.0], [84.9, 935.0], [85.0, 935.0], [85.1, 937.0], [85.2, 937.0], [85.3, 938.0], [85.4, 938.0], [85.5, 940.0], [85.6, 940.0], [85.7, 941.0], [85.8, 941.0], [85.9, 942.0], [86.0, 942.0], [86.1, 944.0], [86.2, 944.0], [86.3, 944.0], [86.4, 944.0], [86.5, 944.0], [86.6, 944.0], [86.7, 944.0], [86.8, 944.0], [86.9, 945.0], [87.0, 945.0], [87.1, 945.0], [87.2, 945.0], [87.3, 945.0], [87.4, 945.0], [87.5, 945.0], [87.6, 945.0], [87.7, 946.0], [87.8, 946.0], [87.9, 947.0], [88.0, 947.0], [88.1, 948.0], [88.2, 948.0], [88.3, 948.0], [88.4, 948.0], [88.5, 950.0], [88.6, 950.0], [88.7, 951.0], [88.8, 951.0], [88.9, 953.0], [89.0, 953.0], [89.1, 953.0], [89.2, 953.0], [89.3, 954.0], [89.4, 954.0], [89.5, 954.0], [89.6, 954.0], [89.7, 956.0], [89.8, 956.0], [89.9, 956.0], [90.0, 956.0], [90.1, 958.0], [90.2, 958.0], [90.3, 960.0], [90.4, 960.0], [90.5, 962.0], [90.6, 962.0], [90.7, 962.0], [90.8, 962.0], [90.9, 963.0], [91.0, 963.0], [91.1, 966.0], [91.2, 966.0], [91.3, 966.0], [91.4, 966.0], [91.5, 966.0], [91.6, 966.0], [91.7, 967.0], [91.8, 967.0], [91.9, 969.0], [92.0, 969.0], [92.1, 971.0], [92.2, 971.0], [92.3, 973.0], [92.4, 973.0], [92.5, 975.0], [92.6, 975.0], [92.7, 977.0], [92.8, 977.0], [92.9, 977.0], [93.0, 977.0], [93.1, 977.0], [93.2, 977.0], [93.3, 978.0], [93.4, 978.0], [93.5, 980.0], [93.6, 980.0], [93.7, 980.0], [93.8, 980.0], [93.9, 981.0], [94.0, 981.0], [94.1, 983.0], [94.2, 983.0], [94.3, 985.0], [94.4, 985.0], [94.5, 985.0], [94.6, 985.0], [94.7, 987.0], [94.8, 987.0], [94.9, 988.0], [95.0, 988.0], [95.1, 992.0], [95.2, 992.0], [95.3, 994.0], [95.4, 994.0], [95.5, 1010.0], [95.6, 1010.0], [95.7, 1012.0], [95.8, 1012.0], [95.9, 1031.0], [96.0, 1031.0], [96.1, 1035.0], [96.2, 1035.0], [96.3, 1036.0], [96.4, 1036.0], [96.5, 1040.0], [96.6, 1040.0], [96.7, 1041.0], [96.8, 1041.0], [96.9, 1048.0], [97.0, 1048.0], [97.1, 1064.0], [97.2, 1064.0], [97.3, 1066.0], [97.4, 1066.0], [97.5, 1080.0], [97.6, 1080.0], [97.7, 1181.0], [97.8, 1181.0], [97.9, 1368.0], [98.0, 1368.0], [98.1, 1578.0], [98.2, 1578.0], [98.3, 1764.0], [98.4, 1764.0], [98.5, 1963.0], [98.6, 1963.0], [98.7, 2162.0], [98.8, 2162.0], [98.9, 2344.0], [99.0, 2344.0], [99.1, 2576.0], [99.2, 2576.0], [99.3, 2761.0], [99.4, 2761.0], [99.5, 2969.0], [99.6, 2969.0], [99.7, 3078.0], [99.8, 3078.0], [99.9, 3080.0], [100.0, 3080.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 274.0, "series": [{"data": [[2100.0, 1.0], [2300.0, 1.0], [600.0, 19.0], [2500.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [800.0, 274.0], [900.0, 184.0], [1000.0, 11.0], [1100.0, 1.0], [1300.0, 1.0], [1500.0, 1.0], [1700.0, 1.0], [1900.0, 1.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 490.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 490.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 25.36470588235294, "minX": 1.73308668E12, "maxY": 36.24337349397589, "series": [{"data": [[1.73308668E12, 25.36470588235294], [1.73308674E12, 36.24337349397589]], "isOverall": false, "label": "Activities Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308674E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 616.0, "minX": 1.0, "maxY": 1648.9047619047622, "series": [{"data": [[2.0, 858.0], [4.0, 855.6666666666666], [5.0, 890.0], [6.0, 860.0], [7.0, 868.0], [8.0, 863.3333333333334], [9.0, 877.5], [10.0, 869.6], [11.0, 616.0], [12.0, 778.0], [13.0, 906.75], [14.0, 873.0], [15.0, 864.0], [16.0, 857.0], [17.0, 1648.9047619047622], [18.0, 906.2], [19.0, 902.4444444444445], [20.0, 886.75], [21.0, 789.75], [22.0, 916.4736842105264], [23.0, 831.8], [24.0, 884.5], [25.0, 863.0], [26.0, 889.1818181818182], [27.0, 905.5833333333333], [28.0, 910.25], [29.0, 889.125], [30.0, 965.0909090909091], [31.0, 913.4375000000001], [32.0, 920.3125], [33.0, 891.7272727272727], [34.0, 905.4], [35.0, 893.5], [36.0, 891.0000000000001], [37.0, 874.5714285714286], [38.0, 893.1428571428572], [39.0, 892.6363636363637], [40.0, 880.0], [41.0, 885.6], [42.0, 889.0], [43.0, 879.4], [44.0, 859.7368421052632], [45.0, 873.6470588235294], [46.0, 833.1249999999999], [47.0, 898.7142857142857], [48.0, 880.64], [49.0, 878.7333333333332], [50.0, 916.2253521126762], [1.0, 854.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}, {"data": [[34.39400000000002, 922.8460000000002]], "isOverall": false, "label": "EMPTY_SERIE_NAME-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 206.83333333333334, "minX": 1.73308668E12, "maxY": 21162.116666666665, "series": [{"data": [[1.73308668E12, 4334.466666666666], [1.73308674E12, 21162.116666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73308668E12, 206.83333333333334], [1.73308674E12, 1009.8333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308674E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 883.6168674698803, "minX": 1.73308668E12, "maxY": 1114.3764705882356, "series": [{"data": [[1.73308668E12, 1114.3764705882356], [1.73308674E12, 883.6168674698803]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308674E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 883.0530120481936, "minX": 1.73308668E12, "maxY": 1112.788235294117, "series": [{"data": [[1.73308668E12, 1112.788235294117], [1.73308674E12, 883.0530120481936]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308674E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 667.1710843373493, "minX": 1.73308668E12, "maxY": 879.988235294118, "series": [{"data": [[1.73308668E12, 879.988235294118], [1.73308674E12, 667.1710843373493]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308674E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 616.0, "minX": 1.73308668E12, "maxY": 3080.0, "series": [{"data": [[1.73308668E12, 3080.0], [1.73308674E12, 1066.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73308668E12, 1843.600000000001], [1.73308674E12, 928.4000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73308668E12, 3080.0], [1.73308674E12, 1030.9999999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73308668E12, 2705.5000000000005], [1.73308674E12, 947.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.73308668E12, 671.0], [1.73308674E12, 616.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73308668E12, 941.0], [1.73308674E12, 888.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308674E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 856.0, "minX": 2.0, "maxY": 2162.0, "series": [{"data": [[2.0, 856.0], [35.0, 882.5], [42.0, 883.5], [45.0, 906.0], [11.0, 869.0], [13.0, 2162.0], [52.0, 880.5], [54.0, 905.0], [61.0, 903.0], [19.0, 891.5], [22.0, 871.5], [23.0, 930.0], [7.0, 860.0], [30.0, 900.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 854.0, "minX": 2.0, "maxY": 2158.0, "series": [{"data": [[2.0, 854.0], [35.0, 881.5], [42.0, 883.0], [45.0, 906.0], [11.0, 869.0], [13.0, 2158.0], [52.0, 880.0], [54.0, 904.0], [61.0, 903.0], [19.0, 890.5], [22.0, 871.5], [23.0, 930.0], [7.0, 860.0], [30.0, 899.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.73308668E12, "maxY": 6.366666666666666, "series": [{"data": [[1.73308668E12, 1.9666666666666666], [1.73308674E12, 6.366666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308674E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.73308668E12, "maxY": 6.916666666666667, "series": [{"data": [[1.73308668E12, 1.4166666666666667], [1.73308674E12, 6.916666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73308674E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.73308668E12, "maxY": 6.916666666666667, "series": [{"data": [[1.73308668E12, 1.4166666666666667], [1.73308674E12, 6.916666666666667]], "isOverall": false, "label": "-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308674E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.73308668E12, "maxY": 6.916666666666667, "series": [{"data": [[1.73308668E12, 1.4166666666666667], [1.73308674E12, 6.916666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73308674E12, "title": "Total Transactions Per Second"}},
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

