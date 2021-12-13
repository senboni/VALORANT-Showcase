import Vue from "vue";
import Vuex from "vuex";
import { Agent } from "../models/agents";
import { Map } from "../models/maps";
import { Weapon } from "../models/weapons";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    agentsResponse: Array<Agent>(),
    mapsResponse: Array<Map>(),
    weaponsResponse: Array<Weapon>(),
  },
  mutations: {},
  actions: actions,
  modules: {},
  getters: {
    agents: (state) => state.agentsResponse[0],
    maps: (state) => state.mapsResponse[0],
    weapons: (state) => state.weaponsResponse[0],
  },
});

export default store;
