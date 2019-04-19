((() => {
  const myChart = echarts.init(document.getElementById('movement'), 'dark', {
    devicePixelRatio: 2
  });

  // 载入国家的名称和首都名称、位置
  const gpsPromise = fetch("./data/country-capitals.json")
    .then(response => response.json());

  // 载入热力图的数据
  const heatmapPromise = fetch("./data/heatmap.json")
    .then(response => response.json());

  // 等待所有数据载入完成
  Promise.all([gpsPromise, heatmapPromise])
    .then(resp => {
      const gps = resp[0];
      const heatmap = resp[1];

      function findGPS(countryName) {
        const o = _.find(gps, g => g.CountryName == countryName);

        if (o == null) {
          return null;
        }

        return [parseFloat(o.CapitalLongitude), parseFloat(o.CapitalLatitude)];
      }

      const routes = _.map(heatmap.index, (d, index) => {
          const bidderCountryName = d[1];
          const bidder = findGPS(bidderCountryName);

          const onwerCountryName = d[0];
          const owner = findGPS(onwerCountryName);

          const data = heatmap.data[index];
          if (data < 250) return null; // 数据量太小的就不展示了，避免很多杂乱的线条

          if (bidder && owner) {
            return {
              coords: [bidder, owner],
              from: bidderCountryName,
              to: onwerCountryName,
              data
            };
          } else {
            return null;
          }
        })
        .filter(e => e != null);

      const option = {
        title: {
          left: 'center',
          textStyle: {
            color: '#eee'
          }
        },
        toolbox: {
          show: true
        },
        backgroundColor: '#003',
        tooltip: {
          // 鼠标移动到线上显示价值迁移详情
          formatter: function (param) {
            const route = routes[param.dataIndex];
            return route.from + "->" + route.to + ":" + route.data;
          }
        },
        geo: {
          map: 'world',
          roam: true,
          itemStyle: {
            normal: {
              borderColor: '#009',
              color: '#005'
            }
          }
        },
        series: [{
          type: 'lines', //用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化。
          coordinateSystem: 'geo',
          data: routes,
          large: true,
          lineStyle: {
            //设置线型为不透明度20%的弯曲线型
            normal: {
              opacity: 0.2,
              width: 1.2,
              curveness: 0.1
            }
          },
          effect: { //动画效果打开
            show: true,
            period: 20, //动画持续时间
            trailLength: 0,
            symbol: 'pin',
            symbolSize: 6
          },
          // 设置混合模式为叠加，以便显示叠加效果
          blendMode: 'lighter'
        }]
      };


      // 由于迁移图比较消耗资源，在某些浏览器上比较慢，所以页面会不是太流畅。
      // 而Reveal会将所有的js载入并运行，即便没有到这一页也会运行相应的js。
      // 所以在这里监听slidechanged事件，当浏览到这一页时，在进行渲染，离开时清除。
      Reveal.addEventListener('slidechanged', event => {
        if (event.indexh == 11) {
          setTimeout(() => {
            myChart.setOption(option);
          }, 600);
        } else {
          myChart.clear();
        }
      });
    });
}))()
