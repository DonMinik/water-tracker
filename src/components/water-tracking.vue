<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">

     
     
      <p>Track how much you drank today!</p>
         <h2 >You drank <b>{{waterOfToday()}} ml</b> today <br>({{date.toLocaleDateString()}}).</h2>
   
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
import useLocalStorage from '@/utils/useLocalStorage'
import {HistoryEntry} from '@/utils/model'

let date = today()
let history = useLocalStorage('history', [{date: date.toDateString(), water: 0 }])
const size = useLocalStorage('size', 200)

function waterOfToday(): HistoryEntry {
  return history.value.find((entry: HistoryEntry) => entry.date === date.toDateString())?.water;
}

function drink() {
  updateDate(); 
  let updatedHistory = history.value;
  let entry = updatedHistory.find((entry: HistoryEntry) => entry.date === date.toDateString());
  entry.water += size.value;
  history.value = updatedHistory
}

function updateDate() {
  const now = today();
  if (date.toDateString() !== now.toDateString()) {
    date = now;
  }
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
