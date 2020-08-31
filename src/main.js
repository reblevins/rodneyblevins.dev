import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

import VueWaypoint from 'vue-waypoint'
Vue.use(VueWaypoint)

Vue.config.productionTip = false

Vue.directive('focus', {
	// When the bound element is inserted into the DOM...
	inserted: function (el) {
		// Focus the element
		el.focus()
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
