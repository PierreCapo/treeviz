import { HierarchyPointNode } from "d3-hierarchy";
import { BaseType, Selection } from "d3-selection";
import { ITreeConfig, ExtendedHierarchyPointNode } from "../typings";
import { generateLinkLayout } from "./draw-links";
import { getFirstDisplayedAncestor } from "../utils";

export const drawLinkExit = (
  link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>,
  settings: ITreeConfig,
  nodes: ExtendedHierarchyPointNode[],
  oldNodes:ExtendedHierarchyPointNode[],
) => {
  link
    .exit()
    .transition()
    .duration(settings.duration)
    .style("opacity", 0)
    .attr("d", (d: any) => {
      const firstDisplayedParentNode = getFirstDisplayedAncestor(oldNodes, nodes, d.id)
      const o = {x: firstDisplayedParentNode.x0, y: firstDisplayedParentNode.y0};
      return generateLinkLayout(o, o, settings);
    })
    .remove();
};
