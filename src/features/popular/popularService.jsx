import axios from "axios";
import { request } from "../../Api/RequestApi";

const Api = request.popular

    
const popMovieService = async()=> {
    const response = await axios.get(Api)
    return response.data.results
}

const popularService = {
    popMovieService
}
export default popularService