((() => {
  const myChart = echarts.init(document.getElementById('china-top20'), 'dark', {
    devicePixelRatio: 2
  });

  fetch("./data/china-top.json")
    .then(response => response.json())
    .then(json => {

      const usernames = _.map(json, v => v.user);

      const projectcount = _.map(json, v => v.count);

      const totalEarned = _.map(json, v => v.earned);

      const average = _.map(json, v => v.average);
      const colors = ['#5793f3', '#d14a61', '#675bba'];

      const option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['工程数', '总收入', '平均每单价格'],
          align: 'right',
          right: 10
        },
        grid: {
          left: '6%',
          right: '4%',
          bottom: '20%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: usernames,
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          axisLine: {
            lineStyle: {
              color: colors[0]
            }
          }
        }],
        yAxis: [{
            type: 'value',
            name: '数量',
            axisLabel: {
              formatter: '{value}'
            },
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            splitLine: {
              show: false
            }
          },
          {
            type: 'value',
            name: '$',
            axisLabel: {
              formatter: '{value}'
            },
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            splitLine: {
              show: false
            }
          },
          {
            type: 'value',
            name: '$/每工程',
            axisLabel: {
              formatter: '{value}'
            },
            offset: 65,
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [{
          name: '工程数',
          type: 'bar',
          data: projectcount
        }, {
          name: '总收入',
          type: 'bar',
          data: totalEarned,
          yAxisIndex: 1
        }, {
          name: '平均每单价格',
          type: 'bar',
          data: average,
          yAxisIndex: 2
        }]
      };

      myChart.setOption(option);
    });
}))()
