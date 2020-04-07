<template>
  <v-container>
      <p>
        <router-link to="/vehicles">Go to Vehicles</router-link>|
        <router-link to="/vehicles/Snowspeeder">Go to Vehicles Snowspeeder</router-link>|
        <router-link to="/starships">Go to Starships</router-link>|
        <router-link to="/starships/Millennium Falcon">Go to Starship Millennium Falcon</router-link>|
        <router-link to="/species">Go to Species</router-link>|
        <router-link to="/species/Trandoshan">Go to Species Trandoshan</router-link>|
      </p>
      <p>
        <router-link to="/planets">Go to Planets</router-link>|
        <router-link to="/planets/Alderaan">Go to Planet Alderaan</router-link>|
        <router-link to="/people">Go to People</router-link>|
        <router-link to="/people/C-3PO">Go to People C-3PO</router-link>|
        <router-link to="/films">Go to Films</router-link>|
        <router-link to="/films/1">Go to film episode 1</router-link>|
      </p>
  </v-container>
</template>

<script>
export default {
  name: "Home",

};
</script>
