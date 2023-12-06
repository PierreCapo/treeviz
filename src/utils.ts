import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";

export const getAreaSize = (htmlId: string) => {
  const SVGContainer = document.querySelector(`#${htmlId}`);
  if (SVGContainer === null) {
    throw new Error(`Cannot find dom element with id:${htmlId}`);
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

type Result = ExtendedHierarchyPointNode & { x0: number; y0: number };

export const getFirstDisplayedAncestor = (
  ghostNodes: ExtendedHierarchyPointNode[],
  viewableNodes: ExtendedHierarchyPointNode[],
  id: string
): Result => {
  try {
    // @ts-ignore
    const parentNode: Result = ghostNodes.find((node) => node.id === id);

    // @ts-ignore
    const parentNodeId: string = parentNode.ancestors()[1].id;
    const isPresentInOldNodes = viewableNodes.some(
      (oldNode) => oldNode.id === parentNodeId
    );

    if (isPresentInOldNodes) {
      return parentNode.ancestors()[1];
    } else {
      return getFirstDisplayedAncestor(ghostNodes, viewableNodes, parentNodeId);
    }
  } catch (e) {
    // @ts-ignore
    return ghostNodes.find((node) => node.id === id);
  }
};

export const setNodeLocation = (
  xPosition: number,
  yPosition: number,
  settings: ITreeConfig
) => {
  if (settings.isHorizontal) {
    return "translate(" + yPosition + "," + xPosition + ")";
  } else {
    return "translate(" + xPosition + "," + yPosition + ")";
  }
};

// RefreshQueue ensures that don't run a refresh while another refresh
// is in transition.
export class RefreshQueue {
  // The queue is an array that contains objects. Each object represents an
  // refresh action and only they have 2 properties:
  // {
  //     callback:          triggers when it's the first of queue and then it
  //                        becomes null to prevent that callback executes more
  //                        than once.
  //     delayNextCallback: when callback is executed, queue will subtracts
  //                        milliseconds from it. When it becomes 0, the entire
  //                        object is destroyed (shifted) from the array and then
  //                        the next item (if exists) will be executed similary
  //                        to this.
  // }
  private static queue: Array<{
    delayNextCallback: number;
    callback: any;
  }> = [];

  // Contains setInterval ID
  private static runner: number;

  // Milliseconds of each iteration
  private static runnerSpeed: number = 100;

  // Developer internal magic number. Time added at end of refresh transition to
  // let DOM and d3 rest before another refresh.
  // 0 creates console and visual errors because getFirstDisplayedAncestor never
  // found the needed id and setNodeLocation receives undefined parameters.
  // Between 50 and 100 milliseconds seems enough for 10 nodes (demo example)
  private static readonly extraDelayBetweenCallbacks: number = 100;

  // Developer internal for debugging RefreshQueue class. Set true to see
  // console "real time" queue of tasks.
  // If there is a cleaner method, remove it!
  private static showQueueLog: boolean = false;

  // Adds one refresh action to the queue. When safe callback will be
  // triggered
  public static add(duration: number, callback: () => any) {
    this.queue.push({
      delayNextCallback: duration + this.extraDelayBetweenCallbacks,
      callback: callback,
    });
    this.log(
      this.queue.map((_) => _.delayNextCallback),
      "<-- New task !!!"
    );
    if (!this.runner) {
      this.runnerFunction();
      //@ts-ignore
      this.runner = setInterval(() => this.runnerFunction(), this.runnerSpeed);
    }
  }

  // Each this.runnerSpeed milliseconds it's executed. It stops when finish.
  private static runnerFunction() {
    if (this.queue[0]) {
      // ************************ Callback section ************************
      if (this.queue[0].callback) {
        this.log("Executing task, delaying next task...");
        try {
          this.queue[0].callback();
        } catch (e) {
          console.error(e);
        } finally {
          // To prevent trigger callback more than once
          this.queue[0].callback = null;
        }
      }
      // ******************** Delay until next callback ********************
      this.queue[0].delayNextCallback -= this.runnerSpeed;
      this.log(this.queue.map((_) => _.delayNextCallback));
      if (this.queue[0].delayNextCallback <= 0) {
        this.queue.shift();
      }
    } else {
      this.log("No task found");
      clearInterval(this.runner);
      this.runner = 0;
    }
  }

  // Print to console debug data if this.showQueueLog = true
  private static log(...msg: any) {
    if (this.showQueueLog) console.log(...msg);
  }
}
