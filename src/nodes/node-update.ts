import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";

export const drawNodeUpdate = (
  nodeEnter: Selection<
    SVGGElement,
    ExtendedHierarchyPointNode,
    SVGGElement,
    {}
  >,
  node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>,
  settings: ITreeConfig
) => {
  // @ts-ignore
  const nodeUpdate = nodeEnter.merge(node);

  nodeUpdate
    .transition()
    .duration(settings.duration)
    .attr("transform", (d: any) => {
      return settings.horizontalLayout
        ? "translate(" + d.y + "," + d.x + ")"
        : "translate(" + d.x + "," + d.y + ")";
    });
};
