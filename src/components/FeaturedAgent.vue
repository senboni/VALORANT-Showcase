<template>
  <div v-if="agentsLoaded" class="wrapper">
    <img alt="featured agent portrait" :src="agent.fullPortrait" />
    <section>
      <div>
        <p>FEATURED AGENT</p>
        <h1>{{ name }}</h1>
      </div>
      <div class="agent-class">
        <img alt="featured agent role" :src="agent.role.displayIcon" />
        <h3>{{ role }}</h3>
      </div>
      <p>{{ description }}</p>
      <router-link :to="link" class="radius shadow">More info</router-link>
    </section>
  </div>
  <spinner v-else></spinner>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Spinner from "../components/Spinner.vue";
import { Agent } from "../models/agents";

@Component({
  components: { Spinner },
})
export default class FeaturedAgent extends Vue {
  get agentsLoaded(): boolean {
    return this.$store.getters.agents;
  }

  get agent(): Agent {
    const agents = this.$store.getters.agents;
    const index = Math.floor(Math.random() * agents.length);
    return agents[index];
  }

  get name(): string {
    return this.agent.displayName.toUpperCase().trim();
  }

  get role(): string {
    return this.agent.role.displayName.toUpperCase().trim();
  }

  get description(): string {
    return this.agent.description.trim();
  }

  get link(): string {
    return `/agent/${this.agent.displayName.toLowerCase()}`;
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: start;
  justify-items: center;
  margin-top: 6rem;
}

section {
  display: grid;
  gap: 1.2rem;
  justify-items: start;
  position: relative;
}

section::before,
section::after {
  content: "";
  position: absolute;
  left: -2rem;
  z-index: -2;
  background: var(--prim-text);
}

section::before {
  height: 32rem;
  width: 0.15rem;
  top: -5rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    var(--prim-text) 20%,
    var(--prim-text) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

section::after {
  height: 10rem;
  width: 0.3rem;
  top: -1rem;
}

h1 {
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 3rem;
  max-width: 37rem;
}

p {
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.8rem;
  color: var(--sec-text);
  max-width: 20rem;
}

.agent-class {
  display: flex;
  align-items: center;
}

.agent-class img {
  height: 1.2rem;
  margin-right: 0.4rem;
}

img {
  filter: none;
  height: 25rem;
  z-index: -1;
}

h1 {
  font-size: 4rem;
  margin-top: -0.25rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 400;
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

@media screen and (min-width: 768px) {
  .wrapper {
    grid-template-columns: 30% 50%;
    margin-top: 8rem;
    align-items: center;
    justify-content: center;
  }

  section {
    padding-left: 0;
  }

  section::before,
  section::after {
    left: -3rem;
  }

  img {
    height: 45rem;
  }
}
</style>
