<template>
  <button v-on:click="passEvent">click me!!!</button>
</template>

<script>
export default {
  methods: {
    passEvent: function() {
      this.$emit('pass');
    },
  },
};
</script>

<style></style>
