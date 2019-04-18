<template>
  <h1>Hello Licence Page</h1>
</template>
<script>
export default {
  name: 'licence-page',

  mounted() {
    this.$store.dispatch('SET_LOADER', false);
  },
};
</script>
<style lang="stylus">

</style>
