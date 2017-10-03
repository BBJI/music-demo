<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<app-midNav></app-midNav>
				<div class="row" style="width:675px;height:270px;overflow:hidden" @mouseover="stop()" @mouseout="move()">
					<div class="col-md-6">
						<div style="width:675px;height:250px">
							<transition-group class="clearfix slide" tag="ul" name='image' mode="out-in">
								<li v-show="init===index" v-for="(image,index) in images" :key="index" style="position:absolute">
									<a href="#"><img style="position:absolute;width:675px;height:250px" :src="image.src"/></a>
								</li>
							</transition-group>
	      				</div>
					</div>
					
	      		
					<div class="row">
						<div class="col-md-6 col-md-offset-3" style="margin-top:10px">
							<ul tag="ul" class="banner-footer" >
								<li  v-for="(item,index) in images.length" :key="index" :class="{ active: init===index }" @click="changeIndex(index)"></li>
							</ul>
						</div>
					</div>			
				</div>
				
				
				<div class="row">
					<ul>	
						<router-link class="col-md-3" v-for="(list,index) in lists" :key="index" :to="list.to" tag="li"><a>music list</a></router-link>										
					</ul>
				</div>
			</div>
			
		</div>	
		
	</div>

</template>

<script>

import midNav from '../../navigation/midNav.vue'	
	
export default {
	data() {
		return {
			images:[
			{id:1,src:"../../../../static/images/1.png"},
			{id:2,src:"../../../../static/images/2.png"},
			{id:3,src:"../../../../static/images/3.png"},
			{id:4,src:"../../../../static/images/4.png"},
			{id:5,src:"../../../../static/images/5.png"},
			{id:6,src:"../../../../static/images/6.png"},
			{id:7,src:"../../../../static/images/7.png"},
			{id:8,src:"../../../../static/images/8.png"},
			],
			init: 0,
			timer: null,
			lists: [
			{id:1, to:"/list"},
			{id:2, to:"/"},
			{id:3, to:"/"},
			{id:4, to:"/"},
			]
		}
		
		
	},
	components: {
		appMidNav: midNav
	},
	methods: {
		changeIndex(i){
			this.init = i;	
		},
		autoPlay(){
   			this.init++;
   			if(this.init===8){
   				this.init=0;
   				return
   			}
		},
		play(){
			this.timer = setInterval(this.autoPlay,3000);
		},
		stop(){
			this.timer = clearInterval(this.timer);
		},
		move(){
			this.timer = setInterval(this.autoPlay,3000); 
		},
		
	},

	created(){
		this.play();
	}
}
</script>

<style scoped>
*{
list-style: none;		
}
.banner-footer li{
	width: 30px;
	height: 5px;
	background-color: darkgray;
	float:left;
	list-style: none;
	margin-left:5px;
	cursor:pointer;
}
.banner-footer li.active{
	background-color:deeppink;
}

.image-enter-active{

	animation: flashEnter 1s ease;
	
}

.image-leave-active{

	animation: flashLeave 1s ease;

}

@keyframes flashLeave {
	0%{
		opacity: 1;
	}
	25%{
		opacity: 0.75;
	}
	50%{
		opacity: 0.5;
	}
	75%{
		opacity: 0.25;
	}
	100%{
		opacity: 0;
	}
}

@keyframes flashEnter {
	0%{
		opacity: 0;
	}
	25%{
		opacity: 0.25;
	}
	50%{
		opacity: 0.5;
	}
	75%{
		opacity: 0.75;
	}
	100%{
		opacity: 1;
	}
}


</style>