<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Starships</h1>

        <v-data-table :headers="headers" :items="starships" :items-per-page="5" class="elevation-1">
          <template v-slot:item.name="{ item }">
            <v-btn :to="'/starships/'+item.name" icon>
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
  name: "StartshipList",

  data: () => ({
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Model", value: "model" },
      { text: "Manufacturer", value: "manufacturer" },
      { text: "Cost In credits", value: "cost_in_credits" },
      { text: "Length", value: "length" },
      { text: "Max atmosphering speed", value: "max_atmosphering_speed" },
      { text: "Crew", value: "crew" }
    ],
    starships: []
  }),

  mounted() {
    this.$axios
      .post("http://localhost:8080/", {
        query:
          "{starships {name model manufacturer cost_in_credits length max_atmosphering_speed crew}}"
      })
      .then(response => {
        this.starships.push(...response.data.data.starships);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
