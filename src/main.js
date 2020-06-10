import Vue		from 'vue'
import App		from './App.vue'
import store	from './store'
import router   from './router'
import vuetify	from './plugins/vuetify';
import map		from './plugins/map';

Vue.config.productionTip = false

new Vue({
	store,
	router,
	vuetify,
	map,
	render: h => h(App)
}).$mount('#app')