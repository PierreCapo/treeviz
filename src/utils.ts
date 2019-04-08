import { HierarchyPointNode } from "d3-hierarchy";
import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";

export const getAreaSize = (htmlID: string) => {
  const SVGContainer = document.querySelector(`#${htmlID}`);
  if (SVGContainer === null) {
    throw new Error(`Cannot find dom element with id:${htmlID}`);
  }
  const areaWidth = SVGContainer.clientWidth;
  const areaHeight = SVGContainer.clientHeight;
  if (areaHeight === 0 || areaWidth === 0) {
    throw new Error(
      "The tree can't be display because the svg height or width of the container is null"
    );
  }
  return { areaWidth, areaHeight };
};

export const edit = (
  settings: ITreeConfig,
  nodes: ExtendedHierarchyPointNode[]
) => {
  const { nodeDepthDistance, nodeHeight, nodeWidth, htmlID } = settings;
  const { areaWidth, areaHeight } = getAreaSize(htmlID);
  // @ts-ignore
  const [areaValue, nodeValue] = settings.horizontalLayout
    ? [areaWidth, nodeWidth]
    : [areaHeight, nodeHeight];
  if (nodeDepthDistance !== "auto") {
    nodes.forEach((node: ExtendedHierarchyPointNode) => {
      settings.reverseOrientation
        ? (node.y = areaValue - node.depth * nodeDepthDistance)
        : (node.y = node.depth * nodeDepthDistance);
    });
  } else {
    nodes.forEach((node: ExtendedHierarchyPointNode) => {
      settings.reverseOrientation
        ? (node.y = areaValue - node.y)
        : (node.y = node.y);
    });
  }
};

export const editLinks = (
  settings: ITreeConfig,
  links: Array<HierarchyPointNode<{}>>
) => {
  if (settings.reverseOrientation) {
    links.forEach(link => {
      settings.horizontalLayout
        ? (link.y = link.y - settings.nodeWidth)
        : (link.x = link.x - settings.nodeHeight);
    });
  }
};
