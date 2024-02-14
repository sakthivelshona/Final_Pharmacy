import React from 'react'

function Shop() {


const category = [
    {id:1,img:'https://images.apollo247.in/pub/media/catalog/category/babycare_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Baby Care'},
    {id:2,img:'https://images.apollo247.in/pub/media/catalog/category/personalcare_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Personal Care'},
    {id:3,img:'https://images.apollo247.in/pub/media/catalog/category/health_and_nutrition_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Health Drinks & Supplements'},
    {id:4,img:'https://images.apollo247.in/pub/media/catalog/category/skin_care_range.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Skin Care'},
    {id:5,img:'https://images.apollo247.in/pub/media/catalog/category/womencare_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Women Care'},
    {id:6,img:'https://images.apollo247.in/pub/media/catalog/category/protein_supplements_1.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Protein Powders & Drinks'},
    {id:7,img:'https://images.apollo247.in/pub/media/catalog/category/multi_vitamins.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Multivitamins'},
    {id:8,img:'https://images.apollo247.in/pub/media/catalog/category/healthdevices_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Health Devices'},
    {id:9,img:'https://images.apollo247.in/pub/media/catalog/category/ayurvedic_range_1.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Ayurveda'},
    {id:10,img:'https://images.apollo247.in/pub/media/catalog/category/glucometer_strips_1.jpg?tr=w-367.5,q-100,f-webp,c-at_max',title:'Glucometers & Test Stripes'},

]


  return (
<>
<h2>Shop by Category</h2>

<div className="shopbycat">

{
    category.map((items)=>{
        return(
                <>
            <div className="wholecat">
            <div key={items.id} className='catitm'>
                <img src={items.img} alt={items.title} />
                <h4>{items.title}</h4>
            </div>
            </div>
            </>
        )
    })
}
</div>

</>  )
}

export default Shop