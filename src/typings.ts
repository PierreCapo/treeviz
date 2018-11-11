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
  nodeTemplate: string;
  nodeColor: () => string;
  linkShape: string;
  linkColor: () => string;
  linkWidth: () => string;
  horizontalLayout: boolean;
  zoomBehavior: boolean;
  duration: number;
}
