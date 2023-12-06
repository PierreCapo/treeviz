import { ITreeConfig } from "../typings";

interface ICoordinates {
  x: number;
  y: number;
}

export const generateLinkLayout = (
  s: ICoordinates, // source
  d: ICoordinates, // destination
  treeConfig: ITreeConfig
): string => {
  const { isHorizontal, nodeHeight, nodeWidth, linkShape } = treeConfig;
  if (linkShape === "orthogonal") {
    if (isHorizontal) {
      return `M ${s.y} ${s.x + nodeHeight / 2}
        L ${(s.y + d.y + nodeWidth) / 2} ${s.x + nodeHeight / 2}
        L  ${(s.y + d.y + nodeWidth) / 2} ${d.x + nodeHeight / 2}
          ${d.y + nodeWidth} ${d.x + nodeHeight / 2}`;
    } else {
      return `M ${s.x + nodeWidth / 2} ${s.y}
        L ${s.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2}
        L  ${d.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2}
          ${d.x + nodeWidth / 2} ${d.y + nodeHeight} `;
    }
  } else if (linkShape === "curve") {
    if (isHorizontal) {
      return `M ${s.y} ${s.x + nodeHeight / 2}
      L ${s.y - (s.y - d.y - nodeWidth) / 2 + 15} ${s.x + nodeHeight / 2}
      Q${s.y - (s.y - d.y - nodeWidth) / 2} ${s.x + nodeHeight / 2}
       ${s.y - (s.y - d.y - nodeWidth) / 2} ${s.x +
        nodeHeight / 2 -
        offsetPosOrNeg(s.x, d.x, 15)}
      L ${s.y - (s.y - d.y - nodeWidth) / 2} ${d.x + nodeHeight / 2}
      L ${d.y + nodeWidth} ${d.x + nodeHeight / 2}`;
    } else {
      return `M ${s.x + nodeWidth / 2} ${s.y}
      L ${s.x + nodeWidth / 2} ${s.y - (s.y - d.y - nodeHeight) / 2 + 15}
      Q${s.x + nodeWidth / 2} ${s.y - (s.y - d.y - nodeHeight) / 2}
      ${s.x + nodeWidth / 2 - offsetPosOrNeg(s.x, d.x, 15)} ${s.y -
        (s.y - d.y - nodeHeight) / 2}
      L ${d.x + nodeWidth / 2} ${s.y - (s.y - d.y - nodeHeight) / 2} 
      L ${d.x + nodeWidth / 2} ${d.y + nodeHeight} `;
    }
  } else {
    if (isHorizontal) {
      return `M ${s.y} ${s.x + nodeHeight / 2}
        C ${(s.y + d.y + nodeWidth) / 2} ${s.x + nodeHeight / 2}
          ${(s.y + d.y + nodeWidth) / 2} ${d.x + nodeHeight / 2}
          ${d.y + nodeWidth} ${d.x + nodeHeight / 2}`;
    } else {
      return `M ${s.x + nodeWidth / 2} ${s.y}
        C ${s.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2}
          ${d.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2}
          ${d.x + nodeWidth / 2} ${d.y + nodeHeight} `;
    }
  }
};

const offsetPosOrNeg = (val1: number, val2: number, offset: number) =>
  val1 > val2 ? offset : val1 < val2 ? -offset : 0;
