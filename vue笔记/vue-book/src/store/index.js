import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 状态
let state = {cartList:[]};
import mutations from './mutations.js';
import getters from './getter.js'
export default new Vuex.Store({
  state,
  mutations,
  getters
});