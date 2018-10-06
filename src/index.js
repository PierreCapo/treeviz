import * as d3 from "d3";
import Emitter from "component-emitter";
import { templateSystem } from "./template-system.ts";
import { drawLinks } from "./draw-links.ts";
import { initiliazeSVG } from "./initializeSVG.ts";
import { prepareData } from "./prepare-data.ts";

export function create({
  htmlID,
  nodeField,
  relationnalField,
  flatData = true,
  areaWidth = 800,
  areaHeight = 450,
  nodeSettings = {
    width: 160,
    height: 100,
    depthDistance: 300,
    colorField: null,
    template: null,
  },
  linkSettings = {
    colorField: null,
    widthField: null,
    shape: "quadraticBeziers",
  },
  horizontalLayout = true,
  zoomBehavior = false,
} = {}) {
  const settings = {
    htmlID,
    nodeField,
    relationnalField,
    flatData,
    areaWidth,
    areaHeight,
    nodeSettings,
    linkSettings,
    horizontalLayout,
    zoomBehavior,
  };
  console.log(settings);
  function draw(svg, source, treemap) {
    let i = 0;
    let duration = 400;

    // Assigns the x and y position for the nodes
    var treeData = treemap(source);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    var linkScale = d3
      .scaleLinear()
      .domain([0, d3.max(nodes.map(el => el.data[linkSettings.widthField]))])
      .range([0, 50]);
    window.a = linkScale;
    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * nodeSettings.depthDistance;
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll("g.node").data(nodes, function(d) {
      return d[nodeField] || (d[nodeField] = ++i);
    });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        if (horizontalLayout) {
          return typeof d.ancestors()[1] != "undefined"
            ? "translate(" + d.ancestors()[1].y + "," + d.ancestors()[1].x + ")"
            : "translate(" + source.y0 + "," + source.x0 + ")";
        } else {
          return typeof d.ancestors()[1] != "undefined"
            ? "translate(" + d.ancestors()[1].x + "," + d.ancestors()[1].y + ")"
            : "translate(" + source.x0 + "," + source.y0 + ")";
        }
      });

    // Add squares for the nodes
    nodeEnter
      .append("rect")
      .attr("class", "node")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("width", nodeSettings.width)
      .attr("height", nodeSettings.height)
      .style("fill", d => {
        return d[nodeSettings.colorField] || "#2196F3";
      })
      .style("cursor", "pointer")
      .on("click", d => {
        obj.emit("nodeClick", d);
      });

    nodeEnter
      .append("foreignObject")
      .attr("width", nodeSettings.width)
      .attr("height", nodeSettings.height)
      .style("pointer-events", "none")
      .html(d =>
        templateSystem(
          Object.assign(
            {},
            d.data,
            { width: nodeSettings.width },
            { height: nodeSettings.height }
          ),
          nodeSettings.template
        )
      );

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(duration)
      .attr("transform", function(d) {
        return horizontalLayout
          ? "translate(" + d.y + "," + d.x + ")"
          : "translate(" + d.x + "," + d.y + ")";
      });

    // Remove any exiting nodes
    var nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", function(d) {
        return horizontalLayout
          ? "translate(" + d.ancestors()[1].y + "," + d.ancestors()[1].x + ")"
          : "translate(" + d.ancestors()[1].x + "," + d.ancestors()[1].y + ")";
      })
      .remove();

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
      .attr("d", function(d) {
        let o = horizontalLayout
          ? { x: d.ancestors()[1].x, y: d.ancestors()[1].y }
          : { x: d.ancestors()[1].y, y: d.ancestors()[1].x };
        return drawLinks(o, o, settings);
      })
      .attr("fill", "none")
      .attr(
        "stroke-width",
        d => linkScale(d.data[linkSettings.widthField]) || 10
      )
      .attr("stroke", d => {
        return d[linkSettings.colorField] || "#A1887F";
      });

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
      .attr("d", function(d) {
        let o = horizontalLayout
          ? { x: d.ancestors()[1].x, y: d.ancestors()[1].y }
          : { x: d.ancestors()[1].y, y: d.ancestors()[1].x };
        return drawLinks(o, o, drawLinks);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
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
