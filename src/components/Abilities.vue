<template>
  <div class="abilities-container">
    <h4>ABILITIES</h4>
    <div class="abil-icons">
      <img
        v-for="(abil, index) in abilities"
        :key="abil.displayName"
        :src="abil.displayIcon"
        :alt="abil.displayName"
        class="abil-icon radius"
        :class="[index === activeAbilityIndex ? 'active' : '']"
        @click="setActiveAbility(index)"
      />
    </div>
    <div>
      <h2>
        {{ name }}
      </h2>
      <h2 class="hotkey">{{ hotkey }}</h2>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Agent, Ability } from "../models/agents";

@Component
export default class Abilities extends Vue {
  @Prop(Object) readonly agent!: Agent;
  activeAbilityIndex = Math.floor(Math.random() * 4);

  get abilities(): Ability[] {
    return this.agent.abilities.slice(0, 4);
  }

  get activeAbility(): Ability {
    return this.abilities[this.activeAbilityIndex];
  }

  get name(): string {
    return this.activeAbility.displayName.toUpperCase();
  }

  get hotkey(): string {
    switch (this.activeAbility.slot) {
      case "Ability1":
        return "(Q)";
      case "Ability2":
        return "(E)";
      case "Grenade":
        return "(C)";
      case "Ultimate":
        return "(X)";
      default:
        return "";
    }
  }

  get description(): string {
    return this.activeAbility.description;
  }

  setActiveAbility(index: number): void {
    this.activeAbilityIndex = index;
  }
}
</script>

<style scoped>
h2 {
  display: inline-block;
  line-height: 2.5rem;
  margin-right: 0.5rem;
}

.hotkey {
  color: var(--sec-text);
  font-weight: 300;
}

p {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: var(--sec-text);
}

.abil-icons {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}

.abil-icon {
  opacity: 0.3;
  height: 3.5rem;
  margin-bottom: 1rem;
}

.abil-icon:hover {
  cursor: pointer;
  opacity: 1;
}

.active {
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .abilities-container {
    min-height: 34rem;
  }

  .abil-icons {
    justify-content: start;
    gap: 3rem;
    margin-top: 0.5rem;
  }
}
</style>
