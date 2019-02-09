import * as d3 from "d3";
import { getAreaSize } from "./services";
import { ITreeConfig } from "./typings";

export const initiliazeSVG = (treeConfig: ITreeConfig) => {
  const {
    htmlID,
    horizontalLayout,
    zoomBehavior,
    nodeDepthDistance,
    nodeHeight,
    nodeWidth,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  } = treeConfig;
  const margin = {
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
  };
  const { areaHeight, areaWidth } = getAreaSize(treeConfig.htmlID);
  const width = areaWidth - margin.left - margin.right;
  const height = areaHeight - margin.top - margin.bottom;

  const zoom = d3
    .zoom()
    .scaleExtent([0.2, 20])
    .on("zoom", () => {
      svg.attr("transform", () => {
        return nodeDepthDistance === "auto"
          ? "translate(" +
              (margin.left + d3.event.transform.x) +
              "," +
              (margin.top + d3.event.transform.y) +
              ")" +
              "scale(" +
              d3.event.transform.k +
              ")"
          : horizontalLayout
          ? "translate(" +
            (margin.left + d3.event.transform.x) +
            "," +
            (margin.top + height / 2 - nodeHeight / 2 + d3.event.transform.y) +
            ")" +
            "scale(" +
            d3.event.transform.k +
            ")"
          : "translate(" +
            (margin.left + width / 2 - nodeWidth / 2 + d3.event.transform.x) +
            "," +
            (margin.top + d3.event.transform.y) +
            ")" +
            "scale(" +
            d3.event.transform.k +
            ")";
      });
    });

  const svg = d3
    .select("#" + htmlID)
    .append("svg")
    .attr("width", areaWidth)
    .attr("height", areaHeight)
    // @ts-ignore
    .call(zoomBehavior ? zoom : () => this)
    .append("g")
    .attr(
      "transform",
      nodeDepthDistance === "auto"
        ? "translate(0,0)"
        : horizontalLayout
        ? "translate(" +
          margin.left +
          "," +
          (margin.top + height / 2 - nodeHeight / 2) +
          ")"
        : "translate(" +
          (margin.left + width / 2 - nodeWidth / 2) +
          "," +
          margin.top +
          ")"
    );
  return svg;
};
