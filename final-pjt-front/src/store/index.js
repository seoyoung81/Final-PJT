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
    SAVE_TOKEN_SIGNUP(state, token) {
      // console.log(token)
      state.token = token
      router.push({name: 'LogInView'})
    },
    SAVE_TOKEN_LOGIN(state, token) {
      // console.log(token)
      state.token = token
      router.push({name: 'CommunityView'})
      // 일단 홈으로 -> 메인페이지로 보낼 것
    },
    GET_USER_INFO(state, userinfo) {
      state.user.id = userinfo.pk
      state.user.username = userinfo.username
      state.user.email = userinfo.email
      console.log('잘 들어왔는지 확인', state.user)
    },
    SELECT_MOVIE(state, payload) {
      let cnt = 0
      // state.selected_lst = []
      if (state.selected_lst.length === 0) {
        // state.selected_lst.push(payload)
      }
      else if (state.selected_lst.length >= 15) {
        alert('15개까지만 선택가능합니다')

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
      }
     
      
      
    
    
  },
  actions: {
    getArticles(context) {
      // console.log('엑시오스 전 !@')
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
      })
        .then((response) => {
          console.log('get Article response and context::::::::', response, context)
          context.commit('GET_ARTICLES', response.data)
          // console.log('실행!@')
        })
        .catch((error) => {
        console.log(error)
      })
    },
    getUserInfo(context) {
      axios({
        method: 'get',
        url: `${API_URL}/accounts/user/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
        
      })
      .then((response) => {
        // console.log()
        console.log('응답 !!!!!!!!!!!!', response)
        console.log('이름!!!!!!!!!!!', response.data.username)
        console.log('PK!!!!!!!!!!!', response.data.pk)
        context.commit('GET_USER_INFO', response.data)
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
      // console.log(email)
      // console.log(username)
      // console.log(password1)
      // console.log(password2)

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username, email, password1, password2
        }
      })
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        // console.log(response.data.key)
        context.commit('SAVE_TOKEN_SIGNUP', response.data.key)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    login(context, payload) {
      const username = payload.username
      const password = payload.password
      // console.log(username)
      // console.log(password)

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
      .then((response) => {
        context.commit('SAVE_TOKEN_LOGIN', response.data.key)
      })
      .catch((error) => 
        console.log(error))
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
    }
  },
  
  modules: {
  }
})
