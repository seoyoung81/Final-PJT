import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App.vue'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import CommunityView from '../views/Community/CommunityView.vue'
import ArticleFormView from '../views/Community/ArticleFormView.vue'
import ArticleDetailView from '../views/Community/ArticleDetailView.vue'
import ArticleEditView from '../views/Community/ArticleEditView.vue'
import MainView from '../views/Movie/MainView.vue'
import MovieDetailView from '../views/Movie/MovieDetailView'
import OttChangerView from '../views/OTT/OttChangerView'
import SearchMovieView from '../views/Movie/SearchMovieView'
import SearchDetailView from '../views/Movie/SearchDetailView'
import RecommendFromCurrentOttView from '../views/OTT/RecommendFromCurrentOttView'
import MovieSelectView from '../views/OttChanger/MovieSelectView'
import OttResultView from '../views/OttChanger/OttResultView'
import MyPageView from '../views/MyPage/MyPageView'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'App',
  //   component: App,
  // },
  {
    path: '/main',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/movie_detail',
    name: 'MovieDetailView',
    component: MovieDetailView,
  }, 
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/mypage/:id',
    name: 'MyPageView',
    component: MyPageView
  },
  {
    path: '/ott',
    name: 'OttChangerView',
    component: OttChangerView,
  },
  {
    path: '/searchmovie',
    name: 'SearchMovieView',
    component: SearchMovieView,
  },
  {
    path: '/search_detail',
    name: 'SearchDetailView',
    component: SearchDetailView,
  }, 
  {
    path: '/ott/recommend',
    name: 'RecommendFromCurrentOttView',
    component: RecommendFromCurrentOttView,
  }, 
  {
    path: '/movieselect',
    name: 'MovieSelectView',
    component: MovieSelectView,
  }, 
  {
    path: '/ottresult',
    name: 'OttResultView',
    component: OttResultView,
  }, 

  {
    path: '/create',
    name: 'ArticleFormView',
    component: ArticleFormView
  },
  {
    path: '/:articleId',
    name: 'ArticleDetailView',
    component: ArticleDetailView,
  },
  {
    path: '/edit/:articleId',
    name: 'ArticleEditView',
    component: ArticleEditView,
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
