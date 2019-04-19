((() => {
  const myChart = echarts.init(document.getElementById('user-analysis'), 'dark', {
    devicePixelRatio: 2
  });

  fetch("./data/zhengnami13_projects.json")
    .then(response => response.json())
    .then(resp => {
      const time = (_.keys(resp)
        .map(k => new Date(parseInt(k))
          .toLocaleDateString()));

      const project_counts = _.map(resp, v => v.project_count);

      const earned = _.map(resp, v => v.earned);

      const averages = _.map(resp, v => v.average);

      const colors = ['#5793f3', '#d14a61', '#675bba'];
      const option = {
        colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['单数', '月收入', '平均每单价格'],
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
          data: time,
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
          name: '单数',
          type: 'bar',
          data: project_counts
        }, {
          name: '月收入',
          type: 'bar',
          data: earned,
          yAxisIndex: 1
        }, {
          name: '平均每单价格',
          type: 'bar',
          data: averages,
          yAxisIndex: 2
        }]
      };

      myChart.setOption(option);
    });
}))()
