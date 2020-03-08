import * as React from "react";
import * as Treeviz from "treeviz";
import { ExtendedHierarchyPointNode } from "treeviz/dist/typescript/typings";

type NodeType = ExtendedHierarchyPointNode & {
  x0: number;
  y0: number;
  settings: { nodeWidth: number; nodeHeight: number; duration: number };
};

interface ITreeConfig {
  data: any[];
  idKey: string;
  relationnalField: string;
  hasFlatData: boolean;
  nodeWidth: number;
  nodeHeight: number;
  mainAxisNodeSpacing: number | "auto";
  secondaryAxisNodeSpacing: number;
  renderNode: (node: NodeType) => string | null;
  nodeColor: (node: NodeType) => string;
  linkShape: "orthogonal" | "quadraticBeziers" | "curve" | "";
  linkColor: (node: NodeType) => string;
  linkWidth: (node: NodeType) => number;
  onNodeClick: (node: NodeType) => void;
  onNodeMouseEnter: (node: NodeType) => void;
  onNodeMouseLeave: (node: NodeType) => void;
  isHorizontal: boolean;
  hasPanAndZoom: boolean;
  hasPan?: boolean;
  hasZoom?: boolean;
  duration: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  areaHeight: number;
  areaWidth: number;
}

export class TreevizReact extends React.Component<Partial<ITreeConfig>> {
  static defaultProps = {
    nodeWidth: 80,
    nodeHeight: 120,
    mainAxisNodeSpacing: 1.3,
    renderNode: () => "",
    onNodeClick: () => undefined,
    onNodeMouseEnter: () => undefined,
    onNodeMouseLeave: () => undefined,
    duration: 700,
    isHorizontal: true,
    hasFlatData: true,
    secondaryAxisNodeSpacing: 1.25,
    hasPanAndZoom: true,
    relationnalField: "father",
    linkWidth: () => 3,
    linkShape: "orthogonal",
    linkColor: () => "#dddddd",
    idKey: "id",
    areaHeight: 500,
    areaWidth: 800
  };
  state = {
    id: "tree" + Math.floor(Math.random() * 1000000)
  };
  componentDidMount() {
    const {} = this.props;
    // @ts-ignore
    this.treeviz = Treeviz.create({
      // @ts-ignore
      htmlId: this.state.id,
      ...this.props
    });
    // @ts-ignore
    this.treeviz.refresh(this.props.data);
  }
  componentDidUpdate() {
    // @ts-ignore

    this.treeviz.refresh(this.props.data, this.props);
  }
  render() {
    return (
      <div
        id={this.state.id}
        style={{ width: this.props.areaWidth, height: this.props.areaHeight }}
      />
    );
  }
}
