<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Films</h1>

        <v-data-table :headers="headers" :items="films" :items-per-page="5" class="elevation-1">
          <template v-slot:item.title="{ item }">
            <v-btn :to="'/films/'+item.episode_id" icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            {{ item.title }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FilmList",

  data: () => ({
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title"
      },
      { text: "Episode ID", value: "episode_id" },
      /* { text: "Opening crawl", value: "opening_crawl" },*/
      { text: "Director", value: "director" },
      { text: "Producer", value: "producer" },
      { text: "Release date", value: "release_date" }
    ],
    films: []
  }),

  mounted() {
    this.$axios
      .post("http://localhost:8080/", {
        query:
          "{films {title episode_id opening_crawl director producer release_date}}"
      })
      .then(response => {
        this.films.push(...response.data.data.films);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
