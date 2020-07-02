<template>
  <div>
    <form v-on:submit.prevent="login">
      <user-name-input v-on:pass="setUserName"></user-name-input>
      <password-input v-on:pass="setPassword"></password-input>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import userNameInput from "./UserNameInput";
import passwordInput from "./PasswordInput";
import axios from "axios";

export default {
  components: {
    "user-name-input": userNameInput,
    "password-input": passwordInput,
  },
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    setUserName: function(username) {
      this.username = username;
    },
    setPassword: function(password) {
      this.password = password;
    },
    login: function() {
      const url = "https://jsonplaceholder.typicode.com/users";
      const data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
