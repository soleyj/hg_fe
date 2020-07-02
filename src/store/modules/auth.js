
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"


const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  };


const mutations = {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  };
const actions = {
    login({commit}, user_){
        return new Promise((resolve, reject) => {

          commit('auth_request')
          axios({url: 'http://127.0.0.1:8000/rest-auth/login/', data: user_, method: 'POST' })
          .then(resp => {

            const token = resp.data.key
            const user = user_.username
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    logout({commit}){
        return new Promise((resolve) => {
          console.log( state.token)
          axios.defaults.headers.common['Authorization'] = "Token " + ( state.token)
          axios({url: 'http://127.0.0.1:8000/rest-auth/logout/', method:'POST'})
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      }
  };
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
}


export default {
    state,
    getters,
    actions,
    mutations
  };
  