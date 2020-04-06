<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to swapi app</h1>

        <v-data-table :headers="headers" :items="person" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PeopleDetail",

  data: () => ({
    headers: [
      {
        text: "Name",
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
    person: []
  }),

  mounted() {
      console.log('this.$route.params',this.$route.params)
    this.$axios
      .post("http://localhost:8080/", {
        query:
          '{person( name:"'+this.$route.params.name+'") {name height mass hair_color skin_color birth_year gender}}'
      })
      .then(response => {
        this.person.push(response.data.data.person);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
