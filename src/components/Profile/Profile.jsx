import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  return (
    <div className='vw-100 d-flex align-items-center m-0 p-3 flex-column'>
      <h2 className='p-3'>Bienvenid@</h2><br/>
      <h4 className='p-3'>milla.react@gmail.com</h4><br/>

      <Link to='/' className="d-flex justify-content-center btn btn-outline-danger mx-5"><FontAwesomeIcon icon={faPizzaSlice} /> Cerrar sesion</Link><br/>
      
    </div>
  )
}

export default Profile
