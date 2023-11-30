## Installing

Using yarn:

```bash
$ yarn add @team-decorate/use-on-load
```

Once the package is installed, you can import the library using `import` approach:

```typescript
import { useOnLoad } from '@team-decorate/use-on-load'
```

## Example

How to install to app:
```typescript
import {createApp, inject} from 'vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import App from '@/App.vue'
import axios from 'axios'
import {OnLoadPlugin} from '@team-decorate/use-on-load'

const app = createApp(App)

app
  .use(BootstrapVue3)
  .use(OnLoadPlugin)

app.mount('#app')
```

Cooperation with vue3-validate-plugin:

> **Note**:
> Pay attention to the order in which plugins are loaded. Please write after loading vue3-validate-plugin.

```typescript
import {createApp, inject} from 'vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import App from '@/App.vue'
import {ValidateError, ValidateKey, ValidatePlugin} from '@team-decorate/vue3-validate-plugin'
import axios from 'axios'
import {OnLoadPlugin} from '@team-decorate/use-on-load'

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
```

How to use useOnLoad:
```vue
<script setup lang="ts">
import axios from 'axios'
import {useOnLoad} from '@team-decorate/use-on-load'

const {isLoad, onLoad} = useOnLoad()

const test = async () => {
    await onLoad(async () => {
        await axios.post('/test')
    })
    // Other processing...
}
</script>
```