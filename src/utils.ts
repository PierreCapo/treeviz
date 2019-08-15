import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";

export const getAreaSize = (htmlId: string) => {
  const SVGContainer = document.querySelector(`#${htmlId}`);
  if (SVGContainer === null) {
    throw new Error(`Cannot find dom element with id:${htmlId}`);
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

type Result = ExtendedHierarchyPointNode & { x0: number; y0: number };

export const getFirstDisplayedAncestor = (
  ghostNodes: ExtendedHierarchyPointNode[],
  viewableNodes: ExtendedHierarchyPointNode[],
  id: string
): Result => {
  try {
    // @ts-ignore
    const parentNode: Result = ghostNodes.find(node => node.id === id);

    // @ts-ignore
    const parentNodeId: string = parentNode.ancestors()[1].id;
    const isPresentInOldNodes = viewableNodes.some(
      oldNode => oldNode.id === parentNodeId
    );

    if (isPresentInOldNodes) {
      return parentNode.ancestors()[1];
    } else {
      return getFirstDisplayedAncestor(ghostNodes, viewableNodes, parentNodeId);
    }
  } catch (e) {
    // @ts-ignore
    return ghostNodes.find(node => node.id === id);
  }
};

export const setNodeLocation = (
  xPosition: number,
  yPosition: number,
  settings: ITreeConfig
) => {
  if (settings.isHorizontal) {
    return "translate(" + yPosition + "," + xPosition + ")";
  } else {
    return "translate(" + xPosition + "," + yPosition + ")";
  }
};
