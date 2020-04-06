import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/axios'
import App from './App.vue'
import PeopleList from './components/PeopleList.vue'
import PeopleDetail from './components/PeopleDetail.vue'
import FilmList from './components/FilmList.vue'
import FilmDetail from './components/FilmDetail.vue'
import PlanetList from './components/PlanetList.vue'
import PlanetDetail from './components/PlanetDetail.vue'
import SpeciesList from './components/SpeciesList.vue'
import StarshipList from './components/StarshipList.vue'
import VehicleList from './components/VehicleList.vue'


import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

// 0. If using a module system, call Vue.use(VueRouter)
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
//const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/species', component: SpeciesList },
  { path: '/people', component: PeopleList },
  { path: '/people/:name', component: PeopleDetail },
  { path: '/films', component: FilmList },
  { path: '/films/:episode_id', component: FilmDetail },
  { path: '/planets', component: PlanetList },
  { path: '/planets/:name', component:   PlanetDetail},
  { path: '/starships', component: StarshipList },
  { path: '/vehicles', component: VehicleList },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
