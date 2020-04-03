<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Planets</h1>

        <v-data-table :headers="headers" :items="planets" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PlanetList",

  data: () => ({
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Rotation period", value: "rotation_period" },
      { text: "Orbital period", value: "orbital_period" },
      { text: "Diameter", value: "diameter" },
      { text: "Climate", value: "climate" },
      { text: "Terrain", value: "terrain" }
    ],
    planets: []
  }),

  mounted() {
    this.$axios
      .post("http://localhost:8080/", {
        query:
          "{planets {name rotation_period orbital_period diameter climate terrain}}"
      })
      .then(response => {
        this.planets.push(...response.data.data.planets);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
