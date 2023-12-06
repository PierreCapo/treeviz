import { HierarchyPointNode } from "d3-hierarchy";
import { Selection } from "d3-selection";
import { ITreeConfig } from "../typings";
import { generateLinkLayout } from "./draw-links";

export const drawLinkUpdate = (
  linkEnter: Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>,
  link: Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>,
  settings: ITreeConfig
) => {
  const linkUpdate = linkEnter.merge(link);

  linkUpdate
    //@ts-ignore
    .transition()
    .duration(settings.duration)
    .attr("d", (d: any) => {
      return generateLinkLayout(d, d.parent, settings);
    })
    .attr("fill", "none")
    .attr("stroke-width", ({ data }: { data: any }) =>
      settings.linkWidth({ data, settings })
    )
    .attr("stroke", ({ data }: { data: any }) =>
      settings.linkColor({ data, settings })
    );
};
