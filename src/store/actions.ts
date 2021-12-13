import { Agent } from "../models/agents";

export default {
  loadAgents(store: any): void {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const agents = data.data.filter((x: Agent) => x.fullPortrait);

        agents.forEach((x: Agent) => {
          x.displayName = x.displayName.replace("/", "-");
        });

        store.state.agentsResponse.push(agents);
      });
  },
  loadMaps(store: any): void {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        store.state.mapsResponse.push(data.data);
      });
  },
  loadWeapons(store: any): void {
    fetch("https://valorant-api.com/v1/weapons")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        store.state.weaponsResponse.push(data.data);
      });
  },
};
