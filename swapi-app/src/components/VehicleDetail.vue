<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Vehicle detail</h1>

        <!--v-data-table :headers="headers" :items="vehicle" :items-per-page="5" class="elevation-1"></v-data-table-->

        <v-card class="mx-auto" max-width="344" outlined v-if="vehicle.name.length>0">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ vehicle.vehicle_class}}</div>
              <!--          '") {name model manufacturer cost_in_credits length max_atmosphering_speed crew cargo_capacity
              consumables hyperdrive_rating MGLT vehicle_class films {title} pilots{name}}}'-->
              <v-list-item-title class="headline mb-1">{{ vehicle.name}}</v-list-item-title>
              <v-list-item-subtitle>Model : {{ vehicle.model}}</v-list-item-subtitle>
              <v-list-item-subtitle>Manufacturer: {{ vehicle.manufacturer}}</v-list-item-subtitle>
              <v-list-item-subtitle>Cost in credits : {{ vehicle.cost_in_credits}}</v-list-item-subtitle>
              <v-list-item-subtitle>Length : {{ vehicle.length}}</v-list-item-subtitle>
              <v-list-item-subtitle>Max atmosphering speed : {{ vehicle.max_atmosphering_speed}}</v-list-item-subtitle>
              <v-list-item-subtitle>Crew : {{ vehicle.crew}}</v-list-item-subtitle>
              <v-list-item-subtitle class="mb-2">Cargo capacity : {{ vehicle.cargo_capacity}}</v-list-item-subtitle>

              <v-list-item-subtitle>Appears in movies :</v-list-item-subtitle>
              <p class="mb-2 films">
                <span class="ml-2" v-for="f in vehicle.films" :key="f.title"><router-link :to="/films/+f.episode_id">{{f.title }}</router-link><br/></span>
              </p>

              <v-list-item-subtitle v-if="vehicle.pilots.length>0">Pilots :</v-list-item-subtitle>
              <p class="mb-2 pilots" v-if="vehicle.pilots.length>0">
                <span class="ml-2" v-for="p in vehicle.pilots" :key="p.name"><router-link :to="/people/+p.name">{{p.name }}</router-link><br/></span>
              </p>

            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <v-img
                :src="require('../assets/vehicle-128.png')"
                class="my-3"
                contain
                height="200"
              />
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <a href="javascript:history.go(-1)">Go Back</a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SpeciesDetail",

  data: () => ({
    vehicle: { name: "" }
  }),

  mounted() {
    console.log("this.$route.params", this.$route.params);
    this.$axios
      .post("http://localhost:8080/", {
        query:
          '{vehicle( name:"' +
          this.$route.params.name +
          '") {name model manufacturer cost_in_credits length max_atmosphering_speed crew cargo_capacity consumables vehicle_class films {title episode_id} pilots{name}}}'
      })
      .then(response => {
        this.vehicle = response.data.data.vehicle;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
<style scoped>
p.films, p.pilots{
    font-size: 14px;
}
</style>