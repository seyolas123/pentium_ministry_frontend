import { createStore } from "vuex";
import axiosClient  from "../axios";

const store = createStore({
   
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
          },

          users: {
            data: [],
            links: [],
            loading: false
          },

          currentUser: {
            data: {},
            loading: false,
          },

        messages: {
            data: [],
            links: [],
            loading: false
        },

        dashboard: {
          loading: false,
          data: {}
        },

        currentMessage: {
          data: {},
          loading: false,
        },
        notification: {
          show: false,
          type: 'success',
          message: ''
        }
    },

    getters: {},

    actions: {
        //register a user
    register({commit}, user) {
        return axiosClient.post('/register', user)
          .then((response) => {
            commit('setUser', data.user);
            commit('setToken', data.token)
            return data;
          })
      },

      //login a user
      login({commit}, user) {
        return axiosClient.post('/login', user)
          .then(({data}) => {
            commit('setUser', data.user);
            commit('setToken', data.token)
            return data;
          })
      },

      //logout a user
      logout({commit}) {
        return axiosClient.post('/logout')
          .then(response => {
            commit('logout')
            return response;
          })
      },

      //get Dashboard Data
      getDashboardData({commit}) {
        commit('dashboardLoading', true)
        return axiosClient.get(`/dashboard`)
        .then((res) => {
          commit('dashboardLoading', false)
          commit('setDashboardData', res.data)
          return res;
        })
        .catch(error => {
          commit('dashboardLoading', false)
          return error;
        })
  
      },

      //get single users
      getUser({commit}) {
        return axiosClient.get('/user')
        .then(res => {
          //console.log(res);
          commit('setUser', res.data)
        })
      },

      //get single user by Id
      getUserById({ commit }, id) {
        commit("setCurrentUserLoading", true);
        return axiosClient
          .get(`/users/${id}`)
          .then((res) => {
            commit("setCurrentUser", res.data);
            commit("setCurrentUserLoading", false);
            return res;
          })
          .catch((err) => {
            commit("setCurrentUserLoading", false);
            throw err;
          });
      },

      //get all users
      getUsers({commit}) {
        commit('setUsersLoading', true)
        return axiosClient.get('/users')
        .then(res => {
          commit('setUsersLoading', false)
          commit('setUsers', res.data);
          //commit('setLinks', res.data.meta);
          return res;
        })
      },

      //update user
      updateProfile({ commit }, user) {

        delete user.avatar_url;
            console.log(user);
         return axiosClient
            .put(`/profile/${user.id}`, user)
            .then((res) => {
              commit('setCurrentUser', res.data)
              return res;
            });
      },

      //delete user
      deleteUser({ dispatch }, id ) {
        return axiosClient.delete(`/users/${id}`)
         .then((res) => {
            dispatch('getUsers');
            return res;
         })
      },

      //get all messages
      getMessages({ commit }, {url = null} = {}) {
        commit('setMessageLoading', true)
        url = url || "/messages";
        return axiosClient.get(url).then((res) => {
          commit('setMessageLoading', false)
          commit("setMessages", res.data);
          return res;
        });
      },

      //getMessage by Id
      getMessage({ commit }, id) {
        commit("setCurrentMessageLoading", true);
        return axiosClient
          .get(`/messages/${id}`)
          .then((res) => {
            commit("setCurrentMessage", res.data);
            commit("setCurrentMessageLoading", false);
            return res;
          })
          .catch((err) => {
            commit("setCurrentMessageLoading", false);
            throw err;
          });
      },

      //delete message
      deleteMessage({ dispatch }, id ) {
        return axiosClient.delete(`/messages/${id}`)
         .then((res) => {
            dispatch('getMessages');
            return res;
         })
      },

      //saveMessages
      saveMessage({ commit }, message) {

        delete message.photo_url;
  
        let response;

        if (!message.id) {
          commit("setCurrentMessageLoading", true);
          response = axiosClient.post("/messages", message).then((res) => {
            console.log(message);
            commit('setCurrentMessage', res.data)
            commit("setCurrentMessageLoading", false);
            console.log(res);
            return res;
          });
        } else {
          commit("setCurrentMessageLoading", true);
          response = axiosClient
            .put(`/messages/${message.id}`, message)
            .then((res) => {
              commit('setCurrentMessage', res.data)
              commit("setCurrentMessageLoading", false);
              return res;
            });
          
        }
  
        return response;
      },
    },

    mutations: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
          },
    
          setMessages: (state, message) => {
             state.messages.data = message.data;
             //console.log(state.messages.data);
             state.messages.links = message.meta.links;
          },

          setCurrentMessage: (state, message) => {
            state.currentMessage.data = message.data;
            //console.log(state.messages.data);
         },

          setUser: (state, user) => {
            state.user.data = user;
          },
    
          setUsers: (state, users) => {
            state.users.data = users.data
            state.users.links = users.links
          },
    
         
          setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
          },

          setCurrentUser: (state, user) => {
            state.currentUser.data = user.data;
          },

          //loading mutations
          setMessageLoading: (state, val) => {
            state.messages.loading = val;
          },

          setUsersLoading: (state, val) => {
            state.users.loading = val;
          },

          setCurrentUserLoading: (state, loading) => {
            state.currentUser.loading = loading;
          },
          
          setCurrentMessageLoading: (state, val) => {
            state.currentMessage.loading = val;
          },

          dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading;
          },
          setDashboardData: (state, data) => {
            state.dashboard.data = data
          },

          notify: (state, { message, type}) => {
            state.notification.show = true;
            state.notification.message = message
            state.notification.type = type
            setTimeout (() => {
              state.notification.show = false;
            }, 3000);
          }
          
    
    
       },
    
    modules: {

    }
});

export default store;