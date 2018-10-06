interface ICoordinates {
  x: number;
  y: number;
}

export const drawLinks = (
  s: ICoordinates,
  d: ICoordinates,
  treeConfig: any
): string => {
  const {
    horizontalLayout,
    nodeSettings: { height: height, width: width },
  } = treeConfig;
  if (horizontalLayout) {
    return `M ${s.y} ${s.x + height / 2}
        C ${(s.y + d.y + width) / 2} ${s.x + height / 2},
          ${(s.y + d.y + width) / 2} ${d.x + height / 2},
          ${d.y + width} ${d.x + height / 2}`;
  } else {
    return `M ${s.x + width / 2} ${s.y}
        C ${s.x + width / 2} ${(s.y + d.y + height) / 2},
          ${d.x + width / 2} ${(s.y + d.y + height) / 2},
          ${d.x + width / 2} ${d.y + height} `;
  }
};
