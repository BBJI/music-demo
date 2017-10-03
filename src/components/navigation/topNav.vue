<template>
	<div>
		<nav class="nav nav-default" role="navigation" style="background-color:red">
			<div class="container-fluid">
				
				<div class="navbar-header">
					<router-link id="header" class="navbar-brand" to="/">网易云音乐</router-link>
				</div>
					
				<div>
					<ul class="nav navbar-nav">
						<li style="position:relative;top:8px;margin-left:50px">
							<div class="btn-group chevron">
						<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-chevron-left iconchevron"></span></button>
						<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-chevron-right iconchevron"></span></button>
							</div>	
						</li>
						<li>
							<form class="navbar-form navbar-left">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="搜索音乐，歌词，歌手，用户" style="width:300px;border-radius:20px;background-color:#EA0000"/>
								</div>
								<span class="glyphicon glyphicon-search" style="position:absolute;left:280px;top:17px;cursor:pointer;color:white"></span>
							</form>
						</li>
						
						<li style="position:relative;top:8px;margin-left:100px;margin-right:50px">
							<div>
								<a href="#" @click="dropDown">
									<img src="../../assets/logo.png" style="width:auto;height:30px"/>
									UserName
									<span class="caret"></span>
								</a>
							</div>
						</li>
						
						<li><div class="icon"><span class="glyphicon glyphicon-user"></span></div></li>
						<li><div class="icon"><span class="glyphicon glyphicon-envelope"></span></div></li>
						<li><div class="icon"><span class="glyphicon glyphicon-cog"></span></div></li>
						<li style="font-size:30px;">|</li>
						<li><div class="icon"><span class="glyphicon glyphicon-share"></span></div></li>	
						<li><div class="icon"><span class="glyphicon glyphicon-minus"></span></div></li>
						<li ><div class="icon"><b>口</b></div></li>
						<li><div class="icon"><span class="glyphicon glyphicon-remove"></span></div></li>
					</ul>
				</div>	
			</div>
		</nav>
		<ul :style="{display: activeDisplay}" style="background-color:ghostwhite;width:300px;height:400px;position:absolute;left:870px;list-style-type: none;">
			<li><a href="#">111</a></li><br>
			<li><a href="#">222</a></li>
		</ul>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				activeDisplay: "none",
			}
		},
		methods: {
			dropDown(){
				if(this.activeDisplay == "none"){
					this.activeDisplay = "block"
				}else{
					this.activeDisplay = "none"
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#header{
		font-family: "微软雅黑";
		font-size:25px;
		color:black;
	}
	.chevron button{
		background-color:red;
		border:1px solid black;
	}
	.iconchevron{
		color:white;
	}
    .icon{
    	cursor:pointer;
    	width:30px;
    	height:30px;
    	line-height:50px;
    }
	.icon:hover{
		color:white;
	}

	
</style>