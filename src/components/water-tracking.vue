<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">

     
     
      <p>Track how much you drank today!</p>
         <h2 >You drank <b>{{water}}ml</b> today <br>({{date.toLocaleDateString()}}).</h2>

     
   
      <v-btn   color="primary" variant="outlined" class='drinkBtn'
               elevation="5" @click="drink">
        <v-icon elevation='14' @click="drink"  style="font-size:7rem;" color='accent' >mdi-cup-water
      </v-icon>
      </v-btn>

    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import useLocalStorage from '../utils/useLocalStorage'
let date = today()
let water = dailyWaterStorage()
const size = useLocalStorage('size', 200)
console.log(size.value)
function drink() {
  updateDate(); 
  water.value = water.value + size.value;
}

function updateDate() {
  const now = today();
  if (date.toDateString() !== now.toDateString()) {
    date = now;
   water = dailyWaterStorage();
  }
}

function dailyWaterStorage() {
  return useLocalStorage(`water-${date.toDateString()}`, 0)
} 

function today() {
  return new Date(Date.now());
}
</script>

<style>
h2 {
  margin: 2rem;
}
h3, p {
  margin: 2rem;
}

.drinkBtn {
 height: 8rem !important;
}

</style>
