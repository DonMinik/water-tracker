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

import useLocalStorage from '@/utils/useLocalStorage'
let history = useLocalStorage('history', [])

</script>