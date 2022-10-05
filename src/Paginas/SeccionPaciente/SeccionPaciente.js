import React, { useState } from 'react';
import logo from '../../Imagenes/logo-iaf.png'
import imgNuevaTecnologia from '../../Imagenes/img-nueva-tecnologia.png'
import mapa1 from '../../Imagenes/mapa1.png'
import mapa2 from '../../Imagenes/mapa2.png'
import mapa3 from '../../Imagenes/mapa3.png'
import mapa4 from '../../Imagenes/mapa4.png'

import '../../EstilosGlobales/EstilosGlobales.css'
import './SeccionPaciente.css'
import IconoSVG from '../../Componentes/IconosSVG/IconoSVG';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BreadCrumbs from '../../Componentes/BreadCrumbs/BreadCrumbs';


function SeccionPaciente(props) {
    let { id } = useParams()
    let navigate = useNavigate();
    let categoriasBreadCrums = [
        id
    ]

    const sedes = [
        {   Direccion:'Sede Central Colegiales: Conesa 1003-1005',
            imagenURL: mapa1
        },
        {   Direccion:' Sede Unidad Oncología Cutánea: Conesa 1003-1005',
            imagenURL: mapa1
        },
        {   Direccion:'Sede Conesa 1075 (extensión Diagnóstico  por Imágenes)',
            imagenURL: mapa2
        },
        {   Direccion:'Sede Barrio Parque (Swiss Medical Center): San Martin de Tour 2980',
            imagenURL: mapa3
        },
        {   Direccion:'Sede Saavedra (Internación) Dr. Rómulo Naón  4244',
            imagenURL: mapa4
        },

    ]

    const seleccionOpcionesPaciente = [
        {   texto:'ESPECIALIDADES MÉDICAS',
            textoURL:'especialidades-medicas'
        },
        {   texto:' APRENDE DE TU DIAGNOSTICO',
            textoURL:'aprende-de-tu-diagnostico'
        },
        {   texto:'HUB DEL PACIENTE VIDEOS INFORMATIVOS',
            textoURL:'hub-del-paciente'
        },
        {   texto:'HISTORIA DEL INSTITUTO',
            textoURL:'historia-del-instituto'
        },
        {   texto:'VISITA DEL STAFF MEDICO',
            textoURL:'visita-del-staff-medico'
        },
        {   texto:'NOTICIAS',
            textoURL:'noticias'
        },
    ]

    const [mapaSeleccionado, setMapaseleccionado]=useState(sedes[0].imagenURL)
    const [linkSeleccionado, setLinkSeleccionado]=useState(0)
    const handleClick =(indice)=>{
        setMapaseleccionado(sedes[indice].imagenURL)
        setLinkSeleccionado(indice)
    }

    return (
        <div  className='contenedor-SeccionPaciente texto-standar-1-EstillosGlobales'>
            <div className='contenedor-contronl-pagina-EstillosGlobales'>
                <button onClick={()=>navigate(-1)} className='boton-back-GlobalStyle'><IconoSVG tipo='flecha-izquierda' width='30px'/></button>
                <BreadCrumbs categorias={categoriasBreadCrums} />
            </div>
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
                    <div className='contenedor-informacion-sedes-SeccionPaciente'>
                        <h3>CONOCE NUESTRAS SEDES</h3>
                        <div  className='lista-sedes-SeccionPaciente'>
                            {sedes.map((sede,i)=>{
                                return <button 
                                            key={`sede-${i}`} 
                                            className={ i === linkSeleccionado ? 'link-sede-SeccionPaciente active':'link-sede-SeccionPaciente'} 
                                            onClick={()=>handleClick(i)}
                                        >
                                            {sede.Direccion}
                                        </button>
                            })}                        
                        </div>
                    </div>
                    <div className='contenedor-mapa-sedes-SeccionPaciente'>
                       <img src={mapaSeleccionado} className="imagen-mapa-SeccionPaciente" alt="logo" />
                    </div>
                </div>    
            </div>
            
            <div>
                {seleccionOpcionesPaciente.map((opcion,i)=>{
                    return <Link 
                                key={`opcion-SP-${i}`} 
                                
                                to={`/${id}/${opcion.textoURL}/`}
                            >
                                <button className='boton-standar-2-EstillosGlobales'>{opcion.texto}</button>
                            </Link>
                })}    
            </div>
            <button className='boton-chat-SeccionPaciente'>
                <IconoSVG tipo='chat' width='60px' />
            </button>
        </div>
    );
}

export default SeccionPaciente;