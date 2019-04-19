((() => {
  const myChart = echarts.init(document.getElementById('owner-country'), 'dark', {
    devicePixelRatio: 2
  });

  fetch("./data/owner-country.json")
    .then(response => response.json())
    .then(json => {
      const mapData = _.map(json['doc_count'], (v, k) => ({
        "name": k,
        "value": v
      }));

      const max = _.maxBy(mapData, 'value')
        .value;

      const barData = mapData.slice(0, 20);
      const barValues = _.map(barData, v => v.value);

      option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.name + ' : ' + params.value;
          }
        },
        visualMap: {
          type: "piecewise",
          min: 0,
          max,
          realtime: false,
          calculable: true,
          textStyle: {
            color: '#fff'
          },
          pieces: [{
              min: barValues[2]
            },
            {
              min: barValues[5],
              max: barValues[2]
            },
            {
              min: barValues[10],
              max: barValues[5]
            },
            {
              min: barValues[15],
              max: barValues[10]
            },
            {
              min: barValues[20],
              max: barValues[15]
            }
          ]
        },
        series: [{
          type: 'map',
          mapType: 'world',
          roam: true,
          itemStyle: {
            emphasis: {
              label: {
                show: true
              }
            }
          },
          data: mapData
        }]
      };

      myChart.setOption(option);
    });
}))();
