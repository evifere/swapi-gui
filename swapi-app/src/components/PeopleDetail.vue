<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">People detail</h1>

        <!--v-data-table :headers="headers" :items="person" :items-per-page="5" class="elevation-1"></v-data-table-->

        <v-card class="mx-auto" max-width="344" outlined v-if="person.name.length>0">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                from {{ person.homeworld.name}}
                <v-btn :to="'/planets/'+person.homeworld.name" icon>
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </div>
              <v-list-item-title class="headline mb-1">{{ person.name}}</v-list-item-title>
              <v-list-item-subtitle>Height : {{ person.height}}</v-list-item-subtitle>
              <v-list-item-subtitle>Mass : {{ person.mass}}</v-list-item-subtitle>
              <v-list-item-subtitle>Hair color : {{ person.hair_color}}</v-list-item-subtitle>
              <v-list-item-subtitle>Skin color : {{ person.skin_color}}</v-list-item-subtitle>
              <v-list-item-subtitle>Eye color : {{ person.eye_color}}</v-list-item-subtitle>
              <v-list-item-subtitle>Gender : {{ person.gender}}</v-list-item-subtitle>
              <v-list-item-subtitle>Birth year : {{ person.birth_year}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn to="/people" text>Back</v-btn>
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
    person: { name: "" }
  }),

  mounted() {
    console.log("this.$route.params", this.$route.params);
    this.$axios
      .post("http://localhost:8080/", {
        query:
          '{person( name:"' +
          this.$route.params.name +
          '") {name height mass hair_color skin_color birth_year gender homeworld{name}}}'
      })
      .then(response => {
        this.person = response.data.data.person;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
