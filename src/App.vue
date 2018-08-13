<template lang="html">
    <div>
        <app-header></app-header>
		<!-- <phoneCard></phoneCard> -->
		<router-view></router-view>
		<app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from "./components/header.vue";
import appFooter from "./components/footer.vue";
import phoneCard from "./components/phone/phone.vue";

export default {
	components: {
		appHeader,
		appFooter,
		phoneCard
	},
	name: "app",
	data() {
		return {
			
		};
	}
};
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/css/common.css";
@import "./assets/css/fonts.css";

</style>
