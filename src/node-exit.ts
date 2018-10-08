export const placeExit = (node: any, settings: any) => {
  return node
    .exit()
    .transition()
    .duration(settings.duration)
    .attr("transform", (d: any) => {
      return settings.horizontalLayout
        ? "translate(" + d.ancestors()[1].y + "," + d.ancestors()[1].x + ")"
        : "translate(" + d.ancestors()[1].x + "," + d.ancestors()[1].y + ")";
    })
    .remove();
};
