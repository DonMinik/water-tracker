<template>
  <h1>Settings</h1>
  <v-text-field type='number' label="Size of your cup name" v-model.number='size'></v-text-field>
  <v-text-field type='number' label="Your goal" v-model.number='goal'></v-text-field>
  <v-select
    label="Notification interval"
      v-model="notificationInterval"
    :items="intervalOptions"
    item-title="title"
    item-value="value"
    return-object
    @update:modelValue="$emit('notifactionSettingsChanged')"
  ></v-select>
</template>

<script setup lang='ts'>
  import useLocalStorage from '@/utils/useLocalStorage'

  const emit = defineEmits(['notifactionSettingsChanged']);

  let size = useLocalStorage('size', 200)
  let goal = useLocalStorage('goal', 2000)
  let notificationInterval = useLocalStorage('notification-interval', {title: 'every hour', value: 60})
  const intervalOptions = [
    {title: 'every 15 minutes', value: 15},
    {title: 'every 30 minutes', value: 30}, 
    {title: 'every hour', value: 60},
    {title: 'every one and a half hours', value: 90},
    {title: 'every two hours', value: 120},
  ]
</script>
<style>
  h1 {
    margin: 1rem 0.5rem;
  }
</style>