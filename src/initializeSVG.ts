import * as d3 from "d3";
import { ITreeConfig } from "./typings";

export const initiliazeSVG = (treeConfig: ITreeConfig) => {
  const { htmlID, horizontalLayout, zoomBehavior } = treeConfig;
  const margin = { top: 20, right: 90, bottom: 30, left: 90 };
  if (document.querySelector(`#${htmlID}`) === null) {
    throw new Error("Unable to find the html id element");
  }
  // @ts-ignore
  const areaWidth = document.querySelector(`#${htmlID}`).clientWidth;
  // @ts-ignore
  const areaHeight = document.querySelector(`#${htmlID}`).clientHeight;
  if (areaHeight === 0 || areaWidth === 0) {
    throw new Error(
      "The tree can't be display because the svg height or width of the container is null"
    );
  }
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
