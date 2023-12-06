(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
    d(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && d(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function d(r) {
    if (r.ep)
      return;
    r.ep = !0;
    const i = a(r);
    fetch(r.href, i);
  }
})();
function s(t, e, a) {
  this.k = t, this.x = e, this.y = a;
}
s.prototype = {
  constructor: s,
  scale: function(t) {
    return t === 1 ? this : new s(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new s(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
s.prototype;
var h = [{
  id: 1,
  text_1: "Chaos",
  text_2: "Void",
  father: null,
  color: "#FF5722"
}, {
  id: 2,
  text_1: "Tartarus",
  text_2: "Abyss",
  father: 1,
  color: "#FFC107"
}, {
  id: 3,
  text_1: "Gaia",
  text_2: "Earth",
  father: 1,
  color: "#8BC34A"
}, {
  id: 4,
  text_1: "Eros",
  text_2: "Desire",
  father: 1,
  color: "#00BCD4"
}], f = [{
  id: 1,
  text_1: "Chaos",
  text_2: " Void",
  father: null,
  color: "#2196F3"
}, {
  id: 2,
  text_1: "Tartarus",
  text_2: "Abyss",
  father: 1,
  color: "#F44336"
}, {
  id: 3,
  text_1: "Gaia",
  text_2: "Earth",
  father: 1,
  color: "#673AB7"
}, {
  id: 4,
  text_1: "Eros",
  text_2: "Desire",
  father: 1,
  color: "#009688"
}, {
  id: 5,
  text_1: "Uranus",
  text_2: "Sky",
  father: 3,
  color: "#4CAF50"
}, {
  id: 6,
  text_1: "Ourea",
  text_2: "Mountains",
  father: 3,
  color: "#FF9800"
}], x = [{
  id: 1,
  text_1: "Chaos",
  text_2: "Void",
  father: null,
  color: "#2196F3"
}, {
  id: 2,
  text_1: "Tartarus",
  text_2: "Abyss",
  father: 1,
  color: "#F44336"
}, {
  id: 3,
  text_1: "Gaia",
  text_2: "Earth",
  father: 1,
  color: "#673AB7"
}, {
  id: 4,
  text_1: "Eros",
  text_2: "Desire",
  father: 1,
  color: "#009688"
}, {
  id: 5,
  text_1: "Uranus",
  text_2: "Sky",
  father: 3,
  color: "#4CAF50"
}, {
  id: 6,
  text_1: "Ourea",
  text_2: "Mountains",
  father: 3,
  color: "#FF9800"
}, {
  id: 7,
  text_1: "Hermes",
  text_2: " Sky",
  father: 4,
  color: "#2196F3"
}, {
  id: 8,
  text_1: "Aphrodite",
  text_2: "Love",
  father: 4,
  color: "#8BC34A"
}, {
  id: 3.3,
  text_1: "Love",
  text_2: "Peace",
  father: 8,
  color: "#c72e99"
}, {
  id: 4.1,
  text_1: "Hope",
  text_2: "Life",
  father: 8,
  color: "#2eecc7"
}], c = (void 0)({
  htmlId: "tree",
  idKey: "id",
  hasFlatData: !0,
  relationnalField: "father",
  nodeWidth: 120,
  hasPan: !0,
  hasZoom: !0,
  nodeHeight: 80,
  mainAxisNodeSpacing: 2,
  isHorizontal: !1,
  renderNode: function(e) {
    return "<div class='box' style='cursor:pointer;height:" + e.settings.nodeHeight + "px; width:" + e.settings.nodeWidth + "px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:" + e.data.color + ";border-radius:5px;'><div><strong>" + e.data.text_1 + "</strong></div><div>is</div><div><i>" + e.data.text_2 + "</i></div></div>";
  },
  linkWidth: function(e) {
    return 5;
  },
  linkShape: "curve",
  linkColor: function(e) {
    return e.linkColor || "#B0BEC5";
  },
  onNodeClick: function(e) {
    return console.log(e);
  }
});
c.refresh(h);
var u = !0, n = document.querySelector("#add"), o = document.querySelector("#remove"), _ = document.querySelector("#doTasks");
n.addEventListener("click", function() {
  console.log("addButton clicked"), u ? c.refresh(f) : c.refresh(x), u = !1;
});
o.addEventListener("click", function() {
  console.log("removeButton clicked"), c.refresh(h);
});
_.addEventListener("click", function() {
  n.click(), o.click(), n.click(), o.click(), o.click(), n.click(), o.click(), n.click(), n.click(), o.click(), o.click();
});
