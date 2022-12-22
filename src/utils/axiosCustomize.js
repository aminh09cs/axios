import axios from "axios";
const instance = axios.create({    //request
  baseURL: 'https://63848f033fa7acb14ff88172.mockapi.io/',
  //timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
//add request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before ....
  return config;
},
  function (error) {
    // Do something with error .....
    return Promise.reject(error);
  });
//add response interceptor
instance.interceptors.response.use(function (response) {
  // return response && response.data ? response.data : response; 
  return response && response.data ? response : alert("ERROR");
},
  function (error) {
    return error?.response?.response || 'defaultValue' 
  });
  // optional chaining

export default instance;