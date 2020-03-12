<template>
	<nav id="nav">
		<p class="logo">The Travel App</p>
		<ul class="nav-links">
			<li class="links">
				<router-link to="/">Home</router-link>
			</li>
			<li v-for="destination in destinations"
                :key="destination.name"
                class="links" 
			>
			<router-link
                   :to="{
                   	name:'DestinationDetails',
                   	params:{slug: destination.slug}
                   }"
			>
			{{ destination.name}}
		</router-link>
				
			</li>
			
		</ul>
		
		<!-- <router-link to="/brazil">Brazil</router-link>
		<router-link to="/panama">Panama</router-link>
		<router-link to="/hawaii">Hawaii</router-link>
		<router-link to="/jamaica">Jamaica</router-link> -->
	</nav>
</template>
<script>
	import store from "@/store";
	export default{
		data(){
			return{
				destinations: store.destinations

			};
		}
	};
</script>

<style scoped>
#nav {
	display: flex;
}
#nav a{
	color: #2c3e50;
	text-decoration: none;
	font-weight: bold;
}
#nav a.vue-shcool-active-class {
  color: #ab26ab;
}
.nav-links{
	display: flex;

}
.links{
	padding-right: 20px;
	list-style: none;
}
.links:hover{
	text-decoration: underline;
}
.logo{
	font-size: 20px;
	color:purple;
    font-weight: bold;	
}

	</style>
