import axios from "axios";
import { request } from "../../Api/RequestApi";

const API = request.upcoming

const UpcomingMovService = async() => {
   const response =  await axios.get(API)
   return response.data.results
}

const UpcomingService = {
    UpcomingMovService
}

export default UpcomingService