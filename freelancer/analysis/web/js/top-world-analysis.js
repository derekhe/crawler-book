((() => {
  const myChart = echarts.init(document.getElementById('user-top20-detail'), 'infographic', {
    devicePixelRatio: 2
  });

  const topNodesPromise = fetch("./data/top-nodes.json")
    .then(response => response.json());

  const topUserToDetailPromise = fetch("./data/top-user-to-detail.json")
    .then(response => response.json());

  const topDetailToCategoryPromise = fetch("./data/top-detail-to-category.json")
    .then(response => response.json());

  Promise.all([topNodesPromise, topUserToDetailPromise, topDetailToCategoryPromise])
    .then(resp => {
      const nodes = resp[0];

      // 用户接单数量到项目详细分类数量的关系
      const l1 = _.map(resp[1].index, (v, k) => ({
        source: v[0],
        target: v[1],
        value: resp[1].data[k][0]
      }));

      // 项目详细分类到项目种类的关系
      const l2 = _.map(resp[2].index, (v, k) => ({
        source: v[0],
        target: v[1],
        value: resp[2].data[k][0]
      }));

      // 将数据合并
      const links = _.concat(l1, l2);

      myChart.setOption(option = {
        backgroundColor: "#dfdfdf",
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [{
          type: 'sankey',
          layoutIterations: 64, //布局的迭代次数，用来不断优化图中节点的位置，以减少节点和边之间的相互遮盖。
          data: nodes,
          links,
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#aaa'
            }
          },
          lineStyle: {
            normal: {
              color: 'source',
              curveness: 0.5 //曲线弯曲程度
            }
          }
        }]
      });

      myChart.setOption(option);
    });
}))()
