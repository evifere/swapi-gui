<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Film detail</h1>

        <!--v-data-table :headers="headers" :items="planet" :items-per-page="5" class="elevation-1"></v-data-table-->

        <v-card class="mx-auto" max-width="496" outlined v-if="film.title.length>0">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ film.title}}</v-list-item-title>
              <v-list-item-subtitle>directed by {{ film.director}} </v-list-item-subtitle>
              <v-list-item-subtitle >produced by {{ film.producer}} </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-12">released {{ film.release_date}} </v-list-item-subtitle>

              <v-list-item-subtitle class="mb-4">Synopsis </v-list-item-subtitle>
              <p class="mb-2">{{ film.opening_crawl}}</p>              
              <v-list-item-subtitle class="mb-4">Characters </v-list-item-subtitle>
              <v-list-item-subtitle class="characters mb-2">
                <span class="ml-2" v-for="c in film.characters" :key="c.name"><router-link :to="/people/+c.name">{{c.name }}</router-link>|</span>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" >
              <v-img :src="require('../assets/film-128.png')" class="my-3" contain height="200" />
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
  name: "FilmDetail",

  data: () => ({
    film: { title: "" }
  }),

  mounted() {
    console.log("this.$route.params", this.$route.params);
    this.$axios
      .post("http://localhost:8080/", {
        query:
          '{film( episode_id:' +
          this.$route.params.episode_id +
          ') {title episode_id opening_crawl director producer release_date characters{name}}}'
      })
      .then(response => {
        this.film = response.data.data.film;
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
.opening_crawl,.characters{
    min-height:12em;
}
</style>