import { HierarchyNode } from "d3-hierarchy";
import d3 from "./d3";
import { ITreeConfig } from "./typings";
import { getAreaSize } from "./utils";

export const generateNestedData = (
  data: any,
  treeConfig: ITreeConfig
): HierarchyNode<any> => {
  const { idKey, relationnalField, hasFlatData } = treeConfig;
  return hasFlatData
    ? d3
        .stratify()
        .id((d: any) => d[idKey])
        .parentId((d: any) => d[relationnalField])(data)
    : d3.hierarchy(data, d => d[relationnalField]);
};

export const generateBasicTreemap = (treeConfig: ITreeConfig) => {
  const { areaHeight, areaWidth } = getAreaSize(treeConfig.htmlId);
  return treeConfig.mainAxisNodeSpacing === "auto" && treeConfig.isHorizontal
    ? d3
        .tree()
        .size([
          areaHeight - treeConfig.nodeHeight,
          areaWidth - treeConfig.nodeWidth,
        ])
    : treeConfig.mainAxisNodeSpacing === "auto" && !treeConfig.isHorizontal
    ? d3
        .tree()
        .size([
          areaWidth - treeConfig.nodeWidth,
          areaHeight - treeConfig.nodeHeight,
        ])
    : treeConfig.isHorizontal === true
    ? d3
        .tree()
        .nodeSize([
          treeConfig.nodeHeight * treeConfig.secondaryAxisNodeSpacing,
          treeConfig.nodeWidth,
        ])
    : d3
        .tree()
        .nodeSize([
          treeConfig.nodeWidth * treeConfig.secondaryAxisNodeSpacing,
          treeConfig.nodeHeight,
        ]);
};
