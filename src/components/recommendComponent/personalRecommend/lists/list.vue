<template>
	<div class="row">
		<div class="col-md-3">
			<ul>
				<li v-for="(song, index) in songs" :key="index" @click="change(index)">
					<div class="music-style" style="width:500px;height:50px;margin-top:10px;line-height:50px">
						<div class="col-md-4">{{song.id}}</div>
						<a href="#" class="col-md-4" style="text-decoration: none;">{{song.singer}}</a>
					</div>
				</li>	
			</ul>
			<audio autoplay id="myAudio" :src="init"></audio>
		</div>
	</div>
</template>

<script>
	import bus from '../../../bus.js';
	
	export default {
		data() {
			return {
			
			}
		},
		
		computed: {
			songs() {
				return this.$store.getters.songs;
			},
			hide() {
				return this.$store.getters.hide;
			},
			init() {
				return this.$store.getters.init;
			}
		},
		
		methods: {			
			change(i) {

				if(this.hide) {
					this.$store.dispatch('setInit', i);
					console.log(this.$store.getters.songs[i].src);
					$('#myAudio')[0].play();
				}else{
					this.$store.dispatch('initHide');
					$('#myAudio')[0].play();
				}
				this.$store.dispatch('initMinute');
				this.$store.dispatch('initSecond');
				this.$store.dispatch('initCurrentMinute');
				this.$store.dispatch('initCurrentSecond');
				this.$store.dispatch('initCurrentTime');
				this.$store.dispatch('initDuration');
				this.$store.dispatch('setWidth');
				this.$store.dispatch('setVolume');



				console.log(this.hide);	
				

			},
			
			
		},

		

	}
</script>

<style scoped>
	*{
		list-style:none;
	}
	.music-style:hover{
		background-color:lightgray;
		cursor:pointer;
	}
</style>