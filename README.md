
# Treeviz

This javascript module aims at providing an easy interface in order to represent tree diagrams on screen with the ability to handle dynamic data flows. The data format must be JSON.

[Treeviz Demo](https://codepen.io/anon/pen/BPNvYL#anon-login)
  

## Installation

With npm :

`npm install treeviz`

and then you can use it with :

`import Treeviz from 'treeviz';`

Or download this repository and link the dist/index.js file in your page directly :
  
  `<script src="./dist/index.js><script>`

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
#### config.htmlD (String)
Mandatory. The HTML id tag on the page where the tree should be drawn.

#### config.nodeField (String)
Mandatory. The unique identifier field in the dataset representing the node

#### config.relationnalField (String)
Mandatory. This one is a bit harder to understand. There are 2 ways to provide data to the tree : or a flat dataset (typically an array of nodes), or a pre-built hierarchical dataset.
In case of flat dataset, usually the relationnal field between each node is the field representing the father of the node, linking it to the id of the field. (See example below).
In case of pre-built hierarchical dataset, the relationnal field is the field representing an array of children

#### config.areaWidth (String)
The width avalaible for drawing the tree. Default to "800px"


#### config.areaHeight (String)
The height of the drawn area. Default to "450px"


#### config.nodeSettings (Object)
An object defining the nodes. Default values are shown here
```js
{ width:  160, // width of the nodes
height:  100, // height of the nodes
depthDistance:  300, // distance between depth levels
colorField:  null, // Setting the node color. If null, nodes will be blue.
template:  null  /* HTML definition of the text inside the nodes. 
                  {{ }} is the way to access the data field dynamically inside 
                  the template, like : <div>{{my_field}}</div> */
}
```

#### config.linkSettings(Object)
An object defining the links. Default values are shown here
```js
{ colorField:  null, // Setting the link color. If null, links will be grey
widthField:  null /* field responsible of the width of links.
                  The module will automatically compute the max of this field
                  from every node, and will make a linear scale from 1px to 50px 
                  with it */
}
  ```


#### config.horizontalLayout (String)
Toggle whether the tree should have an horizontal or vertical layout. Default to true (horizontal layout).


#### config.zoomBehavior (String)
Toggle whether pan or zoom are avalaible or not. Default to false (no zoom).

#### Treeviz.on (Event)
If you click on a node, the event will be triggered, and the node data will be passed as an argument to the callback function.

`Treeviz.on("nodeClick", function(d) { // do something });`
  
## Example
  Assuming that you already have an HTML element on the pagh with the tag `id="a_tree"`

#### Flat data case :
```js

var  flat_data_example = [
{"id":0, "node_name":"Root node", "father":null, "number":10},
{"id":1, "node_name":"Child A", "father":0, "number":5},
{"id":2, "node_name":"Child B", "father":0, "number":3},
{"id":3, "node_name":"Child C","father":0, "number":2}
];

var  myTree = Treeviz.create({
htmlID:  "a_tree",
nodeField :  "id",
flatData :  true,
relationnalField:  "father",
nodeSettings: {
  width:  160,
  height:  100,
  depthDistance:  300,
  template:  "<div style='height:{{height}}px; width:{{width}}px;display:flex;justify-content:center;align-items:center;'><div>{{node_name}}</div></div>"
}
});

myTree.refresh(flat_data_example);
```
  #### Hierarchical data case :
  ```js

var  hierarchical_data_example = {
"name" :"Mom", 
"qty":10, 
"children" : [ 
    {"name":"Son A", "qty":3},
    {"name":"Son B", "qty":7}
    ]
};

var  myTree = Treeviz.create({
htmlID:  "a_tree",
nodeField :  "name",
flatData :  false,
relationnalField:  "children",
nodeSettings: {
  width:  160,
  height:  100,
  depthDistance:  300,
  template:  "<div style='height:{{height}}px; width:{{width}}px;display:flex;justify-content:center;align-items:center;'><div>{{name}}</div></div>"
},
linkSettings : { colorField:  null, 
widthField:  "qty" }
});

myTree.refresh(hierarchical_data_example);
```

## Contributing

1. Fork it!

2. Create your feature branch: `git  checkout -b  my-new-feature`

3.  Commit  your  changes: `git commit -am 'Add some feature'`

4.  Push  to  the  branch: `git push origin my-new-feature`

5.  Submit  a  pull  request :D

  

## Credits

This  module  is  based  on  d3  library, credit  to  all  the  contributors  of  this  project.
Thanks also to the people from the Emitter project

## License

BSD
