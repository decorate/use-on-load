import {createApp, inject} from 'vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import App from '@/App.vue'
import {ValidateError, ValidateKey, ValidatePlugin} from '@team-decorate/vue3-validate-plugin'
import axios from 'axios'
import {OnLoadPlugin} from '@/plugins/OnLoadPlugin'

const app = createApp(App)

app
	.use(BootstrapVue3)
	.use(ValidatePlugin, {axios: axios})

const validateContext = app.runWithContext(() => inject(ValidateKey))

app.use(OnLoadPlugin, {
	initialize: () => {
		validateContext?.setValidError(new ValidateError())
	},
	onError: (e) => {
		if(e instanceof ValidateError) {
			validateContext?.setValidError(e)
		}
	},
	onFinally: () => console.log('onFinally!!')
})

app.mount('#app')

