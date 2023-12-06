import { ExtendedHierarchyPointNode, ITreeConfig } from "./typings";
export declare const getAreaSize: (htmlId: string) => {
    areaWidth: number;
    areaHeight: number;
};
type Result = ExtendedHierarchyPointNode & {
    x0: number;
    y0: number;
};
export declare const getFirstDisplayedAncestor: (ghostNodes: ExtendedHierarchyPointNode[], viewableNodes: ExtendedHierarchyPointNode[], id: string) => Result;
export declare const setNodeLocation: (xPosition: number, yPosition: number, settings: ITreeConfig) => string;
export declare class RefreshQueue {
    private static queue;
    private static runner;
    private static runnerSpeed;
    private static readonly extraDelayBetweenCallbacks;
    private static showQueueLog;
    static add(duration: number, callback: () => any): void;
    private static runnerFunction;
    private static log;
}
export {};
