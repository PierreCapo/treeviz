import * as d3 from "d3";
import { ITreeConfig } from "./typings";
export declare const generateNestedData: (data: any, treeConfig: ITreeConfig) => d3.HierarchyNode<any>;
export declare const generateBasicTreemap: (treeConfig: ITreeConfig) => d3.TreeLayout<{}>;
