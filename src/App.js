import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./compoments/Pages/Home";
import Contact from "./compoments/Pages/Contact";
import Reservations from "./compoments/Pages/Reservations";
import Gallery from "./compoments/Pages/Gallery";
import Room1 from "./compoments/Rooms/Room1"
import Room2 from "./compoments/Rooms/Room2"
import Room3 from "./compoments/Rooms/Room3"
import Room4 from "./compoments/Rooms/Room4"
import Room5 from "./compoments/Rooms/Room5"
import Room6 from "./compoments/Rooms/Room6"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rezerwacje" element={<Reservations/>}/>
            <Route path="/kontakt" element={<Contact/>}/>
            <Route path="/galeria" element={<Gallery/>}/>
            <Route path="/room1" element={<Room1/>}/>
            <Route path="/room2" element={<Room2/>}/>
            <Route path="/room3" element={<Room3/>}/>
            <Route path="/room4" element={<Room4/>}/>
            <Route path="/room5" element={<Room5/>}/>
            <Route path="/room6" element={<Room6/>}/>
        </Routes>
    </div>
  );
}

export default App;
