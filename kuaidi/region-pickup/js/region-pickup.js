const map = new BMap.Map("allmap", {
  enableMapClick: false
});
map.enableScrollWheelZoom();

function drawBoundary(areaName) {
  const boundary = new BMap.Boundary();
  boundary.get(areaName, rs => {
    const count = rs.boundaries.length;
    if (count === 0) {
      alert('未能获取当前输入行政区域');
      return;
    }

    let pointArray = [];
    for (let i = 0; i < count; i++) {
      // 从多边形中转换成以{x,y}组成的数组以便simplify库进行简化
      const points = new BMap.Polygon(rs.boundaries[i])
        .getPath()
        .map((p) => {
          return {
            x: p.lng,
            y: p.lat
          }
        });

      // 简化多边形区域，参数中的值可以根据实际情况进行修改，值越小越精细，越大越粗糙
      const simplified = simplify(points, 0.03)
        .map((p) => {
          return new BMap.Point(p.x, p.y);
        });

      // 设置多边形区域的样式
      const polygon = new BMap.Polygon(simplified, {
        strokeWeight: 2,
        strokeColor: "#ff0000",
        fillOpacity: 0.2,
        enableEditing: true
      });

      // 在多边形内部发生变化时输出更新的多边形区域
      polygon.addEventListener("lineupdate", (e) => {
        let strArray = "";
        e.target.getPath()
          .forEach((i) => {
            strArray += `(${i.lng}, ${i.lat}),`
          })
        console.log(strArray);
      })

      map.addOverlay(polygon);
      pointArray = pointArray.concat(polygon.getPath());
    }
    map.setViewport(pointArray); // 调整视野以便显示整个多边形区域
  });
}

drawBoundary("成都市");
