<template>
<h1>Settings</h1>
<v-text-field type='number' label="Size of your cup name" v-model.number='size'></v-text-field>
</template>

<script setup lang='ts'>
import useLocalStorage from '../utils/useLocalStorage'

let size = useLocalStorage('size', 200)
</script>
<style>
h1 {
  margin: 1rem 0.5rem;
}
</style>