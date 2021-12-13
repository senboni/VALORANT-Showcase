<template>
  <div v-if="$store.getters.agents">
    <input
      type="text"
      v-model="searchTerm"
      class="shadow radius"
      placeholder="filter by name or role..."
    />
    <section>
      <button
        v-for="agent in agents"
        :key="agent.uuid"
        @click="redirect(agent)"
        class="shadow radius"
        :style="{ backgroundImage: 'url(' + agent.killfeedPortrait + ')' }"
      >
        {{ agent.displayName.toUpperCase() }}
        <img :src="agent.role.displayIcon" :alt="agent.displayName + ' role'" />
      </button>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Agent } from "../models/agents";

@Component
export default class Agents extends Vue {
  searchTerm = "";

  get agents(): Array<Agent> {
    if (this.searchTerm) {
      const filtered = this.$store.getters.agents
        .sort((a: Agent, b: Agent) =>
          a.displayName > b.displayName
            ? 1
            : b.displayName > a.displayName
            ? -1
            : 0
        )
        .filter(
          (x: Agent) =>
            x.displayName
              .toUpperCase()
              .includes(this.searchTerm.toUpperCase()) ||
            x.role.displayName
              .toUpperCase()
              .includes(this.searchTerm.toUpperCase())
        );

      return filtered;
    }

    return this.$store.getters.agents;
  }

  redirect(agent: Agent): void {
    this.$router.push(`/agent/${agent.displayName.toLowerCase()}`);
  }
}
</script>

<style scoped>
input {
  display: block;
  background: var(--prim-text);
  color: var(--secondary);
  border: none;
  margin: 0 auto 2rem auto;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  width: 100%;
  max-width: unset;
}

input::placeholder {
  color: var(--sec-text);
}

input:focus {
  outline: var(--sec-text) 1px solid;
}

section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

button {
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  background: no-repeat;
  border: none;
  color: var(--prim-text);
  text-align: end;
  text-shadow: -2px 3px 4px black;
}

button:hover {
  cursor: pointer;
  background: var(--primary) no-repeat;
}

button img {
  height: 1rem;
}

@media screen and (min-width: 544px) {
  input {
    max-width: 22rem;
  }
  section {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 880px) {
  section {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
