import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

import DateFilter from './filters/date'
import * as firebase from 'firebase'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2,
    accent: colors.red.accent2,
    secondary: colors.grey.lighten1,
    info: colors.blue.lighten1,
    warning: colors.amber.darken2,
    error: colors.red.accent4,
    success: colors.green.lighten2
  }
})

Vue.filter('date', DateFilter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDgQ64wKXo7zQLLda7pWY_VOYmbrSU_TBw',
      authDomain: 'devmeetup-3e7e5.firebaseapp.com',
      databaseURL: 'https://devmeetup-3e7e5.firebaseio.com',
      projectId: 'devmeetup-3e7e5',
      storageBucket: 'devmeetup-3e7e5.appspot.com'
    })
  }
})
