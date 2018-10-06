export interface ITreeConfig {
    htmlID: string;
    nodeField: string;
    relationnalField: string;
    flatData: boolean;
    areaWidth: number;
    areaHeight: number;
    nodeSettings: INodeSettings;
    linkSettings: ILinkSettings;
    horizontalLayout: boolean;
    zoomBehavior: boolean;
}

export interface INodeSettings {
    width: number;
    height: number;
    depthDistance: number;
    colorField: string;
    template: string;
}

export interface ILinkSettings {
    colorField: string;
    widthField: string;
}
