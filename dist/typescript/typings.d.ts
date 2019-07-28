import { HierarchyPointNode } from "d3-hierarchy";
export interface ITreeConfig {
    htmlID: string;
    nodeField: string;
    relationnalField: string;
    hasFlatData: boolean;
    nodeWidth: number;
    nodeHeight: number;
    mainAxisNodeSpacing: number | "auto";
    renderNode: (node: any) => string | null;
    linkShape: string;
    linkColor: (node: any) => string;
    linkWidth: (node: any) => number;
    onNodeClick: (node: any) => void;
    onNodeMouseEnter: (node: any) => void;
    onNodeMouseLeave: (node: any) => void;
    isHorizontal: boolean;
    hasPanAndZoom: boolean;
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
