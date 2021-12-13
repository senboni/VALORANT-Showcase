<template>
  <div>
    <main>
      <h1>Discover all things <span>VALORANT</span>.</h1>
      <p>
        World-leading tool for quickly finding any information related to Riot
        Games’ tactical FPS.
      </p>
      <router-link to="/about" class="radius shadow">Learn more</router-link>
      <img alt="jett portrait" src="../assets/jett-fullportrait.png" />
    </main>
    <featured-agent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeaturedAgent from "../components/FeaturedAgent.vue";

@Component({
  components: { FeaturedAgent },
})
export default class Home extends Vue {}
</script>

<style scoped>
main {
  display: grid;
  justify-items: start;
  row-gap: 1.5rem;
  padding: 5rem 0rem 3rem 0;
  position: relative;
}

main::before,
main::after {
  display: none;
  content: "";
  position: absolute;
  top: -5rem;
  right: -1.75rem;
  z-index: -2;
  background: var(--prim-text);
}

main::before {
  height: 32rem;
  width: 0.15rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    var(--prim-text) 20%,
    var(--prim-text) 180%,
    rgba(0, 0, 0, 0) 100%
  );
}

main::after {
  height: 9rem;
  width: 0.3rem;
}

h1 {
  font-size: 2.75rem;
  font-weight: 300;
  line-height: 3rem;
  max-width: 37rem;
}

h1 span {
  font-weight: 700;
}

p {
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.8rem;
  color: var(--sec-text);
  max-width: 20rem;
}

.text-shadow {
  text-shadow: rgba(0, 0, 0, 0.4) 3px 6px 15px;
}

a {
  border: none;
  padding: 0.25rem 1.5rem;
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--prim-text);
  background: rgb(51, 71, 86);
  background: linear-gradient(
    300deg,
    rgba(51, 71, 86, 1) 0%,
    rgba(67, 96, 118, 1) 100%
  );
}

a:hover {
  cursor: pointer;
  background: rgba(67, 96, 118, 1);
}

img {
  position: absolute;
  height: 25rem;
  right: 0;
  filter: grayscale(25%) blur(1px);
  z-index: -1;
}

@media screen and (min-width: 768px) {
  main {
    padding: 7rem 0rem 3rem 0;
  }

  p {
    max-width: 30rem;
  }

  img {
    height: 33rem;
    top: 1rem;
    right: 3.3rem;
    filter: grayscale(25%) blur(0);
    z-index: -1;
  }
}

@media screen and (min-width: 1100px) {
  main::before,
  main::after {
    display: block;
  }
}
</style>
