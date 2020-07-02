<template>
  <div>
    <label for="password">pw : </label>
    <input
      v-on:keyup.prevent="getPassword"
      v-model="password"
      id="password"
      type="password"
    />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      password: "",
    };
  },
  methods: {
    getPassword: function() {
      this.$emit('pass', this.password);
    },
  },
};
</script>

<style></style>
