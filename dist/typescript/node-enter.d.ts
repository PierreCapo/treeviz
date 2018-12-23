import { BaseType, Selection } from "d3";
import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";
export declare const placeNodeEnter: (node: Selection<BaseType, ExtendedHierarchyPointNode, SVGGElement, {}>, settings: ITreeConfig) => Selection<SVGGElement, ExtendedHierarchyPointNode, SVGGElement, {}>;
