# Treeviz

This javascript module aims at providing an easy interface in order to represent tree diagrams on screen with the ability to handle dynamic data flows. The data format must be JSON.

![](https://i.imgur.com/vyB2Erg.gif)

[Treeviz Playground](https://codepen.io/pierrecapo/pen/MPbBdv)

## Installation

With npm : `npm install treeviz`

and then you can use it with : `import Treeviz from 'treeviz';`

Or download this repository and link the dist/index.js file in your page directly : `<script src="./dist/index.js><script>`

## Usage

This module comes with a bunch of configuration settings.

`var myTree = Treeviz.create({ // configuration here });`

Then you can easily pass data to the object, and it will generate the tree :

```
myTree.refresh(data);
myTree.refresh(data_update1);
myTree.refresh(data_update2);
```

The tree will be clever enough to updates only the part of the trees that have been added or removed in the dataset, and so it won't redraw the entire tree.

## API

The big part of the API is configuring the tree before passing data to it :

```js
Treeviz.create(config);
```

The table below lists all the avalaible key that the config object can have

| Key                | Type                               | Default              | Definition                                                                                                                                                                         |
| ------------------ | ---------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `htmlID`           | string (Required)                  |                      | The HTML id tag on the page where the tree should be drawn. It must have a width and an height specified                                                                           |
| `nodeField`        | string                             | "id"                 | The unique identifier field in the dataset representing the node                                                                                                                   |
| `relationnalField` | string                             | "father"             | In case of flat dataset, usually the relationnal field between each node is the field representing the father of the node, linking it to the id of the field. (See example below). |
| `flatData`         | boolean                            | true                 | Specify whether the data passed to the tree is flat or already hierarchical                                                                                                        |
| `zoomBehavior`     | boolean                            | true                 | Toggle the ability to pan and zoom the tree                                                                                                                                        |
| `nodeWidth`        | number                             | 160                  | Width of a node in px                                                                                                                                                              |
| `nodeHeight`       | number                             | 100                  | Height of a node in px                                                                                                                                                             |
| `nodeColor`        | function                           | (nodeData) => "blue" | Color of the node                                                                                                                                                                  |
| `linkColor`        | function                           | (nodeData) => "grey" | Color of the link                                                                                                                                                                  |
| `linkWidth`        | function                           | (nodeData) => 10     | Width of the link                                                                                                                                                                  |
| `linkShape`        | "quadraticBeziers" \| "orthogonal" | "quadraticBeziers"   | Shape of the link                                                                                                                                                                  |
| `nodeTemplate`     | function                           |                      | HTML template for every node                                                                                                                                                       |
| `horizontalLayout` | boolean                            | true                 | Direction of the tree. If true, the tree expands from left to right. If false, it goes from top to bottom                                                                          |

| `onNodeClick` | function | | Function handling the event when someone click on it |
| `onNodeMouseEnter` | function | | Function handling the event when someone hover a node |

| `onNodeMouseLeave` | function | | Function handling the event when the mouse pointer leaves a node |

## Example

Assuming that you already have an HTML element on the pagh with the tag `id="a_tree"`

#### Flat data case :

```js
var flat_data_example = [
  { id: 0, node_name: "Root node", father: null, number: 10 },
  { id: 1, node_name: "Child A", father: 0, number: 5 },
  { id: 2, node_name: "Child B", father: 0, number: 3 },
  { id: 3, node_name: "Child C", father: 0, number: 2 },
];

var myTree = Treeviz.create({
  htmlID: "tree",
  nodeField: "id",
  flatData: true,
  relationnalField: "father",
  onNodeClick: nodeData => console.log("you clicked me!"),
});

myTree.refresh(flat_data_example);
```

#### Hierarchical data case :

```js
var hierarchical_data_example = {
  name: "Mom",
  qty: 10,
  children: [{ name: "Son A", qty: 3 }, { name: "Son B", qty: 7 }],
};

var myTree = Treeviz.create({
  htmlID: "tree",
  nodeField: "name",
  flatData: false,
  relationnalField: "children",
});

myTree.refresh(hierarchical_data_example);
```

## Contributing

1. Fork it!

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am 'Add some feature'`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request :D

## Credits

This module is based on d3 library, credit to all the contributors of this project.
Thanks also to the people from the Emitter project

## License

BSD
