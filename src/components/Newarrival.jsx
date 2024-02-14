import React from 'react'
import Shop from './Shop'

function Newarrival(props) {

    const {id,img,title,price} = props
  return (
   <>
   
  <div className="allitems">
    
      <div className="itm">
        <img src={img} alt="" />
        <p>{title}</p>
        <h5>{price}</h5>
        <span></span>
        <button onClick={()=>{alert("Added to cart")}} >Add to cart</button>
   </div>

   </div>

   </> 


  )
}

export default Newarrival