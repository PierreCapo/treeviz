export const placeExit = (node: any, settings: any) => {
  return node
    .exit()
    .transition()
    .duration(settings.duration)
    .attr("transform", (d: any) => {
      return settings.horizontalLayout
        ? "translate(" + d.ancestors()[1].y0 + "," + d.ancestors()[1].x0 + ")"
        : "translate(" + d.ancestors()[1].x0 + "," + d.ancestors()[1].y0 + ")";
    })
    .remove();
};
