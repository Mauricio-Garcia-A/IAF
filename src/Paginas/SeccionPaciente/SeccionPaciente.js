import React from 'react';
import logo from '../../Imagenes/logo-iaf.png'
import imgNuevaTecnologia from '../../Imagenes/img-nueva-tecnologia.png'

import '../../EstilosGlobales/EstilosGlobales.css'
import './SeccionPaciente.css'

function SeccionPaciente(props) {
    const sedes = [
        {   Direccion:'Sede Central Colegiales: Conesa 1003-1005',
            linkURL:'http://www.google.com'
        },
        {   Direccion:' Sede Unidad Oncología Cutánea: Conesa 1003-1005',
            linkURL:'http://www.google.com'
        },
        {   Direccion:'Sede Conesa 1075 (extensión Diagnóstico  por Imágenes)',
            linkURL:'http://www.google.com'
        },
        {   Direccion:'Sede Barrio Parque (Swiss Medical Center): San Martin de Tour 2980',
            linkURL:'http://www.google.com'
        },
        {   Direccion:'Sede Saavedra (Internación) Dr. Rómulo Naón  4244',
            linkURL:'http://www.google.com'
        },

    ]

    const seleccionOpcionesPaciente = [
        {   texto:'ESPECIALIDADES MÉDICAS',
            linkURL:'http://www.google.com'
        },
        {   texto:' APRENDE DE TU DIAGNOSTICO',
            linkURL:'http://www.google.com'
        },
        {   texto:'HUB DEL PACIENTE VIDEOS INFORMATIVOS',
            linkURL:'http://www.google.com'
        },
        {   texto:'HISTORIA DEL INSTITUTO',
            linkURL:'http://www.google.com'
        },
        {   texto:'VISITA DEL STAFF MEDICO',
            linkURL:'http://www.google.com'
        },
        {   texto:'NOTICIAS',
            linkURL:'http://www.google.com'
        },
    ]

    return (
        <div  className='contenedor-SeccionPaciente texto-standar-1-EstillosGlobales'>
            <header className='encabezado-SeccionPaciente'>
                <img src={logo} className="logo-SeccionPaciente" alt="logo" />
                <h2>MUCHO MÁS QUE ONCOLOGÍA</h2>
                <button className='boton-standar-3-EstillosGlobales'>CONTACTO Y TELÉFONOS ÚTILES</button>
            </header>
            
            <h1>Tu bienestar es nuestra mayor prioridad.</h1>
            <div className='contenedor-informacion-SeccionPaciente'>
                <div className='seccion-nuevas-tecnologias-SeccionPaciente'>
                    <img src={imgNuevaTecnologia} className="imagen-nueva-tecnologia-SeccionPaciente" alt="logo" />
                    <h3 className='texto-nueva-tecnologia-SeccionPaciente'>NUEVA TECNOLOGÍA</h3>
                    <button className='boton-nueva-tecnologia-SeccionPaciente  boton-standar-2-EstillosGlobales'>INGRESA A MI PORTAL</button>
                </div>
                <div className='contenedor-sedes-SeccionPaciente'>
                    <div>
                        <h3>CONOCE NUESTRAS SEDES</h3>
                        <div  className='lista-sedes-SeccionPaciente'>
                            {sedes.map((sede,i)=>{
                                return <p key={`sede-${i}`} className='link-sede-SeccionPaciente'>
                                        {sede.Direccion}
                                        </p>
                            })}                        
                        </div>
                    </div>
                    <div className='contenedor-mapa-SeccionPaciente'>
                        MAPA
                    </div>
                </div>    
            </div>
            
            <div>
                {seleccionOpcionesPaciente.map((opcion,i)=>{
                    return <button key={`opcion-SP-${i}`} className='boton-standar-2-EstillosGlobales'>
                            {opcion.texto}
                            </button>
                })}    
            </div>
        </div>
    );
}

export default SeccionPaciente;