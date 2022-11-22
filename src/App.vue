<template>
  <v-app>
    <v-main >
    {{navigationState}}
      <v-app-bar elevation="2">  
        <Menu  @select='(event) => selectNavigation(event)'/> 
      </v-app-bar>
      <WaterTracking v-if='navigationState=== NavigationState.HOME'/>
     <Settings v-if='navigationState=== NavigationState.SETTINGS'/> 
      <EditTrackings v-if='navigationState=== NavigationState.EDIT_TRACKINGS' /> 
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Menu from '@/components/menu.vue'
import WaterTracking from '@/components/water-tracking.vue'
import Settings from '@/components/settings.vue'
import EditTrackings from '@/components/edit-trackings.vue'

import {NavigationState} from '@/utils/navigation.types.ts'

let navigationState = ref(NavigationState.HOME);

function selectNavigation(event) {
  debugger
  console.log('selectNavigation', event)
  navigationState = event
  console.log('new nav state', navigationState)
}
</script>
