import React from 'react';
import logo from '../../Imagenes/logo-iaf.png'

import '../../EstilosGlobales/EstilosGlobales.css'
import './SeccionDetalles.css'

export default function SeccionDetalles(props) {


    const seleccionOpcionesDetalles= [
        {   texto:'STAFF MÉDICO',
            linkURL:'http://www.google.com'
        },
        {   texto:'CAPACITATE EN IAF',
            linkURL:'http://www.google.com'
        },
        {   texto:'AREAS MÉDICAS',
            linkURL:'http://www.google.com'
        },
        {   texto:'PUBLICACIONES',
            linkURL:'http://www.google.com'
        },
        {   texto:'ECHO - ENSAYOS CLINICOS',
            linkURL:'http://www.google.com'
        },
    ]

    return (
        <div  className='contenedor-SeccionDetalles texto-standar-1-EstillosGlobales'>
            <header className='encabezado-SeccionDetalles'>
                <div className='contenedor-logo-SeccionDetalles'>
                    <img src={logo} className="logo-SeccionDetalles" alt="logo" />
                </div>
                <h2 className='titulo-seccion-SeccionDetalles'>MUCHO MÁS QUE ONCOLOGÍA</h2>
            </header>
            <section className='contenedor-informacion-SeccionDetalles'>
                <h1>Con más de 50 especialidades y un plantel médico de reconocida trayectoria nacional e internacional.</h1>
                <p>El 14 de marzo de 1994, el Instituto Alexander Fleming abrió sus puertas a la excelencia médica y científica. Hoy somos una de las instituciones de mayor prestigio en el país.</p>
                <div className='contenedor-botones-detalles-SeccionDetalles'>
                    {seleccionOpcionesDetalles.map((opcion,i)=>{
                        return <button key={`opcion-SD-${i}`} className='boton-standar-4-EstillosGlobales'>
                                {opcion.texto}
                                </button>
                    })} 
                </div>

            </section>
        </div>
    );
}