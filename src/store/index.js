import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		center: { lat: 54.95, lng: 82.95 },
		paths: [[
			{ lat: 55, lng: 82.9 },
			{ lat: 55, lng: 83 },
			{ lat: 54.9, lng: 83 },
			{ lat: 54.9, lng: 82.9 }
		]]
	}
})
