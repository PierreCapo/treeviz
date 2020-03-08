# Treeviz-react

[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)
![David](https://img.shields.io/david/PierreCapo/treeviz-react)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[Treeviz](https://github.com/PierreCapo/treeviz) implementation for React

![](https://i.imgur.com/zFKuIgC.gif)

<p align="center">
💅 <a href="https://pierrecapo.github.io/treeviz-react">Come play with the Treeviz storybook!</a> 💅
</p>

### Usage

```
npm install treeviz-react

// or

yarn add treeviz-react
```

```js
import React from "react";
import { TreevizReact } from "treeviz-react";

const data = [
  { id: 1, text_1: "Chaos", text_2: "Void", father: null, color: "#FF5722" },
  { id: 2, text_1: "Tartarus", text_2: "Abyss", father: 1, color: "#FFC107" },
  { id: 3, text_1: "Gaia", text_2: "Earth", father: 1, color: "#8BC34A" },
  { id: 4, text_1: "Eros", text_2: "Desire", father: 1, color: "#00BCD4" }
];

const Foo = () => {
  return (
    <TreevizReact
      data={data}
      idKey={"id"}
      relationnalField={"father"}
      nodeWidth={200}
      nodeHeight={100}
      mainAxisNodeSpacing={2}
      secondaryAxisNodeSpacing={1.3}
      renderNode={node =>
        `<div style="height:${
          node.settings.nodeHeight
        }px;display:flex;align-items:center;margin-left:12px">Node name: ${
          node.data.text_1
        }</div>`
      }
      onNodeClick={node => console.log("you clicked on node " + node.id)}
      duration={500}
      linkWidth={node => 3}
    />
  );
};
```

The tree will automatically update whenever one of those props change. Note that is not recommended to update the relationnalField and the idKey prop once the component has been mounted.

### API

| Prop                       | Type                                          | Default             | Definition                                                                                                                                                                         |
| -------------------------- | --------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idKey`                    | string                                        | "id"                | The unique identifier field in the dataset representing the node                                                                                                                   |
| `relationnalField`         | string                                        | "father"            | In case of flat dataset, usually the relationnal field between each node is the field representing the father of the node, linking it to the id of the field. (See example below). |
| `hasFlatData`              | boolean                                       | true                | Specify whether the data passed to the tree is flat or already hierarchical                                                                                                        |
| `hasPanAndZoom`            | boolean                                       | true                | Toggle the ability to pan and zoom the tree                                                                                                                                        |
| `nodeWidth`                | number                                        | 160                 | Width of a node in px                                                                                                                                                              |
| `nodeHeight`               | number                                        | 100                 | Height of a node in px                                                                                                                                                             |
| `linkColor`                | function                                      | (node) => "#ffcc80" | Color of the link                                                                                                                                                                  |
| `linkWidth`                | function                                      | (node) => 10        | Width of the link                                                                                                                                                                  |
| `linkShape`                | "quadraticBeziers" \| "orthogonal" \| "curve" | "quadraticBeziers"  | Shape of the link                                                                                                                                                                  |
| `renderNode`               | function                                      | (node) => null      | HTML template for every node                                                                                                                                                       |
| `isHorizontal`             | boolean                                       | true                | Direction of the tree. If true, the tree expands from left to right. If false, it goes from top to bottom                                                                          |
| `onNodeClick`              | function                                      | (node) => null      | Function handling the event when someone click on it                                                                                                                               |
| `onNodeMouseEnter`         | function                                      | (node) => null      | Function handling the event when someone hover a node                                                                                                                              |
| `onNodeMouseLeave`         | function                                      | (node) => null      | Function handling the event when the mouse pointer leaves a node                                                                                                                   |
| `mainAxisNodeSpacing`      | number or "auto"                              | 1.3                 | Set the distance in pixels between two depths in the tree. If the value is `auto` it will automatically display the tree to fit the size of the container.                         |
| `secondaryAxisNodeSpacing` | number                                        | 1.25                | Set the distance between nodes in the same level as a coefficient of node dimensions. Recommended to have the value superior to 1                                                  |
| `marginTop`                | number                                        | 1.25                | Set the margin between the SVG element and the tree                                                                                                                                |
| `marginBottom`             | number                                        | 1.25                | Set the margin between the SVG element and the tree                                                                                                                                |
| `marginLeft`               | number                                        | 1.25                | Set the margin between the SVG element and the tree                                                                                                                                |
| `marginRight`              | number                                        | 1.25                | Set the margin between the SVG element and the tree                                                                                                                                |
| `areaHeight`               | number                                        | 800                 | The height of the area that displays the tree                                                                                                                                      |
| `areaWidth`                | number                                        | 500                 | the width of the area that displays the tree                                                                                                                                       |
