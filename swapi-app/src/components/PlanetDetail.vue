<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Planet detail</h1>

        <!--v-data-table :headers="headers" :items="planet" :items-per-page="5" class="elevation-1"></v-data-table-->

        <v-card class="mx-auto" max-width="344" outlined v-if="planet.name.length>0">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                inhabited by  {{ planet.population}}
                <!--v-btn :to="'/planet/'+planet.homeworld.name" icon>
                  <v-icon>mdi-eye</v-icon>
                </v-btn-->
              </div>
              <v-list-item-title class="headline mb-1">{{ planet.name}}</v-list-item-title>
              <v-list-item-subtitle>Rotation period : {{ planet.rotation_period}}</v-list-item-subtitle>
              <v-list-item-subtitle>Orbital period : {{ planet.orbital_period}}</v-list-item-subtitle>
              <v-list-item-subtitle>Diameter : {{ planet.diameter}}</v-list-item-subtitle>
              <v-list-item-subtitle>Eye color : {{ planet.eye_color}}</v-list-item-subtitle>
              <v-list-item-subtitle>Climate : {{ planet.climate}}</v-list-item-subtitle>
              <v-list-item-subtitle>Terrain : {{ planet.terrain}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" >
              <v-img :src="require('../assets/planet-96.png')" class="my-3" contain height="200" />
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn to="/planets" text>Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PeopleDetail",

  data: () => ({
    planet: { name: "" }
  }),

  mounted() {
    console.log("this.$route.params", this.$route.params);
    this.$axios
      .post("http://localhost:8080/", {
        query:
          '{planet( name:"' +
          this.$route.params.name +
          '") {name population rotation_period orbital_period diameter climate terrain}}'
      })
      .then(response => {
        this.planet = response.data.data.planet;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
