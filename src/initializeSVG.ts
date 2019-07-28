// Got to import d3 two times because of an issue with Webpack/Babel with d3.event
import * as d3 from "d3-selection";
import customD3 from "./d3";
import { ITreeConfig } from "./typings";
import { getAreaSize } from "./utils";

export const initiliazeSVG = (treeConfig: ITreeConfig) => {
  const {
    htmlId,
    isHorizontal,
    hasPanAndZoom,
    mainAxisNodeSpacing,
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
  const { areaHeight, areaWidth } = getAreaSize(treeConfig.htmlId);
  const width = areaWidth - margin.left - margin.right;
  const height = areaHeight - margin.top - margin.bottom;

  const zoom = customD3
    .zoom()
    .scaleExtent([0.2, 20])
    .on("zoom", () => {
      svg.attr("transform", () => {
        return mainAxisNodeSpacing === "auto"
          ? "translate(" +
              (margin.left + d3.event.transform.x) +
              "," +
              (margin.top + d3.event.transform.y) +
              ")" +
              "scale(" +
              d3.event.transform.k +
              ")"
          : isHorizontal
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
    .select("#" + htmlId)
    .append("svg")
    .attr("width", areaWidth)
    .attr("height", areaHeight)
    // @ts-ignore
    .call(hasPanAndZoom ? zoom : () => this)
    .append("g")
    .attr(
      "transform",
      mainAxisNodeSpacing === "auto"
        ? "translate(0,0)"
        : isHorizontal
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
