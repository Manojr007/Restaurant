import { makeNotLoggedInApiCaller } from "./BaseService";

class RestaurantsService {
    RESTAURANTS_URL = "/restaurants";
    
    create = (newRestaurant) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.post(`${this.RESTAURANTS_URL}`, newRestaurant);
    }
    
    readAll = () => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.get(`${this.RESTAURANTS_URL}`);
    }
    
    readOne = (name) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.get(`${this.RESTAURANTS_URL}/${name}`);
    }
    
    update = (name, changedRestaurant) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.put(`${this.RESTAURANTS_URL}/${name}`, changedRestaurant);
    }
    
    delete = (name) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.delete(`${this.RESTAURANTS_URL}/${name}`);
    }
}

const restaurantsService = new RestaurantsService();
export default restaurantsService; 