import React from 'react'
import "./Subscription.css"
import Flower from "../flower/Flower"
import Img1 from "../../assets/photo-1580820258381-20c91a156841.avif"
import Img2 from "../../assets/photo-1595476108010-b4d1f102b1b1.avif"



const Subscription = () => {
  return (
    <div className='App__subscription'>
       <div  className='App__subscription-container'>
            <div className='App__subscription-container-letf'>
                <div>
                    <img src={Img1} alt="" />
                    <p>* <span className='line'>El equipo:</span> los mejores estilistas de la ciudad</p>
                </div>
            </div>
            <div className='App__subscription-container-right'>
                <div>
                    <img src={Img2} alt="" />
                    <p>* <span className='line'>El salón:</span> los mejores estilistas de la ciudad</p>
                </div>
            </div>
       </div>
       <div className='App__subscription-subs'>
            <h3>Suscribirme</h3>
            <div>
                <p>Regístrate con tu dirección de correo electrónico para recibir noticias y actualizaciones.</p>
            </div>
            <form action="">
                <input type="text" name="" id="" placeholder='Correo Electronico' />
                <input type="submit" value="Suscribirse" />
            </form>
            <p>Respetamos tu privacidad.</p>
       </div>
    </div>
  )
}

export default Subscription
