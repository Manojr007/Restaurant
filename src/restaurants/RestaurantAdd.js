import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoggedInHeader from "../header/LoggedInHeader";
import restaurantsService from '../services/RestaurantsService';

function RestaurantAdd() {
    const [restaurant, setRestaurant] = useState({
        name: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        restaurantsService.create(restaurant)
            .then(response => {
                navigate('/restaurants/list');
            })
            .catch(error => {
                console.log('Error adding restaurant:', error);
            });
    }

    return (
        <>
            <LoggedInHeader/>
            <div className="container">
                <h3>Add Restaurant</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={restaurant.name}
                            onChange={(e) => setRestaurant({...restaurant, name: e.target.value})}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default RestaurantAdd; 