import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function RecipeList() {
  const loaction = useLocation();

  const data = loaction.state;

  const router = useNavigate();

  function handsubmit(){
    router("/Detailspage",{state:{data:data}});


  }




  return (
    <div  onClick={handsubmit}>
        <h1>RecipeList</h1>
        <h1> {data.title} </h1>
        <p> {data.description} </p>
        
    </div>
  )
}

export default RecipeList