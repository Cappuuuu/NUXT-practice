import axios from 'axios'

export const state = () => ({
  memberList: []
})

export const mutations = {
  SET_MEMBER_LIST (state, payload) {
    state.memberList = payload
  }
}

export const actions = {
  async getMemberList ({ commit }) {
    let targetUrl = 'https://datacenter.taichung.gov.tw/swagger/OpenData/98f036d6-197f-4bcc-a0c9-e4363ac3cdd3'
    let { data } = await axios.get(targetUrl)
    console.log('好了沒?')
    commit('SET_MEMBER_LIST', data)
  },
}

// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       memberList: null
//     }),
//     mutations: {
//       SET_MEMBER_LIST (state, payload) {
//         state.memberList = payload
//       },
//     },
//     actions: {
//       async getMemberList ({ commit }) {
//         let targetUrl = 'https://datacenter.taichung.gov.tw/swagger/OpenData/98f036d6-197f-4bcc-a0c9-e4363ac3cdd3'
//         let res = await fetch(targetUrl)
//         console.log(res)
//         commit('SET_MEMBER_LIST', res.data)
//       },
//     },
//   })
// }
