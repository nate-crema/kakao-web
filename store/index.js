import axios from 'axios'

export const state = () => ({
  userKakao: null
})

export const mutations = {
  SET_USER (state, user) {
    state.userKakao = user
  },
  SET_INFO (state, session) {
    state = session;
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.userKakao) {
      commit('SET_USER', req.session.userKakao)
    }
  },
  async login ({ commit }, { code }) {
      axios.post('/apiKakao/login', { code })
      .then(({data}) => {
          commit('SET_USER', data)  
      })
      .catch ((error) => {
        if (error.response && error.response.status === 401) {
            throw new Error('Bad credentials')
        }
        throw error
      })
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}