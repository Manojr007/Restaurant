import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RestaurantList from "./restaurants/RestaurantList";
import RestaurantAdd from "./restaurants/RestaurantAdd";
import RestaurantEdit from "./restaurants/RestaurantEdit";

function App() {
  return (
    <div className="">      
        <BrowserRouter>            
            <Routes>  
                <Route path="/" element={<RestaurantList/>} />
                <Route path="/restaurants/list" element={<RestaurantList/>} />
                <Route path="/restaurants/add" element={<RestaurantAdd/>} />
                <Route path="/restaurants/edit/:name" element={<RestaurantEdit/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
