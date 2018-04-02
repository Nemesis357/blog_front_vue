import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  	title: '',
  	content: '',
  	imageUrl: '',
  	key: '',
  	submited: ''
  },
  mutations: {
	savePost (state, payload) {
		state.title = payload.title
		state.content = payload.content
		state.imageUrl = payload.imageUrl
		state.key = payload.key
	},
	submited (state, payload) {
		state.submited = payload
	},
	clearSubmit (state, payload) {
		state.submited = payload
	}
  },
  actions: {
   submitForm ({commit}, payload) {
   	const url = 'http://localhost:8081/create'
    axios.post(url, payload,{headers: {
                    'Content-Type': 'multipart/form-data'
                }
              })
    .then(function (response) {
    	if (response.status === 200) {
    		commit('submited', true)
    	}
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   },
   retrivePost ({commit}, payload) {
   	const url = 'http://localhost:8081/post/' + payload
   	console.log(payload)
   	axios.get(url).then((response) => {

		commit('savePost', response.data)

	})
   }
  },
  getters: {
    retrivePost (state) {
    	const post = {
    		title: state.title,
    		content: state.content,
    		imageUrl: state.imageUrl,
    		key: state.key
    	}
    	return post
    },
    isSubmited (state) {
    	return state.submited
    }
  }
})
