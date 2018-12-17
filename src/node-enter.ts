import { BaseType, Selection } from "d3";
import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";

export const placeNodeEnter = (
  node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>,
  settings: ITreeConfig
) => {
  return node
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d: any) => {
      return !d.ancestors()[1]
        ? setNodeLocation(d.x, d.y, settings)
        : d.ancestors()[1].y0
        ? setNodeLocation(d.ancestors()[1].x0, d.ancestors()[1].y0, settings)
        : setNodeLocation(d.ancestors()[1].x, d.ancestors()[1].y, settings);
    });
};

const setNodeLocation = (
  xPosition: number,
  yPosition: number,
  settings: ITreeConfig
) => {
  if (settings.horizontalLayout) {
    return "translate(" + yPosition + "," + xPosition + ")";
  } else {
    return "translate(" + xPosition + "," + yPosition + ")";
  }
};
