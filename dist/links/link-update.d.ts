import { HierarchyPointNode } from "d3-hierarchy";
import { Selection } from "d3-selection";
import { ITreeConfig } from "../typings";
export declare const drawLinkUpdate: (linkEnter: Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>, link: Selection<SVGPathElement, HierarchyPointNode<{}>, SVGGElement, {}>, settings: ITreeConfig) => void;
