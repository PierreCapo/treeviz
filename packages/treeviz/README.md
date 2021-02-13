# Treeviz

[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)
![David](https://img.shields.io/david/PierreCapo/treeviz)
[![license](https://badgen.now.sh/badge/license/BSD)](./LICENSE)

This javascript module aims at providing an easy interface in order to represent tree diagrams on screen with the ability to handle dynamic data flows. The data format must be JSON.

![](https://i.imgur.com/vyB2Erg.gif)

<p align="center">
💅 <a href="https://pierrecapo.github.io/treeviz-react">Come play with the Treeviz storybook!</a> 💅
</p>

## Installation (NPM)

With npm : `npm install treeviz`

and then you can use it with : `import * as Treeviz from 'treeviz';`

## Installation (Vanilla HTML/JS)

Download the `dist/index.js` from this reporsitory : [Go to dist file](./dist).
Then add a tool like [requirejs](https://requirejs.org/) to be able to load and use this library :

```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js" integrity="sha512-vRqhAr2wsn+/cSsyz80psBbCcqzz2GTuhGk3bq3dAyytz4J/8XwFqMjiAGFBj+WM95lHBJ9cDf87T3P8yMrY7A==" crossorigin="anonymous"></script>
<script>
require(["./index.js"], (Treeviz) => { // Change "./index.js" to your local "Treeviz index.js" path
  // from there you will have access to the Treeviz variable
}
```

## Usage

#### React

Check the treeviz wrapper for react: [treeviz-react](./treeviz-react)

#### Vanilla JavaScript

```HTML
// Define a tree element where dimensions are mandatory
<div id="tree" style="height:700px; width:900px"></div>

<script>
// Define a dataset
var data = [
  { id: 1, text_1: "Father", father: null },
  { id: 2, text_1: "Child A", father: 1 },
  { id: 3, text_1: "Child B", father: 1 },
  { id: 4, text_1: "Subchild C", father: 2 }
];

// Define and configure a tree object
var myTree = Treeviz.create({
  htmlId: "tree",
  idKey: "id",
  hasFlatData: true,
  nodeColor: (nodeData) => "grey",
  relationnalField: "father",
});

// Display the tree based on the data
myTree.refresh(data);
</script>
```

To update the tree visually you will just have to pass new data to the `refresh` method like this :

```JS
myTree.refresh(data);
myTree.refresh(data_update1);
myTree.refresh(data_update2);
```

The tree will be clever enough to updates only the part of the trees that have been added or removed in the dataset, and so it won't redraw the entire tree.

[Treeviz Example](https://codepen.io/pierrecapo/pen/MPbBdv)

#### Hierarchical data case :

```js
var hierarchical_data_example = {
  name: "Mom",
  qty: 10,
  children: [
    { name: "Son A", qty: 3 },
    { name: "Son B", qty: 7 },
  ],
};

var myTree = Treeviz.create({
  htmlId: "tree",
  idKey: "name",
  hasFlatData: false,
  relationnalField: "children",
});

myTree.refresh(hierarchical_data_example);
```

## API

The big part of the API is configuring the tree before passing data to it :

```JS
Treeviz.create(config);
```

The table below lists all the avalaible key that the config object can have

| Key                        | Type                                          | Default                 | Definition                                                                                                                                                                         |
| -------------------------- | --------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `htmlId`                   | string (Required)                             |                         | The HTML id tag on the page where the tree should be drawn. It must have a width and an height specified                                                                           |
| `idKey`                    | string                                        | "id"                    | The key in a data item representing the unique identifier of a node                                                                                                                |
| `relationnalField`         | string                                        | "father"                | In case of flat dataset, usually the relationnal field between each node is the field representing the father of the node, linking it to the id of the field. (See example below). |
| `hasFlatData`              | boolean                                       | true                    | Specify whether the data passed to the tree is flat or already hierarchical                                                                                                        |
| `hasPan`                   | boolean                                       | false                   | Toggle the ability to pan the tree                                                                                                                                                 |
| `hasZoom`                  | boolean                                       | false                   | Toggle the ability to zoom the tree                                                                                                                                                |
| `nodeWidth`                | number                                        | 160                     | Width of a node in px                                                                                                                                                              |
| `nodeHeight`               | number                                        | 100                     | Height of a node in px                                                                                                                                                             |
| `linkColor`                | function                                      | (nodeData) => "#ffcc80" | Color of the link                                                                                                                                                                  |
| `linkWidth`                | function                                      | (nodeData) => 10        | Width of the link                                                                                                                                                                  |
| `linkShape`                | "quadraticBeziers" \| "orthogonal" \| "curve" | "quadraticBeziers"      | Shape of the link                                                                                                                                                                  |
| `renderNode`               | function                                      | (nodeData) => null      | HTML template for every node                                                                                                                                                       |
| `isHorizontal`             | boolean                                       | true                    | Direction of the tree. If true, the tree expands from left to right. If false, it goes from top to bottom                                                                          |
| `onNodeClick`              | function                                      | (nodeData) => null      | Function handling the event when someone click on it                                                                                                                               |
| `onNodeMouseEnter`         | function                                      | (nodeData) => null      | Function handling the event when someone hover a node                                                                                                                              |
| `onNodeMouseLeave`         | function                                      | (nodeData) => null      | Function handling the event when the mouse pointer leaves a node                                                                                                                   |
| `mainAxisNodeSpacing`      | number or "auto"                              | 300                     | Set the distance in pixels between two depths in the tree. If the value is `auto` it will automatically display the tree to fit the size of the container.                         |
| `secondaryAxisNodeSpacing` | number                                        | 1.25                    | Set the distance between nodes in the same level as a coefficient of node dimensions. Recommended to have the value superior to 1                                                  |
| `marginTop`                | number                                        | 1.25                    | Set the margin between the SVG element and the tree                                                                                                                                |
| `marginBottom`             | number                                        | 1.25                    | Set the margin between the SVG element and the tree                                                                                                                                |
| `marginLeft`               | number                                        | 1.25                    | Set the margin between the SVG element and the tree                                                                                                                                |
| `marginRight`              | number                                        | 1.25                    | Set the margin between the SVG element and the tree                                                                                                                                |

## Credits

This module is based on d3 library, credit to all the contributors of this project.

## License

BSD
