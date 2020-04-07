<template>
  <v-container>
    <!--p>
      <router-link to="/vehicles/Snowspeeder">Go to Vehicles Snowspeeder</router-link>|
      <router-link to="/starships/Millennium Falcon">Go to Starship Millennium Falcon</router-link>|
      <router-link to="/species/Trandoshan">Go to Species Trandoshan</router-link>|
      <router-link to="/planets/Alderaan">Go to Planet Alderaan</router-link>|
      <router-link to="/people/C-3PO">Go to People C-3PO</router-link>|
      <router-link to="/films/1">Go to film episode 1</router-link>|
    </p-->
    <v-row class="mb-10 justify-center">
      <v-card class="mx-4" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="require('./assets/people_category.png')"
        >
          <v-card-title>Characters</v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn to="/people" color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-4" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="require('./assets/planet_category.png')"
        >
          <v-card-title>Planets</v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn to="/planets" color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-4" max-width="400">
        <v-img
          class="orange--text align-end"
          height="200px"
          :src="require('./assets/species_category.png')"
        >
          <v-card-title>Species</v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn to="/species" color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row class="justify-center">
      <v-card class="mx-4" max-width="400">
        <v-img
          class="orange--text align-end"
          height="200px"
          :src="require('./assets/starship_category.png')"
        >
          <v-card-title>Starships</v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn to="/starships" color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-4" max-width="256">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="require('./assets/film_category.png')"
        >
          <v-card-title>Films</v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn to="/films" color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-4" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="require('./assets/vehicle_category.png')"
        >
          <v-card-title>Vehicles</v-card-title>
        </v-img>
        <v-card-actions>
          <v-btn to="/vehicles" color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
