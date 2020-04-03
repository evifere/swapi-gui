<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to swapi app</h1>

        <v-data-table :headers="headers" :items="peoples" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PeopleList",

  data: () => ({
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Height", value: "height" },
      { text: "Mass (g)", value: "mass" },
      { text: "Hair color", value: "hair_color" },
      { text: "Skin color", value: "skin_color" },
      { text: "Birth year", value: "birth_year" }
    ],
    peoples: []
  }),

  mounted() {
    this.$axios
      .post("http://localhost:8080/", {
        query:
          "{people(skip:10 first:0) {name height mass hair_color skin_color birth_year gender}}"
      })
      .then(response => {
        this.peoples.push(...response.data.data.people);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
