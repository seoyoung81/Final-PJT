import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'


const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    articles: [
    ],
    comments: [
    ],
    token: null,
    user: {
      id: null,
      username: null,
      email: null,
    },
    selected_lst: [

    ],
    selected_lst_length: null,
    calculateObj: {
      netflix: 0,
      tving: 0,
      dplus: 0,
      wavve: 0,
      watcha: 0,

    },
    resultOTT: null
    
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
      // console.log(state.articles)
    },
    GET_COMMENTS(state, comments) {
      state.comments = comments
      // console.log(state.articles)
    },
    SAVE_TOKEN_SIGNUP() {
      // console.log(token)
      // state.token = token
      router.push({name: 'LogInView'})
    },
    SAVE_TOKEN_LOGIN(state, token) {
      console.log(token)
      state.token = token
      router.push({name: 'MainView'})
    },
    LOG_OUT(state) {
      state.token = null
      state.user.id = null
      state.user.username = null
      state.user.email = null
      console.log('로그아웃 되었는지 확인하기 위함', state.user)
    },
    GET_USER_INFO(state, userinfo) {
      state.user.id = userinfo.pk
      state.user.username = userinfo.username
      state.user.email = userinfo.email
      console.log('end getting User info ...', state.user)
    },
    SELECT_MOVIE(state, payload) {
      let cnt = 0
      // state.selected_lst = []
      if (state.selected_lst.length === 0) {
        // state.selected_lst.push(payload)
      }
      else if (state.selected_lst.length >= 15) {
        alert('15개까지만 선택가능합니다')
        state.selected_lst_length = state.selected_lst.length + 1

      } else if (state.selected_lst.length >= 1) {
        // for 문 돌기
        for (let element of state.selected_lst) {
          // console.log(element)
          if (element.idx === payload.idx ) {
            // console.log('element', element.idx)
            // console.log('payload', payload.idx)
            state.selected_lst.pop(element)
            cnt ++
          } 

        }}
        if (cnt === 0 && state.selected_lst.length < 15) {
          state.selected_lst.push(payload)
        }
        console.log(state.selected_lst)
    },
    CALCULATE_RESULT(state) {
      state.calculateObj.netflix = 0
      state.calculateObj.tving = 0
      state.calculateObj.watcha = 0
      state.calculateObj.dplus = 0
      state.calculateObj.wavve = 0
      for (let element of state.selected_lst) {
        // console.log(element)
        for ( let p of element.providers) {
          // console.log(p)
          if (p === 8) {
            state.calculateObj.netflix ++
          } else if (p === 33) {
            state.calculateObj.tving ++
          } else if (p === 97) {
            state.calculateObj.watcha ++
          } else if (p === 337) {
            state.calculateObj.dplus ++
          } else if (p === 356) {
            state.calculateObj.wavve ++
          } 
        }
      }
      // console.log(state.selected_lst)
      console.log(state.calculateObj)
      
      // const resultOTT = Math.max(...Object.values(state.calculateObj))
      let resultOTT = [null, -Infinity]
      for (const [key, value] of Object.entries(state.calculateObj))  {
        if (value > resultOTT[1]) {
          resultOTT = [key, value]
        }
      }  
      // console.log(resultOTT[0])
      state.resultOTT = resultOTT[0]
      console.log(state.resultOTT )      
    },
    RESET_LST(state) {
      state.selected_lst = []
      state.selected_lst_length = 0
    },
    CLEAR_TOKEN(state) {
      state.token = null
    }
  },
  actions: {
    // 작성한 게시글 조회
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
      })
        .then((response) => {
          // console.log('get Article response and context::::::::', response, context)
          context.commit('GET_ARTICLES', response.data)
        })
        .catch((error) => {
        console.log(error)
      })
    },
    getUserInfo(context) {
      console.log('getting User info ...')
      axios({
        method: 'get',
        url: `${API_URL}/accounts/user/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
      })
      .then((response) => {
        console.log('응답 !!!!!!!!!!!!', response)
        // console.log('이름!!!!!!!!!!!', response.data.username)
        // console.log('PK!!!!!!!!!!!', response.data.pk)
        context.commit('GET_USER_INFO', response.data)
        console.log(response.data)
        
      })
    },
    
    getComments(context) {
      // console.log('엑시오스 전 !@')
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/comments/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
      })
        .then((response) => {
        // console.log(response, context)
          context.commit('GET_COMMENTS', response.data)
        })
        .catch((error) => {
        console.log(error)
      })
    },
    signUp(context, payload) {
      const email = payload.email
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username, email, password1, password2
        }
      })
      .then(() => {
        context.commit('SAVE_TOKEN_SIGNUP')
      })
      .catch((error) => {
        console.log(error)
      })
    },
    logIn(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
      .then((response) => {
        console.log('로그인 했을 때 response 확인:', response)
        context.commit('SAVE_TOKEN_LOGIN', response.data.key)
        // context.dispatch('getUserInfo')

      })
      .catch((error) => {
        // console.log(error)
        // console.log(error.message)
        // console.log(error.message === 'Request failed with status code 400')
        if (error.message === 'Request failed with status code 400'){
          alert('로그인을 다시 시도해주세요')
  
        }
      })
      
    },
    logOut(context) {
      console.log('로그아웃 시도')
      // console.log(context.state.token)
      axios({
        method: 'post',
        url: `${API_URL}/accounts/logout/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
      })
      .then((response) => {
        console.log(response)
        context.commit('LOG_OUT')
        router.push({name: 'LogInView'})
      })
      .catch((error) => {
        console.log(error)
      })
    },
    selectMovie(context, payload) {
      // console.log('actions', payload)
      context.commit('SELECT_MOVIE', payload)
    },
    calculateResult(context) {
      context.commit('CALCULATE_RESULT')
    },
    resetLst(context) {
      context.commit('RESET_LST')
    },
    clearToken(context) {
      context.commit('CLEAR_TOKEN')
    }
  },
  
  modules: {
  }
})
