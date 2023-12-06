import { HierarchyPointNode } from "d3-hierarchy";

type NodeData<T> = {
  data: T;
  settings: ITreeConfig<T>;
} & ExtendedHierarchyPointNode;

export interface ITreeConfig<T> {
  data: T[];
  htmlId: string;
  idKey: string;
  relationnalField: string;
  hasFlatData: boolean;
  nodeWidth: number;
  nodeHeight: number;
  mainAxisNodeSpacing: number | "auto";
  linkShape?: "quadraticBeziers" | "curve" | "orthogonal" | "";
  renderNode: (node: NodeData<T>) => string | null;
  linkColor: (node: NodeData<T>) => string;
  linkWidth: (node: NodeData<T>) => number;
  onNodeClick: (node: NodeData<T>) => void;
  onNodeMouseEnter: (node: NodeData<T>) => void;
  onNodeMouseLeave: (node: NodeData<T>) => void;
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
