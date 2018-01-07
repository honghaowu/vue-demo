import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state={
    count: 1
};
//getters相当于computed,只是对全局的进行过滤处理
const getters={
    count(state){
        return state.count+=10
    }
};
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
};
//actions是异步处理，触发mutations中的方法
const actions={
    addAction(context){
        context.commit('add',10);
        setTimeout(function(){
            context.commit('reduce');
        },1000)
        console.log('1s后减少1');
    },
    reduceAction({commit}){
        commit('reduce');
    }
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});