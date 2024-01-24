import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./compoments/Pages/Home";
import Contact from "./compoments/Pages/Contact";
import Reservations from "./compoments/Pages/Reservations";
import Gallery from "./compoments/Pages/Gallery";
import Room from "./compoments/Rooms/Room"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rezerwacje" element={<Reservations/>}/>
            <Route path="/kontakt" element={<Contact/>}/>
            <Route path="/galeria" element={<Gallery/>}/>
            <Route path="/room/:id" element={<Room/>}/>
        </Routes>
    </div>
  );
}

export default App;
