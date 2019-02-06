<template>
  <div id="app">

    <!--header-->
    <div class="navbar">
      <div class="navbar-brand">
        <!--put logo here-->
        <h1 class="title is-4"> logo +  foxcycle </h1>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item is-tab" to="/" exact-active-class="is-active">Home</router-link> 
          <router-link class="navbar-item is-tab" to="/about" exact-active-class="is-active">About</router-link>
          <router-link class="navbar-item is-tab" to="/shopall" exact-active-class="is-active">Shop All</router-link>
          <div class="navbar-item has-dropdown is-hoverable"> 
              <router-link class="navbar-item is-tab " to="/" exact-active-class="is-active">Shop Bikes</router-link>
              <div class="navbar-dropdown">
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Mountain</router-link>
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Path</router-link>
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Kids</router-link>
              </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable"> 
              <router-link class="navbar-item is-tab " to="/" exact-active-class="is-active">Shop Parts</router-link>
              <div class="navbar-dropdown">
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/" exact-active-class="is-active">Idk</router-link>
              </div>
          </div>
          <router-link class="navbar-item is-tab" to="/" exact-active-class="is-active">Services</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">

            <div class="buttons">

              <a class="button is-light">
                Orders
              </a>
              <a class="button is-light">
                Cart
              </a>
              <a class="button is-light" v-on:click="showLoginModal()">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--get rid of these-->
    <router-view/>
    <Login v-bind:is-showing="showLogin" v-on:success="successLogin()" v-on:cancel="cancelLogin()"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Signup from "@/components/Signup.vue";
import Login from "@/components/Login.vue";

@Component({
  components: {
    Signup,
    Login
  }
})
export default class App extends Vue {
  public showSignup: boolean = false;
  public showLogin: boolean = false;

  showSignupModal() {
    this.showSignup = true;
  }
  successSignup() {
    this.showSignup = false;
  }
  cancelSignup() {
    this.showSignup = false;
  }
  showLoginModal() {
    this.showLogin = true;
  }
  successLogin() {
    this.showLogin = false;
  }
  cancelLogin() {
    this.showLogin = false;
  }
}
</script>


<style lang="scss">
@import "~bulma/css/bulma.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}

</style>
