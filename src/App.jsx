import React from 'react'
import Home from './components/Home'
import Shop from './components/Shop'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout' 

export default function App() {


  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/shop',element:<Shop/>},
      ]
    }
  ])



  return (
    


    <>

<RouterProvider router={router}/>


{/* 
<div className="arrival">
  <h2>New Arrivals</h2>

  <div className="allitems">
    
      <div className="itm">
        <img src="./bp.jpg" alt="" />
        <p>Blood Pressure Monitor</p>
        <h5>Rs.540</h5>
        <span></span>
        <h4>Add to Wishlist</h4> 
      </div>

      <div className="itm">
        <img src="./unit.jpg" alt="" />
        <p>Blood Pressure Monitor</p>
        <h5>Rs.540</h5>
        <span></span>
        <h4>Add to Wishlist</h4> 
      </div>

      <div className="itm">
        <img src="./lmns.jpg" alt="" />
        <p>Blood Pressure Monitor</p>
        <h5>Rs.540</h5>
        <span></span>
        <h4>Add to Wishlist</h4> 
      </div>
    
      <div className="itm">
        <img src="./oils.jpg" alt="" />
        <p>Blood Pressure Monitor</p>
        <h5>Rs.540</h5>
        <h4>Add to Wishlist</h4> 
      </div>
  </div>
</div>
     */}

    </>
  )
}
