import React from 'react'
import Newarrival from './Newarrival'
import Shop from './Shop'
import { Link } from 'react-router-dom'

function Home() {

  const cartitems = [
    {id:1,img:'bp.jpg',title:"Blood Pressure Monitor",price:"Rs.540"},
    {id:2,img:'unit.jpg',title:"Humidifying Unit for Home",price:"Rs.700"},
    {id:3,img:'lmns.jpg',title:"Olly Vitamin D3",price:"Rs.200"},
    {id:4,img:'oils.jpg',title:"Essential Oils",price:"Rs.565"},

  ]


  return (
        <>
    <div className="top">
      <p>FREE SHIPPING ON ALL ORDERS OVER Rs.500</p>
    </div>
    <div className="header">
      <a href="" id='logo'>PHARMA</a>

      <div className="hcomp">
      <ul>

      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>

        <li><a href="">Track Order</a></li>
        <li><a href="">Wishlist</a></li>
        <li><a href="">Account</a></li>

      </ul>
</div>

    </div>

    <div className="home-page">
          <div className="title">
                  <h5>Online Medical Supplies</h5>
                  <h1>Get your Vitamins & <br />Minerals</h1>
                  <button>Shop Now</button>
          </div>
          <div className='frontimg'>
                <img src='banner.png' />
          </div>
    </div>


    <div className="cardsection">
      <div className="allcards">
            <div className="card">
              <img src="hand.png" alt="" />
                <div className="ctitle">
                <h5>Secure Payment</h5>
                <p>ALL CARDS ACCEPTED</p>
                </div>
            </div>

            <div className="card">
              <img src="support.png" alt="" />
                <div className="ctitle">
                <h5>Online Support</h5>
                <p>TECHNICAL 24/7</p>
                </div>
            </div>

            <div className="card">
              <img src="truck.png" alt="" />
                <div className="ctitle">
                <h5>Free Shipping</h5>
                <p>ON ALL ORDERS</p>
                </div>
            </div>

            <div className="card">
              <img src="discount.png" alt="" />
                <div className="ctitle">
                <h5>Discounts Online</h5>
                <p>WEEKEND SALES</p>
                </div>
            </div>

      </div>
    </div>
    
    <div className="nextsec">
      <div className="twoimgs">

        <div className="firstone">
        <img src="2img.png" alt="" />
        <div className="img1">
        <p>Your Daily-life protection</p>
        <h3>Protein Supplement</h3>
        <button>Shop Now</button>
        </div>
        </div>

        <div className="secondone">
        <img src="1img.png" alt="" />
        <div className="img2">
        <p>Get upto 25% discount</p>
        <h3>Immunity Booster</h3>
        <button>Shop Now</button>
        </div>
        </div>

      </div>
    </div>
    <h2>New Arrivals</h2>

    <div className="wholesec">

    
{
    cartitems.map((items)=>{
        return(
            <Newarrival key = {items.key}{...items}/>
        )
    })
}
</div>






</>
    )
}

export default Home