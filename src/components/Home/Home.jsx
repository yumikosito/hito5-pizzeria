import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import CardPizza from '../Cards/CardPizza'


export default function Home() {
  const [pizza,setPizza]=useState([])
  const getData= async() =>{
      let res= await fetch ("http://localhost:5000/api/pizzas")
      let data= await res.json()
      setPizza(data)
  }
  
  useEffect (()=>{
    getData()
  },[])
  
  return (
    <div className='vw-100 pt-5'>
      <Header/>
      <div className='container-fluid'>
        <div className='row'>
          {pizza.map(item=> (
            <div className='col-md-4 col-xs-12'>
              <CardPizza key={item.id} name={item.name} price={item.price} ingredients={item.ingredients} img={item.img} desc={item.desc}/>
            </div>))}
        </div>
      </div>
    </div>
  )
}
