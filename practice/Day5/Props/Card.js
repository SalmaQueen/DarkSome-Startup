import React from 'react'
import './card.css'
import Data from '../../Day4/Monalisa-ecomerce/Data'


const Card=()=>{
    return(<>
     {
               Data.map((item)=><div className="card" key={item.id}>
                <img src={item.url} alt=""/>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                
            </div>
                )
            }
    </>

    )
}
export default Card;