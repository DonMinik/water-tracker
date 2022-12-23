<template>
  <v-app>
    <v-app-bar elevation="2">
      <Menu :state="navigationState" @select="selectNavigation" />
      <v-app-bar-title>Water Tracker</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <WaterTracking
        v-if="navigationState === NavigationState.HOME"
        @drink="updateNotificationRunner"
      />
      <Settings
        v-if="navigationState === NavigationState.SETTINGS"
        @notifactionSettingsChanged="updateNotificationRunner"
      />
      <EditTrackings
        v-if="navigationState === NavigationState.EDIT_TRACKINGS"
      />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Menu from '@/components/menu.vue';
import WaterTracking from '@/components/water-tracking.vue';
import Settings from '@/components/settings.vue';
import EditTrackings from '@/components/edit-trackings.vue';
import { initNotification } from '@/utils/notification';

import { NavigationState } from '@/utils/navigation.types';

let navigationState = ref(NavigationState.HOME);

function selectNavigation(event: NavigationState) {
  navigationState.value = event;
}
let notificationRunnerId = initNotification();

function updateNotificationRunner() {
  console.log('renew notification runner');
  notificationRunnerId = initNotification(notificationRunnerId);
}
</script>
