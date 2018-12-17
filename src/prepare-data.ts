import * as d3 from "d3";
import { HierarchyNode } from "d3";
import { ITreeConfig } from "./typings";

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

export const generateBasicTreemap = (treeConfig: ITreeConfig) =>
  d3
    .tree()
    .nodeSize([treeConfig.nodeHeight * 1.25, treeConfig.nodeWidth * 1.5]);
