<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-app-bar-nav-icon color="primary" v-bind="props"> </v-app-bar-nav-icon>
    </template>

    <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :class="i === state? 'active': ''">
          <v-list-item-title @click="$emit('select', item?.navigateTo)">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { NavigationState } from '@/utils/navigation.types.ts';
import { ref } from 'vue'
const props = defineProps({
  state: NavigationState
});

const emit = defineEmits(['select']);

const selected = ref(1)
console.log('menu', props.state)
const items = [
  { title: 'Home', navigateTo: NavigationState.HOME },
  { title: 'Settings', navigateTo: NavigationState.SETTINGS },
  { title: 'Edit Trackings', navigateTo: NavigationState.EDIT_TRACKINGS },
];
</script>
<style>
.active {
  color: #6998AB;
}
</style>