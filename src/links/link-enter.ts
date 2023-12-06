import { HierarchyPointNode } from "d3-hierarchy";
import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";
import { getFirstDisplayedAncestor } from "../utils";
import { generateLinkLayout } from "./draw-links";

export const drawLinkEnter = (
  link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>,
  settings: ITreeConfig,
  nodes: ExtendedHierarchyPointNode[],
  oldNodes: ExtendedHierarchyPointNode[]
) =>
  link
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", (d: any) => {
      const firstDisplayedParentNode = getFirstDisplayedAncestor(
        nodes,
        oldNodes,
        d.id
      );
      const o = {
        x: firstDisplayedParentNode.x0,
        y: firstDisplayedParentNode.y0,
      };
      return generateLinkLayout(o, o, settings);
    })
    .attr("fill", "none")
    .attr("stroke-width", ({ data }: { data: any }) =>
      settings.linkWidth({ data, settings })
    )
    .attr("stroke", ({ data }: { data: any }) =>
      settings.linkColor({ data, settings })
    );
