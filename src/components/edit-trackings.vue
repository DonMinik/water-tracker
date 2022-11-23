<template>
<h1>Edit Trackings</h1>
 <v-table>
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
            <v-icon   small color='accent' >
            mdi-lead-pencil
      </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang='ts'>
//TODO: load history
let history = [
  {date: '2022-11-13', water: 15},
  
  {date: '2022-04-05', water: 0},
  
  {date: '2022-12-17', water: 1}
]
</script>