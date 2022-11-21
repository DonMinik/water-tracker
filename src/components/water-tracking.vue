<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-icon color='accent'
        x-large
      >mdi-cup-water
      </v-icon>
      <h1 class="text-h2 font-weight-bold">Water Tracker</h1>
      <h3>Track how much you drank today!</h3>
      <p>You drank {{water}} today.</p>
      <v-btn   color="primary"
               elevation="2" @click="drink">
        drink
      </v-btn>

    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let water = ref(0);

function drink() {
  water.value++;
}
</script>

<style>
h1 {
  margin: 2rem;
}
h1, p {
  margin: 1rem;
}
</style>
