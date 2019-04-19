var myChart = echarts.init(document.getElementById('main'));
Papa.parse("./assets/20180529-084827-上海市.bd09.csv", {
  download: true,
  complete: function (results, file) {
    var data = results.data.map((i) => {
      return {
        value: [i[2], i[3]]
      }
    })

    myChart.setOption(option = {
      title: {
        x: 'right',
        text: "单车位置分布",
        textStyle: {
          color: '#fff',
          fontSize: 30
        }
      },
      bmap: {
        center: [121.4693, 31.123070],
        zoom: 14,
        roam: true,
        mapStyle: {
          style: 'grayscale'
        }
      },
      series: [{
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: data,
        symbolSize: 1,
        large: true, //打开大量点优化
      }]
    });

    myChart.setOption(option);
  }
})
