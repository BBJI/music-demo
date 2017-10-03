<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<button v-if="!hide" @click="btnClick" class="btn btn-primary btn-lg">
					<span class="run glyphicon glyphicon-play"></span>
				</button>
				<button v-if="hide" @click="btnClick" class="btn btn-primary btn-lg">
					<span class="run glyphicon glyphicon-pause"></span>					
				</button>
			</div>
			<div class="col-md-8">
				<div class="music-duration" @mousedown="clickPosition($event)">
					<div class="duration-length" :style="{width: width + '%'}">
						<span class="out-circle" :style="{left: width + '%'}" @mousedown="clickPosition($event)">
							<span class="inside-circle"></span>
						</span>
					</div>
				</div>
				<br>
				<div class="col-md-2 col-md-offset-5">{{ currentMinute }}:{{ currentSecond }}/{{ minute }}:{{ second }}</div>
				<span class="col-md-offset-1 glyphicon glyphicon-volume-up" @click="mute"></span>
				<div class="volume col-md-offset-10" @click="volumeClick($event)">
					<div class="present-volume" :style="{width: volume + 'px'}"></div>
				</div>
			</div>
			
			<div class="col-md-1"></div>
		</div>
	</div>
</template>

<script>
	import bus from '../bus.js';
	import list from '../recommendComponent/personalRecommend/lists/list.vue';
	export default {
		data() {
			return {

			}
		},
		
		computed: {
			hide() {
				return this.$store.getters.hide;
			},
			minute() {
				return this.$store.getters.minute;
			},
			second() {
				return this.$store.getters.second;
			},
			currentSecond() {
				return this.$store.getters.currentSecond;
			},
			currentMinute() {
				return this.$store.getters.currentMinute;
			},
			width() {
				return this.$store.getters.width;
			},
			volume() {
				return this.$store.getters.volume;
			}

		},
		
		methods: {
			btnClick() {
				console.log(this.hide);
				if(!this.hide) {
					$('#myAudio')[0].play();
					this.$store.dispatch('initMinute');
					this.$store.dispatch('initSecond');
					this.$store.dispatch('initCurrentMinute');
					this.$store.dispatch('initCurrentSecond');
					this.$store.dispatch('initCurrentTime');
					this.$store.dispatch('initDuration');
					this.$store.dispatch('setWidth');

				}else{
					$('#myAudio')[0].pause();

					this.$store.dispatch('clearTime');
					
				}
				this.$store.dispatch('initHide');				
			},
			
			clickPosition(e) {

				this.$store.dispatch('clickPosition', e);
			},
			volumeClick(e) {
				this.$store.dispatch('volumeControl', e);
			},
			mute() {
				this.$store.dispatch('mute');
			}
		},
		

	}
</script>

<style scoped="scoped">

	.btn{
		position: absolute;
	}
	
	.duration-length{
		width: 0px;
		height: 5px;
		border-radius: 5px;
		background-color: red;
		padding: 0;
	}
	.music-duration{
		width:100%;
		height: 5px;
		border-radius: 5px;
		background-color: darkgray;	
		position: absolute;
		margin: 0;
	}
	.out-circle{
		width: 20px;
		height: 20px;
		border-radius: 10px;
		border: 1px solid black;
		background-color: white;
		position: absolute;
		top: -7px;
		margin: 0;
	}
	.inside-circle{
		width: 6px;
		height: 6px;
		border-radius: 3px;
		background-color: red;
		position: absolute;
		left: 6px;
		top: 6px;
	}
	.volume{
		width: 100px;
		height: 5px;
		background-color: lightgray;
		position: absolute;
		top: 27px;
		padding: 0;
	}
	.present-volume{
		width: 50px;
		height: 5px;
		background-color: red;
		position:absolute;
		margin: 0;
	}
	.music-duration:hover{
		cursor: pointer;
	}
	.volume:hover{
		cursor: pointer;
	}
</style>