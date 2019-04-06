export const getAreaSize = (htmlID: string) => {
  const SVGContainer = document.querySelector(`#${htmlID}`);
  if (SVGContainer === null) {
    throw new Error(`Cannot find dom element with id:${htmlID}`);
  }
  const areaWidth = SVGContainer.clientWidth;
  const areaHeight = SVGContainer.clientHeight;
  if (areaHeight === 0 || areaWidth === 0) {
    throw new Error(
      "The tree can't be display because the svg height or width of the container is null"
    );
  }
  return { areaWidth, areaHeight };
};
