import * as d3 from "d3";
import { HierarchyNode } from "d3-hierarchy";
import { ITreeConfig } from "./typings";
import { getAreaSize } from "./utils";

export const generateNestedData = (
  data: any,
  treeConfig: ITreeConfig
): HierarchyNode<any> => {
  const { nodeField, relationnalField, flatData } = treeConfig;
  return flatData
    ? d3
        .stratify()
        .id((d: any) => d[nodeField])
        .parentId((d: any) => d[relationnalField])(data)
    : d3.hierarchy(data, d => d[relationnalField]);
};

export const generateBasicTreemap = (treeConfig: ITreeConfig) => {
  const { areaHeight, areaWidth } = getAreaSize(treeConfig.htmlID);
  return treeConfig.nodeDepthDistance === "auto" && treeConfig.horizontalLayout
    ? d3
        .tree()
        .size([
          areaHeight - treeConfig.nodeHeight,
          areaWidth - treeConfig.nodeWidth,
        ])
    : treeConfig.nodeDepthDistance === "auto" && !treeConfig.horizontalLayout
    ? d3
        .tree()
        .size([
          areaWidth - treeConfig.nodeWidth,
          areaHeight - treeConfig.nodeHeight,
        ])
    : treeConfig.horizontalLayout === true
    ? d3
        .tree()
        .nodeSize([
          treeConfig.nodeHeight * treeConfig.nodeSpacerPercentage,
          treeConfig.nodeWidth,
        ])
    : d3
        .tree()
        .nodeSize([
          treeConfig.nodeWidth * treeConfig.nodeSpacerPercentage,
          treeConfig.nodeHeight,
        ]);
};
