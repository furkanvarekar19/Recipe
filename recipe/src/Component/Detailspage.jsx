import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';

function Detailspage({recipes}) {
  // const loaction = useLocation();
  // const data1 = loaction.state;

  // const router = useNavigate();

  const {id} = useParams();
  const recipe = recipes[id];
  console.log(recipe);

  return (
    <div className='detail_page'>
       <div>
       <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
       </div>
       <img src={recipe.Image} alt='image'/>

       <div>
        <p>{recipe.ingredients}</p>
        <p>{recipe.preparation}</p>
       </div>

    </div>
  )
}

export default Detailspage;