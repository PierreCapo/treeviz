import Emitter from "component-emitter";
import * as d3 from "d3";
import { drawLinks } from "./draw-links";
import { initiliazeSVG } from "./initializeSVG";
import { prepareData } from "./prepare-data";
import { templateSystem } from "./template-system";

export const create = ({
  htmlID = "",
  nodeField = "",
  relationnalField = "",
  flatData = true,
  areaWidth = 800,
  areaHeight = 450,
  nodeSettings = {
    width: 160,
    height: 100,
    depthDistance: 300,
    colorField: "",
    template: "",
  },
  linkSettings = { colorField: "#A1887F", widthField: "" },
  horizontalLayout = true,
  zoomBehavior = false,
}) => {
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

  const draw = (svg: any, source: any, treemap: any) => {
    let i = 0;
    const duration = 400;

    // Assigns the x and y position for the nodes
    const treeData = treemap(source);

    // Compute the new tree layout.
    const nodes = treeData.descendants();
    const links = treeData.descendants().slice(1);

    const linkScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([0, d3.max(nodes.map(el => el.data[linkSettings.widthField]))])
      .range([0, 50]);
    // Normalize for fixed-depth.
    nodes.forEach((d: any) => {
      d.y = d.depth * nodeSettings.depthDistance;
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    const node = svg.selectAll("g.node").data(nodes, (d: any) => {
      return d[nodeField] || (d[nodeField] = ++i);
    });

    // Enter any new modes at the parent's previous position.
    const nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d: any) => {
        if (horizontalLayout) {
          return typeof d.ancestors()[1] !== "undefined"
            ? "translate(" + d.ancestors()[1].y + "," + d.ancestors()[1].x + ")"
            : "translate(" + source.y0 + "," + source.x0 + ")";
        } else {
          return typeof d.ancestors()[1] !== "undefined"
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
      .style("fill", (d: any) => {
        return d[nodeSettings.colorField] || "#2196F3";
      })
      .style("cursor", "pointer")
      .on("click", (d: any) => {
        // @ts-ignore
        obj.emit("nodeClick", d);
      });

    nodeEnter
      .append("foreignObject")
      .attr("width", nodeSettings.width)
      .attr("height", nodeSettings.height)
      .style("pointer-events", "none")
      .html((d: any) =>
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
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(duration)
      .attr("transform", (d: any) => {
        return horizontalLayout
          ? "translate(" + d.y + "," + d.x + ")"
          : "translate(" + d.x + "," + d.y + ")";
      });

    // Remove any exiting nodes
    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", (d: any) => {
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
    const link = svg.selectAll("path.link").data(links, (d: any) => {
      return d.id;
    });

    // Enter any new links at the parent's previous position.
    const linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", (d: any) => {
        const o = horizontalLayout
          ? { x: d.ancestors()[1].x, y: d.ancestors()[1].y }
          : { x: d.ancestors()[1].y, y: d.ancestors()[1].x };
        return drawLinks(o, o, settings);
      })
      .attr("fill", "none")
      .attr("stroke-width", (d: any) => {
        return linkScale(d.data[linkSettings.widthField]) || 10;
      })
      .attr("stroke", (d: any) => {
        return d[linkSettings.colorField] || "#2196F3";
      });

    // UPDATE
    const linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", (d: any) => {
        return drawLinks(d, d.parent, settings);
      });

    // Remove any exiting links
    // @ts-ignore
    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", (d: any) => {
        const o = horizontalLayout
          ? { x: d.ancestors()[1].x, y: d.ancestors()[1].y }
          : { x: d.ancestors()[1].y, y: d.ancestors()[1].x };
        return drawLinks(o, o, drawLinks);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach((d: any) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  };

  function refresh(data: any): any {
    const [dataA, treemap] = prepareData(data, settings);
    draw(svg, dataA, treemap);
  }

  const obj = { refresh };
  Emitter(obj);

  const svg = initiliazeSVG(settings);
  return obj;
};
