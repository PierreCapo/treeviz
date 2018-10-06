import * as d3 from "d3";
import { ITreeConfig } from "./typings";

export const prepareData = (data: any, treeConfig: ITreeConfig) => {
  const { nodeField, relationnalField, flatData } = treeConfig;
  const treemap = d3.tree().nodeSize([300, 500]);
  let root;
  if (!flatData) {
    root = d3.hierarchy(data, d => d[relationnalField]);
  } else {
    root = d3
      .stratify()
      .id((d: any) => d[nodeField])
      .parentId((d: any) => d[relationnalField])(data);
  }
  return [root, treemap];
};
