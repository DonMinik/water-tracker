<template>
<h1>Edit Trackings</h1>
 <v-table class='history-table'     fixed-header
height="65vh">
    <thead>
      <tr>
        <th class="text-left">
          Date
        </th>
        <th class="text-left">
          Water drunken
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in history"
        :key="item.name"
      >
        <td>{{ item.date }}</td>
        <td>{{ item.water }}</td>
        <td>
            <v-icon   small color='accent' @click="edit(item)">
            mdi-lead-pencil
      </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
    <v-dialog class="dialog"
      v-model="dialog"
    >
      <v-card>
        <v-text-field type='number' label="Water drunken" v-model.number='changedWater'></v-text-field>

        <v-card-actions>
          <v-btn color="secondary" @click="dialog = false">Close</v-btn>
          <v-btn color="primary"  @click="updateHistory()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <span>You reached your goal {{goalReached}}% of the time</span>
</template>
<script setup lang='ts'>

  import useLocalStorage from '@/utils/useLocalStorage'
  import {HistoryEntry} from '@/utils/model'
  import { ref } from 'vue'

  let history = useLocalStorage('history', [])
  let dialog = ref(false);
  let entryToChange: HistoryEntry;
  let changedWater: number;

  const goal = useLocalStorage('goal', 2000)

  let goalReached = ref(calculateGoal())

  function edit (entry: HistoryEntry) {
    entryToChange = entry
    changedWater = entry.water
    dialog.value = true;
  }

  function updateHistory() {
    dialog.value = false;
    let updatedHistory = history.value;
    let entry = updatedHistory.find((entry: HistoryEntry) => entry.date === entryToChange.date);
    entry.water = changedWater;
    history.value = updatedHistory
    calculateGoal();
  }

  function calculateGoal(): number {
    let reached = 0;
      history.value.forEach(entry => {
        if(entry.water >= goal.value) {
          reached++;
        }
      }
      )
      return Math.round(reached / history.value.length * 100)
  }

</script>
<style>
span {
  margin: 1rem 

}
</style>