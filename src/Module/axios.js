import Axios from 'axios';
const BASE_URL='http://134.175.79.34:5000'
console.log("process.env");
// 请求前缀URL
Axios.defaults.baseURL = BASE_URL;


export default Axios;