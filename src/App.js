

import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Liked from './pages/Liked';
import MapPage from './pages/MapPage';
import Details from './components/Details';
import VolcanoPage from './pages/VolcanoPage';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/:id' element={<Details/>}/>
      <Route path='/liked' element={<Liked/>}/>
      <Route path='/wildfire' element={<MapPage/>}/>
      <Route path='/volcano' element={<VolcanoPage/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
