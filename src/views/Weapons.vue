<template>
  <div>
    <div v-for="weapon in weapons" :key="weapon.uuid">
      {{ weapon.displayName }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Weapon } from "../models/weapons";

@Component
export default class Weapons extends Vue {
  get weapons(): Array<Weapon> {
    return this.$store.getters.weapons;
  }
}
</script>
