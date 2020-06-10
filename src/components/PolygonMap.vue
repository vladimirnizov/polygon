<template lang="pug">
	v-container
		gmap-map(:center="center" :zoom="10" style="width:100%;  height: 80vh;")
			gmap-polygon(:paths="paths")
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['center', 'paths'])
	},
};
</script>
