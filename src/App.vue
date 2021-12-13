<template>
  <div id="app">
    <section>
      <header>
        <the-logo />
        <the-nav />
      </header>
      <router-view />
    </section>
    <the-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TheLogo from "./components/TheLogo.vue";
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";

@Component({
  components: { TheLogo, TheNav, TheFooter },
})
export default class App extends Vue {
  created(): void {
    this.$store.dispatch("loadAgents");
    this.$store.dispatch("loadMaps");
    this.$store.dispatch("loadWeapons");
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  --primary: #334756;
  --secondary: #082032;
  --prim-text: #f4f4f4;
  --sec-text: #6c8496;

  font-family: Kanit, Helvetica, Arial, sans-serif;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
}

body {
  color: var(--prim-text);
  background: var(--primary);
  background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 45%)
    no-repeat;
}

a {
  text-decoration: none;
}

h2 {
  font-size: 3rem;
  font-weight: 500;
}

h4 {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--sec-text);
  margin-top: 3rem;
}

p {
  font-size: 1.25rem;
  font-weight: 300;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0 1rem;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.radius {
  border-radius: 20px;
}

.shadow {
  -webkit-box-shadow: -5px 6px 12px 2px rgba(0, 0, 0, 0.2);
  box-shadow: -5px 6px 12px 2px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 768px) {
  #app {
    max-width: 1024px;
    margin: 0 auto;
  }
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
