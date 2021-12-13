<template>
  <div>
    <div v-for="map in maps" :key="map.uuid">{{ map.displayName }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Map } from "../models/maps";

@Component
export default class Maps extends Vue {
  get maps(): Array<Map> {
    return this.$store.getters.maps;
  }
}
</script>
