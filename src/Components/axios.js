import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:4000" //The api(cloud function) url 

})
// const instance = axios.create();

export default instance