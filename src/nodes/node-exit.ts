import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";
import { getFirstDisplayedAncestor, setNodeLocation } from "../utils";

export const drawNodeExit = (
  node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>,
  settings: ITreeConfig,
  nodes: ExtendedHierarchyPointNode[],
  oldNodes: ExtendedHierarchyPointNode[]
) => {
  const nodeExit = node
    .exit()
    //@ts-ignore
    .transition()
    .duration(settings.duration)
    .style("opacity", 0)
    .attr("transform", (d: any) => {
      const firstDisplayedParentNode = getFirstDisplayedAncestor(
        oldNodes,
        nodes,
        d.id
      );
      return setNodeLocation(
        firstDisplayedParentNode.x0,
        firstDisplayedParentNode.y0,
        settings
      );
    })
    .remove();

  nodeExit.select("rect").style("fill-opacity", 1e-6);
  nodeExit.select("circle").attr("r", 1e-6);
  nodeExit.select("text").style("fill-opacity", 1e-6);
};
