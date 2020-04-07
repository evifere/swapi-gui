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
      <v-btn to="/" icon>
        <v-icon circle>mdi-home</v-icon>
      </v-btn>
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
