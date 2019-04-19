((() => {
  const myChart = echarts.init(document.getElementById('category-detail'), 'dark', {
    devicePixelRatio: 2
  });

  fetch("./data/category-more.json")
    .then(response => response.json())
    .then(resp => {
      const func = (v, k) => ({
        "name": k,
        "value": v
      });

      const category = _.map(resp['doc_count'], func);

      const option = {
        tooltip: {
          trigger: 'item'
        },
        grid: [{
          top: 40,
          width: '50%',
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: _.map(category, v => v.name),
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'chart',
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: category
        }, {
          type: 'pie',
          radius: ['20%', '50%'],
          center: ['75%', '50%'],
          data: category,
          tooltip: {
            formatter: "{b}: {c} ({d}%)"
          }
        }]
      };

      myChart.setOption(option);
    })
}))();
