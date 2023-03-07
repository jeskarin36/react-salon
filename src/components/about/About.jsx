import React from 'react'
import "./About.css"
import Image from "../../assets/photo-1561382554-68c3e414d5d1.avif"
const About = () => {
  return (
    <div className='App__about'>
        <div className="App__about-letf flex__center">
            <div>
                <img src={Image} alt="" />
            </div>
        </div>
        <div className="App__about-right">
            <div>
                <h3>Una nueva visión del cabello</h3>
            </div>
            <div>
                <p>Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más. O bien, es posible que tengas un proyecto creativo para compartir con el mundo. Sea lo que sea, la manera en la que cuentes tu historia online puede marcar la diferencia.</p>
            </div>
            <div>
                <button>Conoce al Equipo</button>
            </div>
        </div>
    </div>
  )
}

export default About
