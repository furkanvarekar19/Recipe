import React from 'react'
import { useLocation } from 'react-router-dom';

function Detailspage() {

  const loaction = useLocation();

  const data1 = loaction.state;

 


  return (
    <div>
        <h1>Detailspage</h1>
        <h1> {data1.data.title} </h1>
        <p> {data1.data.description} </p>
        <p> {data1.data.ingredients} </p>
        <p> {data1.data.preparation} </p>

    </div>
  )
}

export default Detailspage