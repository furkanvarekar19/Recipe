import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Recipe() {

   const [title , setTitle] = useState('');
  //  console.log(title);
   const [description , setDescription] = useState('');
  //  console.log(description);
   const [ingredients , setIngredients] = useState('');
  //  console.log(ingredients);
   const [preparation , setPreparation] = useState('');
  //  console.log(preparation);
   const [Image , setImage] = useState(null);

   const [data , setData] = useState([]);

   console.log(data);

 
  const router = useNavigate();

  //  function getValue(event){
  //       setTitle(event.target.value);
  //       setDescription(event.target.value);
  //       setIngredients(event.target.value);
  //       setPreparation(event.target.value); 
  //  }
   
  function dataSubmit(e){
    e.preventDefault();
    
    // setData([...data, title ,description , ingredients ,preparation]);
     console.log(title,description,ingredients,preparation);
    // setTitle('');
    // setDescription('');
    // setIngredients('');
    // setPreparation('');

    router("/RecipeList",{state:{title:title,description:description,ingredients:ingredients,preparation:preparation}});
    
  }


  return (
    <>
    <div className='main_recipe'> 
    <div className='recipe_box'>
    <h1>Recipe App</h1>
      <form onSubmit={dataSubmit}>
            {/* title */}
        <label htmlFor="">title : </label>
        <input type="text" value={data.title} name='title'  onChange= {(e) => setTitle(e.target.value)} /> <br /><br />

        {/* description */}
        <label htmlFor="">description : </label>
        {/* <textarea name="" id=""></textarea> <br /><br /> */}
        <input type="text"  value={data.description} name='description' onChange= {(e) => setDescription(e.target.value) }/><br /><br />

        {/* ingredients */}
        <label htmlFor="">ingredients : </label>
        <input type="text" value={data.ingredients}  name='ingredients'onChange= {(e) => setIngredients(e.target.value)} /><br /><br />

        {/* preparation */}
        <label htmlFor=""> preparation : </label>
        <input type="text" value={data.preparation}  name='preparation'onChange= {(e) => setPreparation(e.target.value)} /><br /><br />
        
         {/* Image */}
        <label htmlFor="">Image Url : </label>
        <input type="url" name="" id="" /> <br /><br />

          {/* submit */}
      <input type="submit"  value='submit' className='submit'/>
    

      </form>
      </div>

    </div>
    </>
  )
}

export default Recipe;