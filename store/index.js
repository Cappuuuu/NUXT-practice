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
    let res = await axios.get('https://datacenter.taichung.gov.tw/swagger/OpenData/98f036d6-197f-4bcc-a0c9-e4363ac3cdd3')
    console.log(res)
    let newData = res.data.map((item, index) => {
      return {
        phone: item['手機'] || '拍謝我沒手機',
        title: item['救護車設置機構'] || '貓的制裁',
        name: item['聯絡人'] || '惡魔貓男',
        photoUrl: `https://picsum.photos/id/${index + 50}/250/200`,
        price: Math.floor(Math.random() * 200) + 100
      }
    })
    commit('SET_MEMBER_LIST', newData)
  },
}
