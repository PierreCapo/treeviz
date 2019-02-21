import { HierarchyPointNode, Selection } from "d3";
import { drawLinks } from "./draw-links";
import { initiliazeSVG } from "./initializeSVG";
import { placeLinkEnter } from "./link-enter";
import { placeNodeEnter } from "./node-enter";
import { placeExit } from "./node-exit";
import { generateBasicTreemap, generateNestedData } from "./prepare-data";
import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";

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
    const duration = 400;
    const nodes = computedTree.descendants() as ExtendedHierarchyPointNode[];
    const links = computedTree.descendants().slice(1);

    const { nodeDepthDistance } = settings;
    if (nodeDepthDistance !== "auto") {
      // Normalize for fixed-depth.
      nodes.forEach((d: any) => {
        d.y = d.depth * nodeDepthDistance;
      });
    }

    nodes.forEach((el: ExtendedHierarchyPointNode) => {
      el.x0 = {
        ...el,
        x0: undefined,
        y0: undefined,
        ...oldPosition.filter(toto => toto.id === el.id)[0],
      }.x0;
      el.y0 = {
        ...el,
        x0: undefined,
        y0: undefined,
        ...oldPosition.filter(toto => toto.id === el.id)[0],
      }.y0;
    });

    // ****************** Nodes section ***************************
    const node = svg.selectAll("g.node").data(nodes, (d: any) => {
      return d[settings.nodeField];
    });

    const nodeEnter = placeNodeEnter(node, settings);

    nodeEnter
      .append("rect")
      .attr("class", "node")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("width", settings.nodeWidth)
      .attr("height", settings.nodeHeight)
      .style("fill", ({ data }: { data: any }) => settings.nodeColor(data))
      .style("cursor", "pointer")
      .on("click", settings.onNodeClick)
      .on("mouseenter", settings.onNodeMouseEnter)
      .on("mouseleave", settings.onNodeMouseLeave);

    nodeEnter
      .append("foreignObject")
      .attr("width", settings.nodeWidth)
      .attr("height", settings.nodeHeight)
      .style("pointer-events", "none")
      .html(({ data }: { data: any }) => settings.nodeTemplate(data)); // settings.nodeTemplate(data));

    // @ts-ignore
    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate
      .transition()
      .duration(duration)
      .attr("transform", (d: any) => {
        return settings.horizontalLayout
          ? "translate(" + d.y + "," + d.x + ")"
          : "translate(" + d.x + "," + d.y + ")";
      });

    const nodeExit = placeExit(node, settings);
    nodeExit.select("rect").style("fill-opacity", 1e-6);
    nodeExit.select("circle").attr("r", 1e-6);
    nodeExit.select("text").style("fill-opacity", 1e-6);

    // ****************** links section ***************************

    const link = svg.selectAll("path.link").data(links, (d: any) => {
      return d.id;
    });

    const linkEnter = placeLinkEnter(link, computedTree, settings);

    // @ts-ignore
    const linkUpdate = linkEnter.merge(link);

    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", (d: any) => {
        return drawLinks(d, d.parent, settings);
      });

    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", (d: any) => {
        const o = { x: d.ancestors()[1].x0, y: d.ancestors()[1].y0 };
        return drawLinks(o, o, settings);
      })
      .remove();
    linkExit.select(".link").attr("stroke-opacity", 1e-6);

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

  const obj = { refresh, clean };

  const svg = initiliazeSVG(settings);
  return obj;
}
