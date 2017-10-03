<template>

			<nav class="nav nav-default" role="navigation">
				<div class="container-fluid">
					<ul class="nav nav-default pull-left nav-pills nav-stacked">
						<li>
							<div class="navbar-brand">推荐</div>
						</li>
						<router-link to="/" tag="li"><a><span class="glyphicon glyphicon-music"></span>&nbsp;&nbsp;发现音乐</a></router-link>
						<router-link to="/personalFM" tag="li"><a><span class="glyphicon glyphicon-asterisk"></span>&nbsp;&nbsp;私人FM</a></router-link>
						<router-link to="/MV" tag="li"><a><span class="glyphicon glyphicon-film"></span>&nbsp;&nbsp;MV</a></router-link>
						<router-link to="/friend" tag="li"><a><span class="glyphicon glyphicon-paperclip"></span>&nbsp;&nbsp;朋友</a></router-link>
						
						<li>
							<div class="navbar-brand">我的音乐</div>
						</li>
						<router-link to="/localMusic" tag="li"><a><span class="glyphicon glyphicon-headphones"></span>&nbsp;&nbsp;本地音乐</a></router-link>
						<router-link to="/download" tag="li"><a><span class="glyphicon glyphicon-download"></span>&nbsp;&nbsp;下载管理</a></router-link>
						<router-link to="/musicCloud" tag="li"><a><span class="glyphicon glyphicon-cloud"></span>&nbsp;&nbsp;音乐云管理</a></router-link>
						<router-link to="/myCollection" tag="li"><a><span class="glyphicon glyphicon-floppy-disk"></span>&nbsp;&nbsp;我的收藏</a></router-link>
						<router-link to="/myRadio" tag="li"><a><span class="glyphicon glyphicon-facetime-video"></span>&nbsp;&nbsp;我的电台</a></router-link>
					</ul>
				</div>	
			</nav>

	
</template>

<script>
</script>

<style>
	a{
		float:left
	}
</style>