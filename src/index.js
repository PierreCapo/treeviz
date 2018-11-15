import * as d3 from "d3";
import Emitter from "component-emitter";
import { drawLinks } from "./draw-links.ts";
import { initiliazeSVG } from "./initializeSVG.ts";
import { prepareData } from "./prepare-data.ts";
import { placeEnter } from "./node-enter.ts";
import { placeExit } from "./node-exit.ts";

export function create(userSettings) {
  const defaultSettings = {
    htmlID: "",
    nodeField: "",
    relationnalField: "",
    flatData: true,
    nodeWidth: 160,
    nodeHeight: 100,
    nodeDepthDistance: 300,
    nodeColor: null,
    nodeTemplate: null,
    linkColor: null,
    linkWidth: null,
    linkShape: "quadraticBeziers",
    horizontalLayout: true,
    zoomBehavior: false,
    duration: 400,
  };
  const settings = { ...defaultSettings, ...userSettings };
  var oldPosition = [];
  function draw(svg, source, treemap) {
    let i = 0;
    let duration = 400;

    // Assigns the x and y position for the nodes
    var treeData = treemap(source);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * settings.nodeDepthDistance;
    });

    oldPosition.forEach((d, index) => {
      try {
        nodes[index].x0 = d.x0;
        nodes[index].y0 = d.y0;
      } catch (e) {
        return;
      }
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll("g.node").data(nodes, function(d) {
      return d[settings.nodeField] || (d[settings.nodeField] = ++i);
    });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = placeEnter(node, source, settings);

    // Add squares for the nodes
    nodeEnter
      .append("rect")
      .attr("class", "node")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("width", settings.nodeWidth)
      .attr("height", settings.nodeHeight)
      .style("fill", ({ data }) => settings.nodeColor(data))
      .style("cursor", "pointer")
      .on("click", d => {
        obj.emit("nodeClick", d);
      });

    nodeEnter
      .append("foreignObject")
      .attr("width", settings.nodeWidth)
      .attr("height", settings.nodeHeight)
      .style("pointer-events", "none")
      .html(({data})=> settings.nodeTemplate(data));// settings.nodeTemplate(data));

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(duration)
      .attr("transform", function(d) {
        return settings.horizontalLayout
          ? "translate(" + d.y + "," + d.x + ")"
          : "translate(" + d.x + "," + d.y + ")";
      });

    // Remove any exiting nodes
    var nodeExit = placeExit(node, settings);

    nodeExit.select("rect").style("fill-opacity", 1e-6);

    // On exit reduce the node circles size to 0
    nodeExit.select("circle").attr("r", 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select("text").style("fill-opacity", 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll("path.link").data(links, function(d) {
      return d.id;
    });

    // Enter any new links at the parent's previous position.
    var linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", d => {
        let o =
          typeof d.ancestors()[1] !== "undefined" &&
          typeof d.ancestors()[1].x0 !== "undefined"
            ? { x: d.ancestors()[1].x0, y: d.ancestors()[1].y0 }
            : { x: source.x, y: source.y };
        return drawLinks(o, o, settings);
      })
      .attr("fill", "none")
      .attr("stroke-width", ({ data }) => settings.linkWidth(data))
      .attr("stroke", ({ data }) => settings.linkColor(data));

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", function(d) {
        return drawLinks(d, d.parent, settings);
      });

    // Remove any exiting links
    var linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", d => {
        let o = { x: d.ancestors()[1].x0, y: d.ancestors()[1].y0 };
        return drawLinks(o, o, settings);
      })
      .remove();
    linkExit.select(".link").attr("stroke-opacity", 1e-6);

    // Store the old positions for transition.

    nodes.forEach(function(d, index) {
      oldPosition[index] = { x0: d.x, y0: d.y };
    });
  }

  function refresh(data) {
    var [data, treemap] = prepareData(data, settings);
    draw(svg, data, treemap);
  }

  var obj = { refresh: refresh };
  Emitter(obj);

  let svg = initiliazeSVG(settings);
  return obj;
}
