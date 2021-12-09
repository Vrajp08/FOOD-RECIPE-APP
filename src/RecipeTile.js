import React from 'react'
import './App.css';




function RecipeTile({recipe}) {
    return (
        <div className = "recipeTile" onClick={()=>{
            window.open(recipe["recipe"]["url"])
        }}> 
          {/* eslint-disable-next-line  */}
        <img className = "recipeTile__img" src ={recipe["recipe"]["image"]} />
        
            <p className = "recipeTite_name">{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeTile
