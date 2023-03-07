import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='App__footer'>
       <div className="App__footer-top">
            <div className="content flex__center">
                <h3>Nos vemos pronto</h3>
            </div>
            <button>Reservar una Cita </button>
       </div>
       <div className="App__footer-botton">
            <div className='section-1 flex__center'>
                <h3>HORARIO</h3>
                <div>
                    <p>Lunes: CERRADO</p>
                    <p>Martes a domingo: 9:00 h a 19:00 h</p>
                    <p>Sábado a domingo: 10:00 h a 19:00 h</p>
                </div>
                <div>
                    <p>CALLE DE EJEMPLO 123,</p>
                    <p>NUEVA YORK, NY 12345</p>
                    <p>(555) 555-5555</p>
                </div>
            </div>
            <div className='section-2 flex__center'>
                <h3>MENÚ</h3>
                <ul >
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Equipo</a></li>
                    <li><a href="">Higiene y seguridad</a></li>
                    <li><a href="">Tarjeta de regalo</a></li>
                    <li><a href="">Portafolio</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Reservar una cita</a></li>
                </ul>
            </div>
            <div className='section-3 flex__center'>
                <h3>SÍGUENOS</h3>
                <ul >
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Pinterest</a></li>
                </ul>
                <p>Hecho por Jeskarin</p>
            </div>
       </div>
    </div>
  )
}

export default Footer
