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
    hasPan,
    hasZoom,
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

  const svg = d3
    .select("#" + htmlId)
    .append("svg")
    .attr("width", areaWidth)
    .attr("height", areaHeight)
    .call(
      // @ts-ignore
      customD3
        .zoom()
        .on("zoom", () => ZoomG.attr("transform", d3.event.transform))
    );
  const [allowHasPan, allowHasZoom] = getHasPanAndZoom(
    hasPanAndZoom,
    hasPan,
    hasZoom
  );

  if (!allowHasPan) {
    svg
      .on("mousedown.zoom", null)
      .on("touchstart.zoom", null)
      .on("touchmove.zoom", null)
      .on("touchend.zoom", null);
  }

  if (!allowHasZoom) {
    svg
      .on("wheel.zoom", null)
      .on("mousewheel.zoom", null)
      .on("mousemove.zoom", null)
      .on("DOMMouseScroll.zoom", null)
      .on("dblclick.zoom", null);
  }

  const ZoomG = svg.append("g");
  const MainG = ZoomG.append("g").attr(
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
  return MainG;
};

const getHasPanAndZoom = (
  hasPanAndZoom?: boolean,
  hasPan?: boolean,
  hasZoom?: boolean
): [boolean, boolean] => {
  let hasPanAndZoomResult: [boolean, boolean] = [false, false];
  if (hasPanAndZoom === true || hasPanAndZoom === false) {
    hasPanAndZoomResult = [hasPanAndZoom, hasPanAndZoom];
  }
  if (hasPan === true || hasPan === false) hasPanAndZoomResult[0] = hasPan;
  if (hasZoom === true || hasZoom === false) hasPanAndZoomResult[1] = hasZoom;
  return hasPanAndZoomResult;
};
