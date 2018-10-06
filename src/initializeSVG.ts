import * as d3 from "d3";
import { ITreeConfig } from "./typings";

export const initiliazeSVG = (treeConfig: ITreeConfig) => {
  const {
    areaHeight,
    areaWidth,
    htmlID,
    horizontalLayout,
    zoomBehavior,
  } = treeConfig;
  const margin = { top: 20, right: 90, bottom: 30, left: 90 };
  const width = areaWidth - margin.left - margin.right;
  const height = areaHeight - margin.top - margin.bottom;

  const zoom = d3
    .zoom()
    .scaleExtent([0.2, 20])
    .on("zoom", () => {
      svg.attr("transform", () => {
        return horizontalLayout
          ? "translate(" +
              (margin.left + d3.event.transform.x) +
              "," +
              (margin.top + height / 2 + d3.event.transform.y) +
              ")" +
              "scale(" +
              d3.event.transform.k +
              ")"
          : "translate(" +
              (margin.left + width / 2 + d3.event.transform.x) +
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
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    // @ts-ignore type issue with d3 library
    .call(zoomBehavior ? zoom : null)
    .append("g")
    .attr(
      "transform",
      horizontalLayout
        ? "translate(" + margin.left + "," + (margin.top + height / 2) + ")"
        : "translate(" + (margin.left + width / 2) + "," + margin.top + ")"
    );
  return svg;
};
