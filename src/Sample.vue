<script setup lang="ts">
import {useOnLoad} from '@/contexts/onLoadContext'
import {ref} from 'vue'
import axios from 'axios'
import {ValidateWrap} from '@team-decorate/vue3-validate-plugin'

const {isLoad, onLoad} = useOnLoad()
const v = ref('')

axios.defaults.baseURL = 'http://localhost:3000'

const test = async () => {
    v.value = 'function start'
    await new Promise(resolve => setTimeout(resolve, 1500))
    await onLoad(async () => {
        v.value = 'onLoad start'
        await new Promise(resolve => setTimeout(resolve, 3000))
        await axios.post('/test')
        v.value = 'onLoad end'
    })
    await new Promise(resolve => setTimeout(resolve, 2000))
    v.value = 'function end'
}

</script>

<template>
    <validate-wrap>
        <p>isLoad is {{isLoad}}/{{v}}</p>
        <input data="name">
        <b-button @click="test">test</b-button>
    </validate-wrap>
</template>