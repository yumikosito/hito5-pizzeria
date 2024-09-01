import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faEye, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../../index.css'
import {Link} from 'react-router-dom'

const CardPizza = (pizza) => {
  const precioFormat= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(pizza.price)


  return (
    <div>
        <div className="card">
          <img src={pizza.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className='d-flex flex-row'>
            <FontAwesomeIcon icon={faPizzaSlice} />
            <h5 className="card-title p-1">{pizza.name}</h5>
            </div>
            <p className="card-text">Descripcion: {pizza.desc}</p>

            <p className="card-text">Ingredientes:</p>
            <ul >
                {pizza.ingredients ? pizza?.ingredients.map((ingredient, index) => ( <li key={index}>{ingredient}</li>)) : null}
              </ul>

            <p className="card-text">Precio: {precioFormat}</p>
            <div className='d-flex flex-row justify-content-between'>
              <Link to='/pizza/p001' className="btn btn-primary">Ver mas <FontAwesomeIcon icon={faEye} /></Link>
              <a href="#" className="btn btn-primary">Agregar <FontAwesomeIcon icon={faCartShopping} /> </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardPizza
