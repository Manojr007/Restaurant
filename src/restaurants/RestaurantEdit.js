import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoggedInHeader from "../header/LoggedInHeader";
import restaurantsService from '../services/RestaurantsService';

function RestaurantEdit() {
    const [restaurant, setRestaurant] = useState({
        name: ''
    });
    const navigate = useNavigate();
    const { name } = useParams();

    useEffect(() => {
        restaurantsService.readOne(name)
            .then(response => {
                setRestaurant(response.data);
            })
            .catch(error => {
                console.log('Error loading restaurant:', error);
            });
    }, [name]);

    const handleSubmit = (event) => {
        event.preventDefault();
        restaurantsService.update(name, restaurant)
            .then(response => {
                navigate('/restaurants/list');
            })
            .catch(error => {
                console.log('Error updating restaurant:', error);
            });
    }

    return (
        <>
            <LoggedInHeader/>
            <div className="container">
                <h3>Edit Restaurant</h3>
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
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </>
    );
}

export default RestaurantEdit; 