import { HierarchyPointNode } from "d3-hierarchy";
import { BaseType, Selection } from "d3-selection";
import { ITreeConfig } from "../typings";
import { generateLinkLayout } from "./draw-links";

export const drawLinkUpdate = (
  linkEnter: Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>,
  link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>,
  settings: ITreeConfig
) => {
  // @ts-ignore
  const linkUpdate = linkEnter.merge(link);

  linkUpdate
    .transition()
    .duration(settings.duration)
    .attr("d", (d: any) => {
      return generateLinkLayout(d, d.parent, settings);
    });
};
