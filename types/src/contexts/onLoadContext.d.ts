import { InjectionKey, Ref } from 'vue';
export declare const OnLoadKey: InjectionKey<OnLoadContext>;
interface OnLoadContext {
    isLoad: Ref<boolean>;
    onLoad: (func: () => {}) => void;
}
export interface IProvideOnLoadOptions {
    initialize?: Function;
    onError?: (e: any) => void;
    onFinally?: Function;
}
export declare function provideOnLoadContext(options?: IProvideOnLoadOptions): {
    isLoad: Ref<boolean>;
    onLoad: (func: () => {}) => Promise<void>;
};
export declare function useOnLoad(): {
    isLoad: Ref<boolean>;
    onLoad: (func: () => {}) => void;
};
export {};
//# sourceMappingURL=onLoadContext.d.ts.map