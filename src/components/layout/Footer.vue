<template>
   <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
</template>

<script>
export default {
    name:"Footer",
      props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<style>

</style>