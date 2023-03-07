import React from 'react'
import "./Header.css"
import Image from "../../assets/photo-1548207800-8c16d068bf17.avif"

function header() {
  return (
    <div className='app__header flex__center'>
       <div className="app__header-letf flex__center">
              <h3>Bienvenidos al Salon Jeskarin</h3>
              <div className='app__header-letf-container flex__center'>
                  <div className='flex__center'>
                     <p>CALLE DE EJEMPLO 123,</p>
                     <p>NUEVA YORK, NY 12345</p>
                  </div>
                  <div  className='romper flex__center'>
                     <p>(555) 555-5555</p>
                     <p>CORREOELECTRONICO@EJEMPLO.COM</p>
                  </div>
              </div>
       </div>
       <div className="app__header-right flex__center">
          <div className="app__header-right_img">
              <img src={Image} alt="" srcset="" />
          </div>
       </div>
    </div>
  )
}

export default header
