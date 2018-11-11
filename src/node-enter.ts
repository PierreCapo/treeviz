export const placeEnter = (node: any, source: any, settings: any) => {
  return node
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d: any) => {
      if (settings.horizontalLayout) {
        return typeof d.ancestors()[1] !== "undefined" &&
          typeof d.ancestors()[1].x0 !== "undefined"
          ? "translate(" + d.ancestors()[1].y0 + "," + d.ancestors()[1].x0 + ")"
          : "translate(" + source.y0 + "," + source.x0 + ")";
      } else {
        return typeof d.ancestors()[1] !== "undefined" &&
          typeof d.ancestors()[1].x0 !== "undefined"
          ? "translate(" + d.ancestors()[1].x0 + "," + d.ancestors()[1].y0 + ")"
          : "translate(" + source.x0 + "," + source.y0 + ")";
      }
    });
};
