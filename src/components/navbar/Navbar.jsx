import React,{useState} from "react";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
import "./Navbar.css"

function Navbar() {

  const [ToggleMenu,setToggleMenu]= useState(false);

  const Menu=()=>(
      <>
      <p><a href="#home">Servicios</a></p>
      <p><a href="#wgpt3">Equipos</a></p>
      <p><a href="#possibility">Higuiene y Seguidad</a></p>
      </>
  )

  return (
    <div className='App__navbar'>
        <nav className='App__navbar-menu flex__center'>
            <a href="">Servicios</a>
            <a href="">Equipos</a>
            <a href="">Higuiene y Seguidad</a>
        </nav>
        <div className='App__navbar-logo flex__center'>
            <h3>Salon Jeskarin</h3>
        </div>
        <div className='App__navbar-boton flex__center'>
            <button>Reservar una cita</button>
        </div>
        <div className="gpt3__navbar-menu">
            {ToggleMenu ? <RiCloseLine color="#e9ee63" size={27} onClick={()=>{setToggleMenu(false)}}/>
            : <RiMenu3Line color="#e9ee63" size={27} onClick={()=>{setToggleMenu(true)}}/>
            }

            {ToggleMenu && ( <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                   <Menu></Menu>
                    <div className="gpt3__navbar-menu_container-links-sign">
                        <p>Sing in</p>
                        <button type="button">Sing Up</button>
                    </div>
                </div>
            </div>)}

            </div>
    </div>
  )
}

export default Navbar
