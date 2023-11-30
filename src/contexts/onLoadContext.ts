import {inject, InjectionKey, Ref, ref} from 'vue'

export const OnLoadKey: InjectionKey<OnLoadContext> = Symbol('OnLoadContext')

interface OnLoadContext {
	isLoad: Ref<boolean>,
	onLoad: (func: () => {}) => void,
}

export interface IProvideOnLoadOptions {
	initialize?: Function
	onError?: (e: any) => void
	onFinally?: Function
}

export function provideOnLoadContext(options?: IProvideOnLoadOptions) {
	const isLoad = ref(false)

	const onLoad = async (func: () => {}) => {
		if(options?.initialize) {
			options.initialize()
		}
		isLoad.value = true
		try {
			await func()
		} catch (e: any) {
			if(options?.onError) {
				options?.onError(e)
			}
		} finally {
			isLoad.value = false
			if(options?.onFinally) {
				options?.onFinally()
			}
		}
	}

	return {isLoad, onLoad}
}

export function useOnLoad() {
	const context = inject(OnLoadKey)

	if (!context) {
		throw new Error()
	}
	
	return {
		...context,
	}
}