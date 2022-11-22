<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">

      <h1 class="text-h2 font-weight-bold">Water Tracker</h1>
       <v-icon   style="font-size:7rem;" color='accent' >mdi-cup-water
      </v-icon>
     
      <h3>Track how much you drank today!</h3>
      <p >You drank {{water}} today ({{date.toLocaleDateString()}}).</p>

      <v-btn   color="primary"
               elevation="2" @click="drink">
        drink
      </v-btn>

    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import useLocalStorage from '../utils/useLocalStorage'
let date = today()
let water = dailyWaterStorage()


function drink() {
  updateDate(); 
  water.value++;
}

function updateDate() {
  const now = today();
  if (today.toDateString() !== now.toDateString()) {
    date = now;
   water = dailyWaterStorage();
  }
}

function dailyWaterStorage() {
  return useLocalStorage(`water-${date.toDateString()}`, '0')
} 

function today() {
  return new Date(Date.now());
}
</script>

<style>
h1 {
  margin: 2.5rem;
}
h3, p {
  margin: 1rem;
}

</style>
