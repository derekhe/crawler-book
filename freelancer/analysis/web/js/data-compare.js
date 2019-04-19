((() => {
  // 初始化百度ECharts，并以project-user为渲染窗口
  const myChart = echarts.init(document.getElementById('project-user'), 'dark', {
    devicePixelRatio: 2 //解决在手机上模糊的问题
  });

  const option = {
    legend: {
      data: ['采集数据(千万)', '网站数据(千万)']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['项目数', '用户数']
    },
    yAxis: [{
      type: 'value'
    }],
    series: [{
        name: '采集数据(千万)',
        type: 'bar',
        data: [7405296 / 1000000, 17329285 / 1000000]
      },
      {
        name: '网站数据(千万)',
        type: 'bar',
        data: [11611955 / 1000000, 23850100 / 1000000]
      }
    ]
  };

  myChart.setOption(option);
}))()
