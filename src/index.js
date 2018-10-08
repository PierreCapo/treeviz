import * as d3 from "d3";
import Emitter from "component-emitter";
import { templateSystem } from "./template-system.ts";
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
    areaWidth: 800,
    areaHeight: 450,
    nodeSettings: {
      width: 160,
      height: 100,
      depthDistance: 300,
      colorField: null,
      template: null,
    },
    linkSettings: {
      colorField: null,
      widthField: null,
      shape: "quadraticBeziers",
    },
    horizontalLayout: true,
    zoomBehavior: false,
    duration: 400,
  };
  const settings = { ...defaultSettings, ...userSettings };
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
      .domain([
        0,
        d3.max(nodes.map(el => el.data[settings.linkSettings.widthField])),
      ])
      .range([0, 50]);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * settings.nodeSettings.depthDistance;
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
      .attr("width", settings.nodeSettings.width)
      .attr("height", settings.nodeSettings.height)
      .style("fill", d => {
        return d[settings.nodeSettings.colorField] || "#2196F3";
      })
      .style("cursor", "pointer")
      .on("click", d => {
        obj.emit("nodeClick", d);
      });

    nodeEnter
      .append("foreignObject")
      .attr("width", settings.nodeSettings.width)
      .attr("height", settings.nodeSettings.height)
      .style("pointer-events", "none")
      .html(d =>
        templateSystem(
          Object.assign(
            {},
            d.data,
            { width: settings.nodeSettings.width },
            { height: settings.nodeSettings.height }
          ),
          settings.nodeSettings.template
        )
      );

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
        let o = settings.horizontalLayout
          ? { x: d.ancestors()[1].x, y: d.ancestors()[1].y }
          : { x: d.ancestors()[1].y, y: d.ancestors()[1].x };
        return drawLinks(o, o, settings);
      })
      .attr("fill", "none")
      .attr(
        "stroke-width",
        d => linkScale(d.data[settings.linkSettings.widthField]) || 10
      )
      .attr("stroke", d => {
        return d[settings.linkSettings.colorField] || "#A1887F";
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
        let o = settings.horizontalLayout
          ? { x: d.ancestors()[1].x, y: d.ancestors()[1].y }
          : { x: d.ancestors()[1].y, y: d.ancestors()[1].x };
        return drawLinks(o, o, settings);
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
