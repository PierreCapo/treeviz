import { ITreeConfig } from "./typings";
export declare function create(userSettings: Partial<ITreeConfig>): {
    refresh: (data: any) => void;
    clean: (keepConfig: boolean) => void;
};
