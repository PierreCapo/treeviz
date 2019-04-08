import { HierarchyPointNode } from "d3-hierarchy";
import { Selection } from "d3-selection";
import { initiliazeSVG } from "./initializeSVG";
import { drawLinkEnter } from "./links/link-enter";
import { drawLinkExit } from "./links/link-exit";
import { drawLinkUpdate } from "./links/link-update";
import { drawNodeEnter } from "./nodes/node-enter";
import { drawNodeExit } from "./nodes/node-exit";
import { drawNodeUpdate } from "./nodes/node-update";
import { generateBasicTreemap, generateNestedData } from "./prepare-data";
import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";
import { edit, editLinks } from "./utils";

export function create(userSettings: Partial<ITreeConfig>) {
  const defaultSettings: ITreeConfig = {
    htmlID: "",
    nodeField: "",
    relationnalField: "",
    flatData: true,
    nodeWidth: 160,
    nodeHeight: 100,
    nodeDepthDistance: 300,
    nodeColor: () => "#2196f3",
    nodeTemplate: () => "Node",
    linkColor: () => "#ffcc80",
    linkWidth: () => 10,
    linkShape: "quadraticBeziers",
    horizontalLayout: true,
    zoomBehavior: false,
    duration: 400,
    onNodeClick: () => undefined,
    onNodeMouseEnter: () => undefined,
    onNodeMouseLeave: () => undefined,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    nodeSpacerPercentage: 1.25,
  };
  const settings: ITreeConfig = { ...defaultSettings, ...userSettings };
  let oldPosition: Array<{ x0?: number; y0?: number; id?: string }> = [];

  function draw(
    svg: Selection<SVGGElement, {}, HTMLElement, any>,
    computedTree: HierarchyPointNode<{}>
  ) {
    const nodes = computedTree.descendants() as ExtendedHierarchyPointNode[];
    const links = computedTree.descendants().slice(1);
    edit(settings, nodes);
    editLinks(settings, links);

    nodes.forEach((currentNode: ExtendedHierarchyPointNode) => {
      currentNode.x0 = {
        ...currentNode,
        x0: undefined,
        y0: undefined,
        // @ts-ignore
        ...oldPosition.filter(oldNode => oldNode.id === currentNode.id)[0],
      }.x0;
      currentNode.y0 = {
        ...currentNode,
        x0: undefined,
        y0: undefined,
        // @ts-ignore
        ...oldPosition.filter(oldNode => oldNode.id === currentNode.id)[0],
      }.y0;
    });

    // ****************** Nodes section ***************************
    const node = svg.selectAll("g.node").data(nodes, (d: any) => {
      return d[settings.nodeField];
    });

    const nodeEnter = drawNodeEnter(node, settings);
    drawNodeUpdate(nodeEnter, node, settings);
    drawNodeExit(node, settings);

    // ****************** links section ***************************

    const link = svg.selectAll("path.link").data(links, (d: any) => {
      return d.id;
    });

    const linkEnter = drawLinkEnter(link, computedTree, settings);
    drawLinkUpdate(linkEnter, link, settings);
    drawLinkExit(link, settings);

    nodes.forEach((d: any, index: any) => {
      oldPosition[index] = { x0: d.x, y0: d.y, id: d.id };
    });
  }

  function refresh(data: any) {
    const nestedData = generateNestedData(data, settings);
    const treemap = generateBasicTreemap(settings);
    const computedTree = treemap(nestedData); // mutation
    draw(svg, computedTree);
  }

  function clean(keepConfig: boolean) {
    const myNode = keepConfig
      ? document.querySelector(`#${settings.htmlID} svg g`)
      : document.querySelector(`#${settings.htmlID}`);
    if (myNode) {
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
    }
    oldPosition = [];
  }

  const treeObject = { refresh, clean };

  const svg = initiliazeSVG(settings);
  return treeObject;
}
