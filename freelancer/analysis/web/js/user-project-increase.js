((() => {
  const myChart = echarts.init(document.getElementById('user-project'), 'dark', {
    devicePixelRatio: 2
  });

  // 在现代浏览器中，使用fetch方法加载json数据。
  fetch("./data/project-user.json")
    .then(response => // 将数据转换成json对象
      response.json())
    .then(json => {
      // 获取对象中的值的部分，作为后续Y轴的数据来源
      const user_registered = _.values(json['user_cumsum']);
      const project_count = _.values(json['project_cumsum']);

      // 获取对象中的键的部分，这部分数据是时间戳
      x = _.map(_.keys(json['user_cumsum']), d => // 转换时间戳为JavaScript的Date对象
        new Date(parseInt(d))
        .toLocaleDateString());

      option = {
        legend: {
          data: ['用户数量', '项目数量'],
          align: 'left'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: x,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '用户数量',
          type: 'line',
          data: user_registered,
          animationDelay: function (idx) {
            // 添加动画效果
            return idx * 10;
          }
        }, {
          name: '项目数量',
          type: 'line',
          data: project_count,
          animationDelay: function (idx) {
            return idx * 10 + 100;
          }
        }],
        animationEasing: 'elasticOut', //缓慢出现
        animationDelayUpdate: function (idx) {
          // 添加动画效果
          return idx * 5;
        }
      };

      myChart.setOption(option);
    });
}))();
