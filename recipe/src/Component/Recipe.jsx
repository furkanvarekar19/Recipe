import React from 'react';

function Recipe() {
  return (
    <div style={{textAlign:'center'}}> 
    <h1>Recipe App</h1>
      <form action="">
        <label htmlFor="">title : </label>
        <input type="text" /> <br /><br />
        <label htmlFor="">description : </label>
        <input type="text" /><br /><br />
        <label htmlFor="">ingredients : </label>
        <input type="text" /><br /><br />
        {/* <input type="text" /><br /><br /> */}

      </form>
      <button>Add</button>
    </div>
  )
}

export default Recipe;