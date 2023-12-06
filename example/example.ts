import { Treeviz } from "../src";

var data_1 = [
  {
    id: 1,
    text_1: "Chaos",
    text_2: "Void",
    father: null,
    color: "#FF5722",
  },
  {
    id: 2,
    text_1: "Tartarus",
    text_2: "Abyss",
    father: 1,
    color: "#FFC107",
  },
  {
    id: 3,
    text_1: "Gaia",
    text_2: "Earth",
    father: 1,
    color: "#8BC34A",
  },
  {
    id: 4,
    text_1: "Eros",
    text_2: "Desire",
    father: 1,
    color: "#00BCD4",
  },
];
var data_2 = [
  {
    id: 1,
    text_1: "Chaos",
    text_2: " Void",
    father: null,
    color: "#2196F3",
  },
  {
    id: 2,
    text_1: "Tartarus",
    text_2: "Abyss",
    father: 1,
    color: "#F44336",
  },
  {
    id: 3,
    text_1: "Gaia",
    text_2: "Earth",
    father: 1,
    color: "#673AB7",
  },
  {
    id: 4,
    text_1: "Eros",
    text_2: "Desire",
    father: 1,
    color: "#009688",
  },
  {
    id: 5,
    text_1: "Uranus",
    text_2: "Sky",
    father: 3,
    color: "#4CAF50",
  },
  {
    id: 6,
    text_1: "Ourea",
    text_2: "Mountains",
    father: 3,
    color: "#FF9800",
  },
];
var data_3 = [
  {
    id: 1,
    text_1: "Chaos",
    text_2: "Void",
    father: null,
    color: "#2196F3",
  },
  {
    id: 2,
    text_1: "Tartarus",
    text_2: "Abyss",
    father: 1,
    color: "#F44336",
  },
  {
    id: 3,
    text_1: "Gaia",
    text_2: "Earth",
    father: 1,
    color: "#673AB7",
  },
  {
    id: 4,
    text_1: "Eros",
    text_2: "Desire",
    father: 1,
    color: "#009688",
  },
  {
    id: 5,
    text_1: "Uranus",
    text_2: "Sky",
    father: 3,
    color: "#4CAF50",
  },
  {
    id: 6,
    text_1: "Ourea",
    text_2: "Mountains",
    father: 3,
    color: "#FF9800",
  },
  {
    id: 7,
    text_1: "Hermes",
    text_2: " Sky",
    father: 4,
    color: "#2196F3",
  },
  {
    id: 8,
    text_1: "Aphrodite",
    text_2: "Love",
    father: 4,
    color: "#8BC34A",
  },
  {
    id: 3.3,
    text_1: "Love",
    text_2: "Peace",
    father: 8,
    color: "#c72e99",
  },
  {
    id: 4.1,
    text_1: "Hope",
    text_2: "Life",
    father: 8,
    color: "#2eecc7",
  },
];

var myTree = Treeviz.create({
  data: data_1, // for Typescript projects only.
  htmlId: "tree",
  idKey: "id",
  hasFlatData: true,
  relationnalField: "father",
  nodeWidth: 120,
  hasPan: true,
  hasZoom: true,
  nodeHeight: 80,
  mainAxisNodeSpacing: 2,
  isHorizontal: false,
  renderNode: function renderNode(node) {
    return (
      "<div class='box' style='cursor:pointer;height:" +
      node.settings.nodeHeight +
      "px; width:" +
      node.settings.nodeWidth +
      "px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:" +
      node.data.color +
      ";border-radius:5px;'><div><strong>" +
      node.data.text_1 +
      "</strong></div><div>is</div><div><i>" +
      node.data.text_2 +
      "</i></div></div>"
    );
  },
  linkWidth: (node) => {
    return node.data.id * 2;
  },
  linkShape: "curve",
  linkColor: () => `#B0BEC5`,
  onNodeClick: (node) => {
    console.log(node.data);
  },
  onNodeMouseEnter: (node) => {
    console.log(node.data);
  },
});
myTree.refresh(data_1);

var toggle = true;
var addButton = document.querySelector("#add");
var removeButton = document.querySelector("#remove");
var doTasksButton = document.querySelector("#doTasks");
addButton?.addEventListener("click", function () {
  console.log("addButton clicked");
  toggle ? myTree.refresh(data_2) : myTree.refresh(data_3);
  toggle = false;
});
removeButton?.addEventListener("click", function () {
  console.log("removeButton clicked");
  myTree.refresh(data_1);
});
doTasksButton?.addEventListener("click", function () {
  addButton?.click();
  removeButton?.click();
  addButton?.click();
  removeButton?.click();
  removeButton?.click();
  addButton?.click();
  removeButton?.click();
  addButton?.click();
  addButton?.click();
  removeButton?.click();
  removeButton?.click();
});
