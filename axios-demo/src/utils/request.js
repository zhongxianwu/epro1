import axios from 'axios'

// axios.get('/db.json').then(response =>{
//     const data = response.data
//     console.log(data)
// })

const request = axios.create({
    baseURL:'/',
    timeout:5000 //请求超时 5秒
})

//请求拦截器
request.interceptors.request.use(config =>{
    //请求拦截
    return config
}, error => {
    //出现异常
    return Promise.reject(error);
})

//响应拦截器
request.interceptors.response.use(response =>{
    return response
},error =>{
    return Promise.reject(error);
})


// request.get('/db.json').then(response =>{
//         const data = response.data
//          console.log(data)
//      })

export default request //导出自定义axios 对象