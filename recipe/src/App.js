
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Recipe from './Component/Recipe';
import Detailspage from './Component/Detailspage';
import RecipeList from './Component/RecipeList';


function App() {

  return(
   
    <Routes>
 
    
    <Route path='/Recipe' element = {<Recipe/>}  />
    <Route path='/Detailspage' element = {<Detailspage/>}  />
    <Route path='/RecipeList' element = {<RecipeList/>}  />


  </Routes>
  )


}

export default App;
