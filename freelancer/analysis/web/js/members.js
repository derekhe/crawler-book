((() => {
  const myChart = echarts.init(document.getElementById('user-members'), 'dark', {
    devicePixelRatio: 2
  });

  fetch("./data/member.json")
    .then(response => response.json())
    .then(json => {
      const names = _.map(json, d => d.name);

      option = {
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: names
        },
        series: [{
          name: '会员分布',
          type: 'pie',
          radius: [20, 150],
          center: ['50%', '50%'],
          roseType: 'area',
          data: json
        }]
      };

      myChart.setOption(option);
    });
}))();
