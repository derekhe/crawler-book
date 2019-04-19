((() => {
  const myChart = echarts.init(document.getElementById('user-customer-analysis'), 'dark', {
    devicePixelRatio: 2
  });

  const categoryPromise = fetch("./data/zhengnami13_category.json")
    .then(response => response.json());

  const customersPromise = fetch("./data/zhengnami13_customers.json")
    .then(response => response.json());

  Promise.all([categoryPromise, customersPromise])
    .then(resps => {
      const category = _.map(resps[0].data, d => ({
        "name": d[2],
        "value": d[3]
      }));

      const detail = _.map(resps[1].count, (v, k) => ({
          "name": k,
          "value": v
        }))
        .slice(0, 10);

      const option = {
        tooltip: {
          trigger: 'item'
        },
        title: [{
          text: '业务分布',
          x: '20%',
          y: '10%',
          textAlign: 'center'
        }, {
          text: '客户分布',
          x: '70%',
          y: '10%',
          textAlign: 'center'
        }],
        series: [{
          type: 'pie',
          radius: ['20%', '30%'],
          center: ['25%', '50%'],
          data: category,
          tooltip: {
            formatter: "{b}: {c} ({d}%)"
          }
        }, {
          type: 'pie',
          radius: ['20%', '30%'],
          center: ['75%', '50%'],
          data: detail,
          tooltip: {
            formatter: "{b}: {c} ({d}%)"
          }
        }]
      };

      myChart.setOption(option);
    });
}))()
