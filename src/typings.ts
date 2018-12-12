export interface ITreeConfig {
  htmlID: string;
  nodeField: string;
  relationnalField: string;
  flatData: boolean;
  areaWidth: number;
  areaHeight: number;
  nodeWidth: number;
  nodeHeight: number;
  nodeDepthDistance: number;
  nodeTemplate: (node: any) => string;
  nodeColor: (node: any) => string;
  linkShape: string;
  linkColor: (node: any) => string;
  linkWidth: (node: any) => string;
  onNodeClick: (node: any) => null;
  onNodeMouseEnter: (node: any) => null;
  onNodeMouseLeave: (node: any) => null;
  horizontalLayout: boolean;
  zoomBehavior: boolean;
  duration: number;
}
