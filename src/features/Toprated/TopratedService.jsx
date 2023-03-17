import axios from "axios";
import { request } from "../../Api/RequestApi";

const API = request.topRated

const TopratedMovies = async()=> {
    const response = await axios.get(API)
    return response.data.results
}

const TopratedService = {
    TopratedMovies
}

export default TopratedService