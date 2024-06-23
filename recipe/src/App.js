
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Recipe from './Component/Recipe';
import Detailspage from './Component/Detailspage';


function App() {

  return(
    <Routes>

    <Route path='Recipe' element = {<Recipe/>}  />
    <Route path='Detailspage' element = {<Detailspage/>}  />

  </Routes>
  )


}

export default App;
