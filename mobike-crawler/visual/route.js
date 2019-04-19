var map = new BMap.Map("l-map");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
map.enableScrollWheelZoom(true);
map.setMapStyle({
  style: 'grayscale'
});

Papa.parse("./assets/bike_movement.csv", {
  download: true,
  header: true,
  complete: function (results, file) {
    // 排除未使用的时候
    let data = results.data.filter(((i) => i['distance'] != 0))

    data.forEach((d, i) => {
      setTimeout(() => {
        var riding = new BMap.RidingRoute(map, {
          renderOptions: {
            map: map,
            panel: "r-result",
            autoViewport: true
          }
        });

        var start = coordtransform.wgs84tobd09(d['lat'], d['lng']);
        var end = coordtransform.wgs84tobd09(d['lat2'], d['lng2']);
        riding.search(new BMap.Point(start[0],start[1]), new BMap.Point(end[0], end[1]));  //规划并展示路径
      }, i * 5000);
    });
  }
})
