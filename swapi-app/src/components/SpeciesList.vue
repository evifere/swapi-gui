<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Species</h1>

        <v-data-table :headers="headers" :items="species" :items-per-page="5" class="elevation-1">
          <template v-slot:item.name="{ item }">
            <v-btn :to="'/species/'+item.name" icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            {{ item.name }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SpeciesList",

  data: () => ({
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Classification", value: "classification" },
      { text: "Designation", value: "designation" },
      { text: "Average height", value: "average_height" },
      { text: "Skin colors", value: "skin_colors" },
      { text: "Hair colors", value: "hair_colors" }
    ],
    species: []
  }),

  mounted() {
    this.$axios
      .post("http://localhost:8080/", {
        query:
          "{species {name classification designation average_height skin_colors hair_colors}}"
      })
      .then(response => {
        this.species.push(...response.data.data.species);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
