import { ITreeConfig } from "./typings";
export declare const Treeviz: {
    create: typeof create;
};
declare function create(userSettings: Partial<ITreeConfig>): {
    refresh: (data: any, newSettings?: Partial<ITreeConfig>) => void;
    clean: (keepConfig: boolean) => void;
};
export {};
