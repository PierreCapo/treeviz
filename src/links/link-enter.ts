import { HierarchyPointNode } from "d3-hierarchy";
import { BaseType, Selection } from "d3-selection";
import { ITreeConfig } from "../typings";
import { generateLinkLayout } from "./draw-links";

export const drawLinkEnter = (
  link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>,
  computedTree: HierarchyPointNode<{}>,
  settings: ITreeConfig
) =>
  link
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", (d: any) => {
      const o =
        typeof d.ancestors()[1] !== "undefined" &&
        typeof d.ancestors()[1].x0 !== "undefined"
          ? { x: d.ancestors()[1].x0, y: d.ancestors()[1].y0 }
          : { x: computedTree.x, y: computedTree.y };
      return generateLinkLayout(o, o, settings);
    })
    .attr("fill", "none")
    .attr("stroke-width", ({ data }: { data: any }) => settings.linkWidth(data))
    .attr("stroke", ({ data }: { data: any }) => settings.linkColor(data));
