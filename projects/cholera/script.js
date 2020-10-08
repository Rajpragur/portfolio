// Table 1 (Attacks/Death per day & Total)

var tableData1 = [
    ['Aug. 19', 'Aug. 20', 'Aug. 21', 'Aug. 22', 'Aug. 23', 'Aug. 24', 'Aug. 25', 'Aug. 26', 'Aug. 27', 'Aug. 28', 'Aug. 29', 'Aug. 30', 'Aug. 31', 'Sept. 1', 'Sept. 2', 'Sept. 3', 'Sept. 4', 'Sept. 5', 'Sept. 6', 'Sept. 7', 'Sept. 8', 'Sept. 9', 'Sept. 10', 'Sept. 11', 'Sept. 12', 'Sept. 13', 'Sept. 14', 'Sept. 15', 'Sept. 16', 'Sept. 17', 'Sept. 18', 'Sept. 19', 'Sept. 20', 'Sept. 21', 'Sept. 22', 'Sept. 23', 'Sept. 24', 'Sept. 25', 'Sept. 26', 'Sept. 27', 'Sept. 28', 'Sept. 29'],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 8, 56, 143, 116, 54, 46, 36, 20, 28, 12, 11, 5, 5, 1, 3, 0, 1, 4, 2, 3, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 17, 73, 216, 332, 386, 432, 468, 488, 524, 536, 547, 552, 557, 558, 561, 561, 562, 566, 568, 571, 571, 571, 573, 574, 575, 576, 577, 578, 579, 579, 579],
    [1, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 2, 3, 70, 127, 76, 71, 45, 37, 32, 30, 24, 18, 15, 6, 13, 6, 8, 6, 5, 2, 3, 0, 0, 2, 3, 0, 0, 2, 0, 2, 1],
    [1, 1, 3, 3, 3, 5, 5, 5, 6, 6, 7, 9, 12, 82, 209, 285, 356, 401, 438, 470, 500, 524, 542, 557, 563, 576, 582, 590, 596, 601, 603, 606, 606, 606, 608, 611, 611, 611, 613, 613, 615, 616]]

var table1 = [{
    type: 'table',
    header: {
        values: [["<b>Date (1854)</b>"],
        ["<b>ATTACKS (DAILY)</b>"],
        ["<b>ATTACKS (TOTAL)</b>"],
        ["<b>DEATHS (DAILY)</b>"],
        ["<b>DEATHS (TOTAL)</b>"]],
        align: ["left", "center"],
        line: { width: 1, color: 'black' },
        fill: { color: '#F93838' },
        font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
        values: tableData1,
        align: ["right", "right"],
        line: { color: "#506784", width: 1 },
        fill: { color: ['#FDCDCD', 'white'] },
        font: { family: "Arial", size: 11, color: ["black"] }
    }
}]

Plotly.newPlot('tableDiv1', table1);

// Line Graph (Attacks/Deaths)

var xData = ['Aug. 19', 'Aug. 20', 'Aug. 21', 'Aug. 22', 'Aug. 23', 'Aug. 24', 'Aug. 25', 'Aug. 26', 'Aug. 27', 'Aug. 28', 'Aug. 29', 'Aug. 30', 'Aug. 31', 'Sept. 1', 'Sept. 2', 'Sept. 3', 'Sept. 4', 'Sept. 5', 'Sept. 6', 'Sept. 7', 'Sept. 8', 'Sept. 9', 'Sept. 10', 'Sept. 11', 'Sept. 12', 'Sept. 13', 'Sept. 14', 'Sept. 15', 'Sept. 16', 'Sept. 17', 'Sept. 18', 'Sept. 19', 'Sept. 20', 'Sept. 21', 'Sept. 22', 'Sept. 23', 'Sept. 24', 'Sept. 25', 'Sept. 26', 'Sept. 27', 'Sept. 28', 'Sept. 29']

var attackDaily = {
    x: xData,
    y: [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 8, 56, 143, 116, 54, 46, 36, 20, 28, 12, 11, 5, 5, 1, 3, 0, 1, 4, 2, 3, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0],
    mode: 'lines',
    name: 'Attacks (Daily)',
    line: {
        dash: 'dashdot',
        width: 2,
        color: 'rgb(235, 116, 52)'
    }
};

var deathDaily = {
    x: xData,
    y: [1, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 2, 3, 70, 127, 76, 71, 45, 37, 32, 30, 24, 18, 15, 6, 13, 6, 8, 6, 5, 2, 3, 0, 0, 2, 3, 0, 0, 2, 0, 2, 1],
    mode: 'lines',
    name: 'Deaths (Daily)',
    line: {
        dash: 'dashdot',
        width: 2,
        color: 'rgb(113, 52, 235)'
    }
};

var attackTotal = {
    x: xData,
    y: [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 17, 73, 216, 332, 386, 432, 468, 488, 516, 528, 539, 544, 549, 550, 553, 553, 554, 558, 560, 563, 563, 563, 565, 566, 567, 568, 569, 570, 571, 571, 571],
    mode: 'lines',
    name: 'Attacks (Total)',
    line: {
        dash: 'solid',
        width: 4,
        color: 'rgb(235, 116, 52)'
    }
};

var deathTotal = {
    x: xData,
    y: [1, 1, 3, 3, 3, 5, 5, 5, 6, 6, 7, 9, 12, 82, 209, 285, 356, 401, 438, 470, 500, 524, 542, 557, 563, 576, 582, 590, 596, 601, 603, 606, 606, 606, 608, 611, 611, 611, 613, 613, 615, 616],
    mode: 'lines',
    name: 'Deaths (Total)',
    line: {
        dash: 'solid',
        width: 4,
        color: 'rgb(113, 52, 235)'
    }
};

var data = [deathTotal, attackTotal, deathDaily, attackDaily];

var layout = {
    title: 'Cholera Attack and Deaths',
    xaxis: {
        showline: true,
        showgrid: false,
        showticklabels: true,
        linecolor: 'rgb(204,204,204)',
        linewidth: 2,
        autotick: false,
        ticks: 'outside',
        tickangle: 45,
        tickcolor: 'rgb(204,204,204)',
        tickwidth: 2,
        ticklen: 5,
        tickfont: {
            family: 'Arial',
            size: 12,
            color: 'rgb(82, 82, 82)'
        }
    },
    yaxis: {
        range: [0, 630],
        showgrid: false,
        zeroline: false,
        showline: false,
        autorange: false
    },
    legend: {
        y: 0.5,
        traceorder: 'reversed',
        font: {
            size: 16
        }
    }
};

Plotly.newPlot('lineDiv', data, layout);


var tableData2 = [
    ['0-1', '2-5', '6-10', '11-15', '16-20', '21-40', '41-60', '61-80', 'over 80'],
    [8.2, 14, 12.1, 7.8, 7.2, 12.1, 13.7, 20.5, 39.6],
    [8.9, 14.7, 11.2, 7.1, 7.2, 11.8, 12.9, 20.5, 37.8]]

var table2 = [{
    type: 'table',
    header: {
        values: [["<b>AGE RANGE</b>"],
        ["<b>MALES</b>"],
        ["<b>FEMALES</b>"]],
        align: ["right", "right"],
        line: { width: 1, color: '#506784' },
        fill: { color: '#F93838' },
        font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
        values: tableData2,
        align: ["right", "right"],
        line: { color: "#506784", width: 1 },
        fill: { color: ['#FDCDCD', 'white'] },
        font: { family: "Arial", size: 11, color: ["black"] }
    }
}]

Plotly.newPlot('tableDiv2', table2);


var male = {
    x: ['0-1', '2-5', '6-10', '11-15', '16-20', '21-40', '41-60', '61-80', 'over 80'],
    y: [8.2, 14, 12.1, 7.8, 7.2, 12.1, 13.7, 20.5, 39.6],
    name: 'Male Deaths',
    marker: { color: 'rgb(222, 53, 53)' },
    type: 'bar'
};

var female = {
    x: ['0-1', '2-5', '6-10', '11-15', '16-20', '21-40', '41-60', '61-80', 'over 80'],
    y: [8.9, 14.7, 11.2, 7.1, 7.2, 11.8, 12.9, 20.5, 37.8],
    name: 'Female Deaths',
    marker: { color: 'rgb(102, 14, 189)' },
    type: 'bar'
};

var barData = [male, female];

var barlayout = {
    title: 'Cholera Deaths by Age & Sex'
};

Plotly.newPlot('barDiv', barData, barlayout);


var tableData3 = [
    ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    ['2,075,391', '1,711,664', '1,395,091', '1,073,914', '810,979', '560,534', '351,893', '166,194', '40,772'],
    ['2,065,096', '1,711,627', '1,542,876', '1,140,383', '845,260', '592,970', '399,019', '199,326', '55,704']]

var table3 = [{
    type: 'table',
    header: {
        values: [["<b>AGE RANGE</b>"],
        ["<b>MALES</b>"],
        ["<b>FEMALES</b>"]],
        align: ["left", "center"],
        line: { width: 1, color: '#506784' },
        fill: { color: '#F93838' },
        font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
        values: tableData3,
        align: ["right", "right"],
        line: { color: "#506784", width: 1 },
        fill: { color: ['#FDCDCD', 'white'] },
        font: { family: "Arial", size: 11, color: ["black"] }
    }
}]

Plotly.newPlot('tableDiv3', table3);


var maleCensusData = {
    x: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    y: [2075391, 1711664, 1395091, 1073914, 810979, 560534, 351893, 166194, 40772],
    name: 'Male',
    marker: { color: 'rgb(222, 53, 53)' },
    type: 'bar'
};

var maleCensusBar = [maleCensusData];

var maleCensuslayout = {
    barmode: 'stack',
    title: 'UK Male Census by Age (1851)'
};

Plotly.newPlot('barDiv2', maleCensusBar, maleCensuslayout);


var data = [{
  values: [2075391,1711664,1395091,1073914,810979,560534,351893,166194,40772],
  labels: ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','over 80' ],
  domain: {column: 1},
  name: 'Male Census',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie',
  marker: {
    colors: ['rgb(121, 3, 3)','rgb(136, 22, 22)','rgb(151, 41, 41)','rgb(166, 59, 59)','rgb(181, 78, 78)','rgb(196, 97, 97)','rgb(211, 116, 116)','rgb(226, 134, 134)','rgb(241, 153, 153)']
  }
}];

var layout = {
  title: 'UK Male Census (1851)',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Male',
      x: 0.5,
      y: 0.5
    }
  ],
  height: 400,
  width: 600,
  showlegend: true,
};

Plotly.newPlot('pieDivMale', data, layout);


var femaleCensusData = {
    x: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    y: [2065096, 1711627, 1542876, 1140383, 845260, 592970, 399019, 199326, 55704],
    name: 'Female',
    marker: { color: 'rgb(102, 14, 189)' },
    type: 'bar'
};

var femaleCensusBar = [femaleCensusData];

var femaleCensuslayout = {
    barmode: 'stack',
    title: 'UK Female Census by Age (1851)'
};

Plotly.newPlot('barDiv3', femaleCensusBar, femaleCensuslayout);


var data = [{
  values: [2065096,1711627,1542876,1140383,845260,592970,399019,199326,55704],
  labels: ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','over 80'],
  domain: {column: 1},
  name: 'Male Census',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie',
  marker: {
    colors: ['rgb(61, 0, 112)','rgb(82, 26, 130)','rgb(104, 51, 148)','rgb(125, 77, 166)','rgb(147, 103, 184)','rgb(168, 128, 201)','rgb(189, 154, 219)','rgb(211, 179, 237)','rgb(232, 205, 255)']
  }
}];

var layout = {
  title: 'UK Female Census (1851)',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Female',
      x: 0.5,
      y: 0.5
    }
  ],
  height: 400,
  width: 600,
  showlegend: true,
};

Plotly.newPlot('pieDivFemale', data, layout);



var censusData = [{
    values: [8552261, 8186432],
    labels: ['Female', 'Male'],
    type: 'pie',  
    marker: {
      colors: ['rgb(102, 14, 189)', 'rgb(222, 53, 53)']
  },
}];

var censusLayout = {
    height: 400,
    width: 500,
    title: 'UK Census by Gender (1851)'
};

Plotly.newPlot('pieDiv2', censusData, censusLayout);



var map = L.map("mapid").setView([51.513, -0.136], 16);

L.tileLayer(
  "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
).addTo(map);


var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  	div.innerHTML += "<h4>Legend</h4>";
  	div.innerHTML += '<i style="background: #f03"></i><span>Attack Location</span><br>';
    div.innerHTML += '<i style="background: #477AC2"></i><span>Pump Location</span><br>';
  return div;
};
legend.addTo(map);

var numDeath = [3, 2, 1, 1, 4, 2, 2, 2, 3, 2, 2, 1, 3, 1, 4, 1, 1, 1, 4, 3, 2, 1, 2, 2, 2, 1, 1, 3, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 8, 2, 1, 1, 1, 1, 1,
    4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 2, 3, 1, 4, 15, 3, 4, 5, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 1, 1, 4, 2, 1, 4, 4, 1, 4, 1, 1, 2, 1, 2, 3, 1, 4, 1, 1, 7, 3, 8, 1, 1, 5, 8, 2, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 1, 2, 1, 1, 1, 1, 3,
    3, 3, 3, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 5, 1, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 3,
    1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 3, 2, 1, 1, 1, 1, 1, 2, 3, 3, 1, 1, 3, 1, 1, 1, 1, 2, 2, 4, 5, 2, 5, 5, 3, 3, 1, 5, 4, 4, 1, 4, 1, 3,
    2, 1, 2, 1, 1, 2, 3, 1, 1, 4, 2, 2, 1, 5, 3, 2, 3, 2, 1, 1, 1];

var lat = [-0.13793, -0.137883, -0.137853, -0.137812, -0.137767, -0.137537, -0.1382, -0.138045, -0.138276, -0.138223,
    -0.138337, -0.138563, -0.138426, -0.138378, -0.138337, -0.138645, -0.138698, -0.137924, -0.137865, -0.137811,
    -0.138762, -0.138799, -0.139045, -0.13897, -0.138863, -0.138752, -0.138808, -0.138856, -0.138887, -0.139239,
    -0.139321, -0.139316, -0.139616, -0.139719, -0.140074, -0.139094, -0.139697, -0.139327, -0.139317, -0.139187,
    -0.139036, -0.139209, -0.138427, -0.138624, -0.138096, -0.138035, -0.137984, -0.138065, -0.138194, -0.137818,
    -0.137656, -0.137584, -0.13765, -0.13745, -0.137376, -0.137327, -0.13698, -0.13718, -0.137052, -0.137695,
    -0.137533, -0.137419, -0.137368, -0.137325, -0.137531, -0.137562, -0.137466, -0.137386, -0.137306, -0.137089,
    -0.136996, -0.136859, -0.136778, -0.136705, -0.136493, -0.13633, -0.136424, -0.136523, -0.136599, -0.136699,
    -0.136819, -0.136973, -0.136358, -0.13663, -0.136584, -0.136423, -0.136345, -0.136437, -0.136377, -0.136197,
    -0.136142, -0.136102, -0.13603, -0.13631, -0.13594, -0.135858, -0.1358, -0.135717, -0.135119, -0.135144,
    -0.135394, -0.135409, -0.135472, -0.135765, -0.135871, -0.135976, -0.136033, -0.136115, -0.13618, -0.136083,
    -0.136139, -0.135329, -0.135122, -0.134645, -0.134522, -0.134967, -0.135098, -0.134394, -0.134505, -0.134437,
    -0.134594, -0.13464, -0.134709, -0.134756, -0.135244, -0.134897, -0.135158, -0.135344, -0.135063, -0.135801,
    -0.135762, -0.13574, -0.135645, -0.135602, -0.135501, -0.135832, -0.136049, -0.13614, -0.136228, -0.134999,
    -0.134793, -0.134896, -0.135, -0.133483, -0.133265, -0.133296, -0.132933, -0.133998, -0.134042, -0.134156,
    -0.134091, -0.134272, -0.13422, -0.134704, -0.134782, -0.13501, -0.134923, -0.134885, -0.134212, -0.134135,
    -0.134364, -0.134447, -0.134479, -0.134658, -0.134367, -0.134179, -0.13416, -0.134069, -0.134085, -0.133821,
    -0.133922, -0.13385, -0.133725, -0.133745, -0.133676, -0.133563, -0.133467, -0.133393, -0.134474, -0.135259,
    -0.135395, -0.136022, -0.136804, -0.136583, -0.135653, -0.135578, -0.13486, -0.13469, -0.134818, -0.135704,
    -0.135561, -0.135649, -0.135415, -0.135576, -0.135357, -0.135475, -0.136226, -0.136328, -0.136222, -0.136117,
    -0.13603, -0.136266, -0.136421, -0.136935, -0.136931, -0.136799, -0.13678, -0.136696, -0.136712, -0.136123,
    -0.135958, -0.135883, -0.135788, -0.135849, -0.136008, -0.136099, -0.13617, -0.135485, -0.135374, -0.135582,
    -0.135679, -0.135814, -0.135905, -0.135992, -0.136217, -0.136579, -0.136675, -0.136764, -0.136877, -0.136953,
    -0.13723, -0.136651, -0.136503, -0.137367, -0.137422, -0.137472, -0.1383, -0.137363, -0.137995, -0.138139,
    -0.138239, -0.138272, -0.138083, -0.137912, -0.137707, -0.137108, -0.137065, -0.138474, -0.138123, -0.137762];

var long = [51.513418, 51.513361, 51.513317, 51.513262, 51.513204, 51.513184, 51.513359, 51.513328, 51.513323, 51.513427, 51.513381, 51.513462, 51.513216, 51.513169, 51.513116, 51.51324, 51.513164, 51.513178, 51.513111, 51.513055, 51.513441, 51.513592, 1.513402, 51.51338
    , 51.513411, 51.513641, 51.513693, 51.513676, 51.51359, 51.513663, 51.513502, 51.513583, 51.513541, 51.513298, 51.513291, 51.513013, 51.512965, 51.512893
    , 51.512964, 51.513025, 51.513027, 51.512831, 51.512885, 51.512526, 51.512465, 51.512428, 51.512415, 51.51251, 51.512378, 51.512447, 51.512491
    , 51.512374, 51.512339, 51.512364, 51.512319, 51.51254, 51.512649, 51.512692, 51.512957, 51.512765, 51.51278, 51.512726, 51.512681, 51.512914, 51.513046, 51.513074, 51.513087, 51.513122, 51.513187, 51.513214, 51.513249, 51.513271
    , 51.5133, 51.51316, 51.513016, 51.512921, 51.51289, 51.512859, 51.51283, 51.512782, 51.512729, 51.512868, 51.512723, 51.512654, 51.512713, 51.512615
    , 51.512491, 51.512449, 51.512465, 51.512413, 51.512358, 51.512271, 51.512355, 51.511991, 51.512083, 51.512031, 51.51197, 51.511882, 51.51205, 51.51225
    , 51.512162, 51.512212, 51.512573, 51.512575, 51.512672, 51.512727, 51.512794, 51.512846, 51.512879, 51.512939, 51.512765, 51.512844, 51.512532
    , 51.512198, 51.512215, 51.513154, 51.513056, 51.513165, 51.513098, 51.513238, 51.513293, 51.513379, 51.513431, 51.513475, 51.513422, 51.513528, 51.513481
    , 51.513594, 51.513227, 51.51318, 51.513132, 51.513048, 51.513006, 51.512883, 51.51327, 51.513459, 51.513431, 51.513402, 51.512593, 51.512585, 51.512555
    , 51.512521, 51.513137, 51.513228, 51.513152, 51.513258, 51.513544, 51.513626, 51.513637, 51.513524, 51.51382, 51.513724, 51.513704, 51.513831, 51.513915
    , 51.513597, 51.514032, 51.513891, 51.513758, 51.514065, 51.514146, 51.514201, 51.51423, 51.514319, 51.514377, 51.514357, 51.514382, 51.514402
    , 51.514522, 51.514497, 51.514472, 51.514504, 51.514546, 51.514561, 51.514594, 51.514581, 51.514606, 51.515834, 51.515195, 51.515149, 51.514818
    , 51.514843, 51.514914, 51.514496, 51.514743, 51.514467, 51.514453, 51.514845, 51.514389, 51.514399, 51.514335, 51.514224, 51.51422, 51.514145
    , 51.514108, 51.514359, 51.514326, 51.514544, 51.514569, 51.514586, 51.514612, 51.514575, 51.514507, 51.514274, 51.514293, 51.514058, 51.514148
    , 51.513961, 51.514027, 51.514076, 51.514096, 51.514134, 51.514033, 51.513996, 51.51396, 51.513945, 51.513821, 51.513999, 51.513795, 51.513766
    , 51.513726, 51.513692, 51.513672, 51.513603, 51.513482, 51.513458, 51.513429, 51.513404, 51.513359, 51.513378, 51.513855, 51.513875, 51.513565
    , 51.513616, 51.513742, 51.513918, 51.513772, 51.513502, 51.513712, 51.513644, 51.513711, 51.514061, 51.514748, 51.514794, 51.514526, 51.514706
    , 51.512311, 51.511998, 51.511856];

for (let i = 0; i < long.length; i++) {
    var circle = L.circle([long[i], lat[i]], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 3 * numDeath[i],
    }).addTo(map);
}   

var marker = L.marker([51.513341, -0.136668]).addTo(map);
var marker = L.marker([51.513876, -0.139586]).addTo(map);
var marker = L.marker([51.514906, -0.139671]).addTo(map);
var marker = L.marker([51.512354, -0.13163]).addTo(map);
var marker = L.marker([51.512139, -0.133594]).addTo(map);
var marker = L.marker([51.511542, -0.135919]).addTo(map);
var marker = L.marker([51.510019, -0.133962]).addTo(map);
var marker = L.marker([l]).addTo(map);

