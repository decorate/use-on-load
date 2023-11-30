import { IProvideOnLoadOptions } from '@/contexts/onLoadContext';
import { App } from 'vue';
interface IOnLoadPlugin {
    install(app: App, options?: IProvideOnLoadOptions): any;
}
export declare const OnLoadPlugin: IOnLoadPlugin;
export {};
//# sourceMappingURL=OnLoadPlugin.d.ts.map