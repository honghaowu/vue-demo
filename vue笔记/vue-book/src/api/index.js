import axios from 'axios';
axios.defaults.baseURL="http://localhost:3000"; //默认请求路径
//拦截器,统一拦截，返回res.data;
axios.interceptors.response.use((res)=>{
    return res.data;
});
//获取轮播数据，返回一个promise对象
export let getSliders=()=>{
    return axios.get('/sliders');
};
//获取热门的图书
export let getHotBook=()=>{
    return axios.get('/hot');
}
//获取全部的图书
export let getBook=()=>{
    return axios.get('/book');
}
// 删除某一本书
export let removeBook=(id)=>{
    return axios.delete(`/book?id=${id}`);
}
//获取某一本图书
export let getOne=(id)=>{
    return axios.get(`/book?id=${id}`);
}
// 修改图书
/**
 * 
 * @param {*} id 
 * @param {*} data 
 */
export let updateBook=(id,data)=>{
    return axios.put(`/book?id=${id}`,data);
}
export let addBook=(data)=>{
    return axios.post(`/book`,data);
}
//获取所有
export let getAll=()=>{
    return axios.all([getSliders(),getHotBook()]);
}
export let pagination=(offset)=>{
    return axios.get(`/page?offset=${offset}`);
}
