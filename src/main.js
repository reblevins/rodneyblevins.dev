import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueWaypoint from 'vue-waypoint'
Vue.use(VueWaypoint)

Amplify.configure(aws_exports);


library.add(faSpinner, faCloudUploadAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch()

import Loading from '@/components/Loading'
Vue.component('loading', Loading)
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
