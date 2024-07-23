
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Recipe from './Component/Recipe';
import Detailspage from './Component/Detailspage';
import RecipeList from './Component/RecipeList';
import { useState } from 'react';


function App() {

  const[recipes , setRecipes] = useState([]);

  const addRecipe = (recipe) =>{
    setRecipes([...recipes ,recipe])

  }


  return(
   
    <Routes>
    <Route path='/' element = {<Recipe addRecipe={addRecipe}/>} />
    <Route path='/RecipeList' element = {<RecipeList recipes={recipes} />}/>
    <Route path='/Detailspage/:id' element = {<Detailspage recipes={recipes}/>}/>
  </Routes>
  )


}

export default App;
