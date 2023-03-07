import React from 'react'
import "./Services.css"
import Card from "../../components/card/Card"
import Img from "../../assets/photo-1572955304332-bf714bd49add.avif";

const Services = () => {
  return (
    <div className='App__services'>
        <h3>Nuestros servicios</h3>
        <div className="App__services-container">
           <Card title="Cortes y estilismo"></Card>
           <Card title="Corrección de color"></Card>
           <Card title="" Image={Img}></Card>
           <Card title="Tratamientos para el cabello"></Card>
        </div>
    </div>
  )
}

export default Services
