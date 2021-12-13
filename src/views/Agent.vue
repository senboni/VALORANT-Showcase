<template>
  <div v-if="agent">
    <div class="grid">
      <div class="banner">
        <div class="name">{{ name }}</div>
        <div class="name">{{ name }}</div>
        <div class="name">{{ name }}</div>
        <div class="name">{{ name }}</div>
        <img class="portrait" :src="agent.fullPortrait" alt="agent banner" />
      </div>
      <section>
        <div class="role-container">
          <h4>ROLE</h4>
          <div class="role">
            <h2>{{ role }}</h2>
            <img
              class="role-icon"
              :src="agent.role.displayIcon"
              alt="role icon"
            />
          </div>
        </div>
        <div class="bio-container">
          <h4>BIOGRAPHY</h4>
          <p>{{ agent.description }}</p>
        </div>
      </section>
      <abilities :agent="agent" class="abilities"></abilities>
    </div>
  </div>
  <div v-else>Agent not found</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Agent } from "../models/agents";
import Abilities from "../components/Abilities.vue";

@Component({
  components: { Abilities },
})
export default class AgentComponent extends Vue {
  get agent(): Agent | null {
    return (
      this.agents?.find(
        (x: Agent) =>
          x.displayName.toLowerCase() == this.$route.params.name.toLowerCase()
      ) ?? null
    );
  }

  get agents(): Array<Agent> {
    return this.$store.getters.agents;
  }

  get name(): string {
    return `${this.agent?.displayName.toUpperCase()}`;
  }

  get role(): string {
    return `${this.agent?.role.displayName.toUpperCase()}`;
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "banner"
    "about"
    "abilities";
}

.banner {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 4rem auto;
  padding-top: 0;
  align-items: center;
  grid-area: banner;
  z-index: -1;
}

section {
  grid-area: about;
}

.name {
  display: inline-block;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 3.2rem;
  color: var(--primary);
}

.portrait {
  height: 20rem;
  position: absolute;
  top: -4rem;
  right: -10rem;
}

.portrait-wrapper {
  overflow: hidden;
}

.role {
  display: flex;
  align-items: center;
  margin-top: -1rem;
}

.role-icon {
  height: 2rem;
  margin-top: 1px;
  margin: 0 0.3rem;
}

.abilities {
  grid-area: abilities;
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: 30% 10% 30% 30%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "banner . about about"
      "banner . abilities abilities";
  }

  .banner {
    margin: 6rem auto;
    padding-top: 7rem;
  }

  .portrait {
    height: 30rem;
    top: 0;
    right: -12rem;
  }
}
</style>
