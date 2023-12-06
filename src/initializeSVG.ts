import d3 from "./d3";
import { ITreeConfig } from "./typings";
import { getAreaSize } from "./utils";

export const initiliazeSVG = (treeConfig: ITreeConfig) => {
  const {
    htmlId,
    isHorizontal,
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
    .attr("height", areaHeight);

  // Create a G container and move it according to the Zoom Behavior attached to the main <svg> element
  const ZoomContainer = svg.append("g");
  const zoom = d3.zoom().on("zoom", (e) => {
    ZoomContainer.attr("transform", () => e.transform);
  });
  // @ts-ignore
  svg.call(zoom);

  if (!hasPan) {
    svg
      .on("mousedown.zoom", null)
      .on("touchstart.zoom", null)
      .on("touchmove.zoom", null)
      .on("touchend.zoom", null);
  }

  if (!hasZoom) {
    svg
      .on("wheel.zoom", null)
      .on("mousewheel.zoom", null)
      .on("mousemove.zoom", null)
      .on("DOMMouseScroll.zoom", null)
      .on("dblclick.zoom", null);
  }

  const MainG = ZoomContainer.append("g").attr(
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
