import React, { useState } from 'react';

function Recipe() {

   const [title , setTitle] = useState('');
   console.log(title);
   const [description , setDescription] = useState('');
   console.log(description);
   const [ingredients , setIngredients] = useState('');
   console.log(ingredients);
   const [preparation , setPreparation] = useState('');
   console.log(preparation);
   const [Image , setImage] = useState('');

   function getValue(event){
        setTitle(event.target.value);
        setDescription(event.target.value);
        setIngredients(event.target.value);
        setPreparation(event.target.value);
        
   }


  return (
    <div style={{textAlign:'center'}}> 
    <h1>Recipe App</h1>
      <form action="">
            {/* title */}
        <label htmlFor="">title : </label>
        <input type="text"  onChange={getValue}/> <br /><br />

        {/* description */}
        <label htmlFor="">description : </label>
        <input type="text"  onChange={getValue}/><br /><br />

        {/* ingredients */}
        <label htmlFor="">ingredients : </label>
        <input type="text"  onChange={getValue}/><br /><br />

        {/* preparation */}
        <label htmlFor="">preparation : </label>
        <input type="text" onChange={getValue} /><br /><br />
        
         {/* Image */}
        <label htmlFor="">Image : </label>
       <input type="file" name="" id="" /> 

      </form><br />
      <button>Add</button>
    </div>
  )
}

export default Recipe;