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
        text: "单车热力图",
        textStyle: {
          fontSize: 30
        }
      },
      visualMap: {
        show: false,
        top: 'top',
        min: 0,
        max: 5,
        seriesIndex: 0,
        calculable: true,
        inRange: {
            color: ['blue', 'blue', 'green', 'yellow', 'red']
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
        type: 'heatmap',
        coordinateSystem: 'bmap',
        data: data,
        pointSize: 1,
        blurSize: 6,
        large: true, //打开大量点优化
      }]
    });

    myChart.setOption(option);
  }
})
