import axios from "axios";
import { request } from "../../Api/RequestApi";

const API = request.nowPlaying

const latestMovies = async ()=> {
    const response = await axios.get(API)
    console.log(response)
    return response.data.results
}

const LatestService = {
    latestMovies
}

export default LatestService