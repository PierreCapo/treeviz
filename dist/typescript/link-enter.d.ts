import { BaseType, HierarchyPointNode, Selection } from "d3";
import { ITreeConfig } from "./typings";
export declare const placeLinkEnter: (link: Selection<BaseType, HierarchyPointNode<{}>, SVGGElement, {}>, computedTree: HierarchyPointNode<{}>, settings: ITreeConfig) => Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>;
