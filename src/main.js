import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'

import DateFilter from './filters/date'
import ErrorAlert from './components/Shared/ErrorAlert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterMeetupDialog from './components/Meetup/Registration/RegisterMeetupDialog.vue'

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
Vue.component('err-alert', ErrorAlert)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterMeetupDialog)

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
      storageBucket: 'gs://devmeetup-3e7e5.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
