<template>
  <div id="app">
  	<div class="container">
  		<app-topNav></app-topNav>
  		<div class="container">
  			<div class="row">
	  			<div class="col-md-3">
	  				<app-leftNav></app-leftNav>
	  			</div>
  				<div class="col-md-9">
  					<router-view></router-view>
  				</div>
  			</div>
  		</div>
			<app-musicControl></app-musicControl>
  	</div>

  	
  </div>
</template>

<script>
import { bus } from './components/bus.js'
import leftNav from './components/navigation/leftNav.vue';
import topNav from './components/navigation/topNav.vue';
import musicControl from './components/musicControl/musicControl.vue';

export default {
  components: {
  	appLeftNav: leftNav,
  	appTopNav: topNav,
  	appMusicControl: musicControl
  },
	created(){
		this.$store.dispatch('initSongs');
	}
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
