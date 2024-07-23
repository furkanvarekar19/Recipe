import React from 'react'
import {  useNavigate } from 'react-router-dom'

function RecipeList({recipes}) {
  const router = useNavigate(); 


  return (
    <div className='main_recipelist'>
        <h1 style={{textAlign:'center'}}>RecipeList</h1>
        <div className='recipeList'>
          {
            recipes.map((recipe ,index) =>(
             
              <div key={index}  className='recipe-box'>
                <div onClick={()=> router(`/Detailspage/${index}`)} className='recipe-img'>
                  <img src= {recipe.Image} alt='recipe' />
                </div>

                <div  onClick={()=> router(`/Detailspage/${index}`)}>
                    <h1> {recipe.title} </h1>
                    <p> {recipe.description} </p>
                </div>

              </div>
            ))
          }

        </div>
       
        
    </div>
  )
}

export default RecipeList;