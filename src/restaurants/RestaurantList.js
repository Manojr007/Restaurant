import { useState, useEffect } from 'react';
import LoggedInHeader from "../header/LoggedInHeader";
import restaurantsService from '../services/RestaurantsService';

function RestaurantList() { 
    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
        loadRestaurants();
    }, []);

    const loadRestaurants = () => {
        restaurantsService.readAll()
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.log('Error loading restaurants:', error);
            });
    }

    const deleteRestaurant = (restaurant) => {
        restaurantsService.delete(restaurant.name)
            .then(response => {
                loadRestaurants();
            })
            .catch(error => {
                console.log('Error deleting restaurant:', error);
            });
    }

    return (
        <>  
            <LoggedInHeader/>
            <div className="container">
                <h3>Restaurants List</h3>
                <a href="/restaurants/add" className="btn btn-success">Add Restaurant</a>
                <table className="table table-stripped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurants.map(restaurant => (
                            <tr key={restaurant.name}>
                                <td width="60%">{restaurant.name}</td>
                                <td>
                                    <a href={"/restaurants/edit/" + restaurant.name} className="btn btn-warning">Edit</a>&nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={() => deleteRestaurant(restaurant)}>Delete</button>
                                </td>
                            </tr>
                        ))}    
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RestaurantList; 