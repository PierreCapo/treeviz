import { HierarchyPointNode } from "d3-hierarchy";
import { BaseType, Selection } from "d3-selection";
import { ITreeConfig } from "../typings";
import { generateLinkLayout } from "./draw-links";

export const drawLinkExit = (
  link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>,
  settings: ITreeConfig
) => {
  const linkExit = link
    .exit()
    .transition()
    .duration(settings.duration)
    .attr("d", (d: any) => {
      const o = { x: d.ancestors()[1].x0, y: d.ancestors()[1].y0 };
      return generateLinkLayout(o, o, settings);
    })
    .remove();
  linkExit.select(".link").attr("stroke-opacity", 1e-6);
};
