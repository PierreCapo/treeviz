import { BaseType, Selection } from "d3-selection";
import { ExtendedHierarchyPointNode, ITreeConfig } from "../typings";

export const drawNodeEnter = (
  node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>,
  settings: ITreeConfig
) => {
  const nodeEnter = node
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

  nodeEnter
    .append("rect")
    .attr("class", "node")
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("width", settings.nodeWidth)
    .attr("height", settings.nodeHeight)
    // @ts-ignore
    .style("fill", ({ data }: { data: any }) => settings.nodeColor(data))
    .style("cursor", "pointer")
    .on("click", settings.onNodeClick)
    .on("mouseenter", settings.onNodeMouseEnter)
    .on("mouseleave", settings.onNodeMouseLeave);

  nodeEnter
    .append("foreignObject")
    .attr("width", settings.nodeWidth)
    .attr("height", settings.nodeHeight)
    .style("pointer-events", "none")
    // @ts-ignore
    .html(({ data }: { data: any }) => settings.nodeTemplate(data));

  return nodeEnter;
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
