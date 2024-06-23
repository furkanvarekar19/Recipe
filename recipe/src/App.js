
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Recipe from './Component/Recipe';


function App() {

  return(
    <Routes>

    <Route path='Recipe' element = {<Recipe/>}  />
  </Routes>
  )


}

export default App;
