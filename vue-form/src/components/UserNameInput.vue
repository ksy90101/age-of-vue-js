<template>
  <div>
    <label for="username">id : </label>
    <input v-on:keyup="setUserName" v-model="username" id="username" type="text" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      username: "",
    };
  },
  methods:{
      setUserName:function(){
          this.$emit('pass', this.username)
      }
  }
};
</script>

<style></style>
