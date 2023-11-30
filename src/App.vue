<script setup lang="ts">
import Sample from '@/Sample.vue'
import {provideOnLoadContext} from '@/contexts/onLoadContext'
import {useValidate, ValidateError} from '@team-decorate/vue3-validate-plugin'

const {clearValidate, setValidError} = useValidate()

// provideOnLoadContext({
//     initialize: () => {
//         clearValidate()
//     },
//     onError: (e) => {
//         if(e instanceof ValidateError) {
//             setValidError(e)
//         }
//     },
//     onFinally: () => console.log('onFinally!!')
// })
</script>

<template>
    <div>
        <sample/>
    </div>
</template>