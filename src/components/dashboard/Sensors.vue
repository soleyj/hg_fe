<template>
<v-container class="grey lighten-5">
    <v-row
      v-for="n in 2"
      :key="n"
      :class="n === 1 ? 'mb-6' : ''"
      no-gutters
    >
      <v-col
        v-for="k in n + 1"
        :key="k"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
            <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
    name:"Sensors"

}
</script>

<style>

</style>