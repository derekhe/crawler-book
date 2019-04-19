((() => {
  const myChart = echarts.init(document.getElementById('user-country'), 'dark', {
    devicePixelRatio: 2
  });

  fetch("./data/user-country.json")
    .then(response => response.json())
    .then(json => {
      const mapData = _.map(json['doc_count'], (v, k) => ({
        "name": k,
        "value": v
      }));

      // 找到数据中的最大值
      const max = _.maxBy(mapData, 'value')
        .value;

      // 由于有近100多个国家进行排名，但图示中使用100多个颜色分割显然没有意义
      // 我们取前20名的数据作为基础，按照数值相近的一些国家进行分类后显示
      // 这样数值相近的国家都有同样的颜色，便于理解
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
          textStyle: {
            color: '#fff'
          },
          pieces: [{
              // 比第三名高的部分都归到第一梯队中
              min: barValues[2]
            },
            { // 第二梯队
              min: barValues[5],
              max: barValues[2]
            },
            { // 第三梯队
              min: barValues[10],
              max: barValues[5]
            },
            { // 第四梯队
              min: barValues[15],
              max: barValues[10]
            },
            { // 第五梯队，比第20名还小的数据归为一类
              min: barValues[20],
              max: barValues[15]
            }
          ]
        },
        series: [{
          type: 'map', // 地图类型
          mapType: 'world', // 世界地图，注意必须要引入world.js才能正确显示
          roam: true, // 打开漫游支持，可以拖动
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
