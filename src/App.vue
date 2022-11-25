<template>
  <v-app>
    <v-main >

      <v-app-bar elevation="2">  
        <Menu  :state="navigationState" @select='selectNavigation'/> 
        <v-app-bar-title>Water Tracker</v-app-bar-title>
      </v-app-bar>
      <WaterTracking v-if="navigationState === NavigationState.HOME"/>
      <Settings v-if="navigationState === NavigationState.SETTINGS"/> 
      <EditTrackings v-if='navigationState === NavigationState.EDIT_TRACKINGS' /> 
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

function selectNavigation(event: NavigationState) {
  navigationState.value = event
}
</script>
