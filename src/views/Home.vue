<template lang="pug">
	#home
		v-row
			v-col
				polygon-map
</template>

<script>
import PolygonMap from '../components/PolygonMap';

export default {
	components: {
		PolygonMap
	}
};
</script>