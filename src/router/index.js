import Vue from 'vue'
import Router from 'vue-router'
import personalRecommend from '../components/recommendComponent/personalRecommend/personalRecommend.vue'
import friend from '../components/myComponent/recommendation/friend/friend.vue'
import MV from '../components/myComponent/recommendation/MV/MV.vue'
import personalFM from '../components/mycomponent/recommendation/personalFM/personalFM.vue'
import download from '../components/myComponent/myMusic/download/download.vue'
import localMusic from '../components/myComponent/myMusic/localMusic/localMusic.vue'
import musicCloud from '../components/myComponent/myMusic/musicCloud/musicCloud.vue'
import myCollection from '../components/myComponent/myMusic/myCollection/myCollection.vue'
import myRadio from '../components/mycomponent/myMusic/myRadio/myRadio.vue'
import list from '../components/recommendComponent/personalRecommend/lists/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: personalRecommend},
    {path: '/friend', component: friend},
    {path: '/MV', component: MV},
    {path: '/personalFM', component: personalFM},
    {path: '/download', component: download},
    {path: '/localMusic', component: localMusic},
    {path:'/musicCloud', component: musicCloud},
    {path: '/myCollection', component: myCollection},
    {path: '/myRadio', component: myRadio},
		{path: '/list', component: list}
  ]
})
