import { ITreeConfig } from "../typings";

interface ICoordinates {
  x: number;
  y: number;
}

export const generateLinkLayout = (
  s: ICoordinates,
  d: ICoordinates,
  treeConfig: ITreeConfig
): string => {
  const { horizontalLayout, nodeHeight, nodeWidth, linkShape } = treeConfig;
  if (linkShape === "orthogonal") {
    if (horizontalLayout) {
      return `M ${s.y} ${s.x + nodeHeight / 2}
        L ${(s.y + d.y + nodeWidth) / 2} ${s.x + nodeHeight / 2},
        L  ${(s.y + d.y + nodeWidth) / 2} ${d.x + nodeHeight / 2},
          ${d.y + nodeWidth} ${d.x + nodeHeight / 2}`;
    } else {
      return `M ${s.x + nodeWidth / 2} ${s.y}
        L ${s.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2},
        L  ${d.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2},
          ${d.x + nodeWidth / 2} ${d.y + nodeHeight} `;
    }
  } else {
    if (horizontalLayout) {
      return `M ${s.y} ${s.x + nodeHeight / 2}
        C ${(s.y + d.y + nodeWidth) / 2} ${s.x + nodeHeight / 2},
          ${(s.y + d.y + nodeWidth) / 2} ${d.x + nodeHeight / 2},
          ${d.y + nodeWidth} ${d.x + nodeHeight / 2}`;
    } else {
      return `M ${s.x + nodeWidth / 2} ${s.y}
        C ${s.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2},
          ${d.x + nodeWidth / 2} ${(s.y + d.y + nodeHeight) / 2},
          ${d.x + nodeWidth / 2} ${d.y + nodeHeight} `;
    }
  }
};
