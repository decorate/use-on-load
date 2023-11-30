import {IProvideOnLoadOptions, OnLoadKey, provideOnLoadContext, useOnLoad} from '@/contexts/onLoadContext'
import {App, ComponentInternalInstance, getCurrentInstance, inject} from 'vue'
import {ValidateKey} from '@team-decorate/vue3-validate-plugin'

interface IOnLoadPlugin {
	install(app: App, options?: IProvideOnLoadOptions): any
}

export const OnLoadPlugin: IOnLoadPlugin = {
	install(app: App, options) {
		app.provide(OnLoadKey, provideOnLoadContext(options))
	}
}