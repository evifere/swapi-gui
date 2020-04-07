<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img :src="require('./assets/logo.svg')" class="my-3" contain height="50" />        
        <span class="ml-2">Swapi-app</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <p>
        <router-link to="/vehicles">Go to Vehicles</router-link>|
        <router-link to="/starships">Go to Starships</router-link>|
        <router-link to="/species">Go to Species</router-link>|
        <router-link to="/species/Trandoshan">Go to Species Trandoshan</router-link>|
        <router-link to="/planets">Go to Planets</router-link>|
        <router-link to="/people">Go to People</router-link>|
        <router-link to="/people/C-3PO">Go to People C-3PO</router-link>|
        <router-link to="/films">Go to Films</router-link>|
        <router-link to="/films/1">Go to film episode 1</router-link>|

      </p>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  /*components: {
    HelloWorld,
  },*/

  data: () => ({
    //
  })
};
</script>
