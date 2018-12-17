import { HierarchyPointNode } from "d3";

export interface ITreeConfig {
  htmlID: string;
  nodeField: string;
  relationnalField: string;
  flatData: boolean;
  nodeWidth: number;
  nodeHeight: number;
  nodeDepthDistance: number;
  nodeTemplate: (node: any) => string | null;
  nodeColor: (node: any) => string | null | number | boolean;
  linkShape: string;
  linkColor: (node: any) => string | null | boolean;
  linkWidth: (node: any) => string | null | boolean;
  onNodeClick: (node: any) => undefined;
  onNodeMouseEnter: (node: any) => undefined;
  onNodeMouseLeave: (node: any) => undefined;
  horizontalLayout: boolean;
  zoomBehavior: boolean;
  duration: number;
}

export interface ExtendedHierarchyPointNode extends HierarchyPointNode<{}> {
  x0?: number;
  y0?: number;
}
