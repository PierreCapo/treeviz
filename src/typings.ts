import { HierarchyPointNode } from "d3-hierarchy";

export interface ITreeConfig {
  htmlId: string;
  idKey: string;
  relationnalField: string;
  hasFlatData: boolean;
  nodeWidth: number;
  nodeHeight: number;
  mainAxisNodeSpacing: number | "auto";
  renderNode: (node: any) => string | null;
  linkShape?: "quadraticBeziers" | "curve" | "orthogonal" | "";
  linkColor: (node: any) => string;
  linkWidth: (node: any) => number;
  onNodeClick: (node: any) => void;
  onNodeMouseEnter: (node: any) => void;
  onNodeMouseLeave: (node: any) => void;
  isHorizontal: boolean;
  hasPan: boolean;
  hasZoom: boolean;
  duration: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  secondaryAxisNodeSpacing: number;
}

export interface ExtendedHierarchyPointNode extends HierarchyPointNode<{}> {
  x0?: number;
  y0?: number;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16176#issuecomment-348095843
import { select as d3Select } from "d3-selection";
import { transition as d3Transition } from "d3-transition";
d3Select.prototype.transition = d3Transition;
