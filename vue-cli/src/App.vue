<template>
  <div>
    <app-header v-bind:header="header"></app-header>
    <hello-world></hello-world>
    <div>
    </div>
      <p>Event emit</p>
      <event-emit v-on:pass="addNumber"></event-emit>
      <p>{{ num }}</p>
  </div>
</template>

<script>
import helloWorld from "./components/helloWorld";
import appHeader from "./components/AppHeader";
import eventEmit from "./components/EventEmit";

export default {
  data: function() {
    return {
      header: "Header",
      num: 0,
    };
  },
  components: {
    "hello-world": helloWorld,
    "app-header": appHeader,
    "event-emit": eventEmit,
  },
  methods: {
    addNumber: function() {   
      this.num++;
    },
  },
};
</script>

<style></style>
