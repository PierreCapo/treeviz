import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";

export const drawNodeExit = (
  node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>,
  settings: ITreeConfig
) => {
  const nodeExit = node
    .exit()
    .transition()
    .duration(settings.duration)
    .attr("transform", (d: any) => {
      return settings.horizontalLayout
        ? "translate(" + d.ancestors()[1].y0 + "," + d.ancestors()[1].x0 + ")"
        : "translate(" + d.ancestors()[1].x0 + "," + d.ancestors()[1].y0 + ")";
    })
    .remove();

  nodeExit.select("rect").style("fill-opacity", 1e-6);
  nodeExit.select("circle").attr("r", 1e-6);
  nodeExit.select("text").style("fill-opacity", 1e-6);
};
