<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Species detail</h1>

        <!--v-data-table :headers="headers" :items="specie" :items-per-page="5" class="elevation-1"></v-data-table-->

        <v-card class="mx-auto" max-width="344" outlined v-if="specie.name.length>0">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                from {{ specie.homeworld.name}}
                <v-btn :to="'/planets/'+specie.homeworld.name" icon>
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </div>
              <v-list-item-title class="headline mb-1">{{ specie.name}}</v-list-item-title>
              <v-list-item-subtitle>Classification : {{ specie.classification}}</v-list-item-subtitle>
              <v-list-item-subtitle>Average height: {{ specie.average_height}}</v-list-item-subtitle>
              <v-list-item-subtitle>Skin colors : {{ specie.skin_colors}}</v-list-item-subtitle>
              <v-list-item-subtitle>Eye colors : {{ specie.eye_colors}}</v-list-item-subtitle>
              <v-list-item-subtitle>Average lifespan : {{ specie.average_lifespan}}</v-list-item-subtitle>
              <v-list-item-subtitle>Language : {{ specie.language}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="require('../assets/species-128.png')" class="my-3" contain height="200" />
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <a href="javascript:history.go(-1)"> Go Back</a>
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
    specie: { name: "" }
  }),

  mounted() {
    console.log("this.$route.params", this.$route.params);
    this.$axios
      .post("http://localhost:8080/", {
        query:
          '{specie( name:"' +
          this.$route.params.name +
          '") {name classification designation average_height skin_colors hair_colors eye_colors average_lifespan language homeworld{name}}}'
      })
      .then(response => {
        this.specie = response.data.data.specie;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
