<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Vehicles</h1>

        <v-data-table :headers="headers" :items="vehicles" :items-per-page="5" class="elevation-1">
          <template v-slot:item.name="{ item }">
            <v-btn :to="'/vehicles/'+item.name" icon>
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
  name: "VehicleList",

  data: () => ({
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Model", value: "model" },
      { text: "Designation", value: "designation" },
      { text: "Manufacturer", value: "manufacturer" },
      { text: "Cost In credits", value: "cost_in_credits" },
      { text: "Length", value: "length" },
      { text: "Max atmosphering speed", value: "max_atmosphering_speed" },
      { text: "Crew", value: "crew" }
    ],
    vehicles: []
  }),

  mounted() {
    this.$axios
      .post("http://localhost:8080/", {
        query:
          "{vehicles {name model manufacturer cost_in_credits length max_atmosphering_speed crew}}"
      })
      .then(response => {
        this.vehicles.push(...response.data.data.vehicles);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
