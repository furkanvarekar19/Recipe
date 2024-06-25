import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Recipe( {addRecipe}) {

   const [title , setTitle] = useState('');
  //  console.log(title);
   const [description , setDescription] = useState('');
  //  console.log(description);
   const [ingredients , setIngredients] = useState('');
  //  console.log(ingredients);
   const [preparation , setPreparation] = useState('');
  //  console.log(preparation);
   const [Image , setImage] = useState('');

  const router = useNavigate();

 
  function dataSubmit(e){
    e.preventDefault();
     console.log(title,description,ingredients,preparation,Image);

// router("/RecipeList",{state:{title:title,description:description,ingredients:ingredients,preparation:preparation,Image:Image}});
          const newRecipe = {
            title,
            description,
            ingredients,
            preparation,
            Image,
          };
          console.log(newRecipe);
          addRecipe(newRecipe);
          router("/RecipeList")

  }


  return (
    <>
    <div className='main_recipe'> 
    <div className='recipe_box'>
    <h1 className='recipeheading'>Recipe App</h1>
      <form onSubmit={dataSubmit}>
            {/* title */}
        <label htmlFor="">title : </label>
        <input type="text"  name='title'  onChange= {(e) => setTitle(e.target.value)} /> <br /><br />

        {/* description */}
        <label htmlFor="">description : </label>
        {/* <textarea name="" id=""></textarea> <br /><br /> */}
        <input type="text"   name='description' onChange= {(e) => setDescription(e.target.value) }/><br /><br />

        {/* ingredients */}
        <label htmlFor="">ingredients : </label>
        <input type="text"   name='ingredients'onChange= {(e) => setIngredients(e.target.value)} /><br /><br />

        {/* preparation */}
        <label htmlFor=""> preparation : </label>
        <input type="text"   name='preparation'onChange= {(e) => setPreparation(e.target.value)} /><br /><br />
        
         {/* Image */}
        <label >Image Url : </label>
        <input type="text" name=""  onChange= {(e) => setImage(e.target.value)} /> <br /><br />

          {/* submit */}
      <input type="submit"  value='submit' className='submit'/>
    

      </form>
      </div>

    </div>
    </>
  )
}

export default Recipe;