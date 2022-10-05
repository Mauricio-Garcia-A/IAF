
export default function useSimuladorAPI({tipo}) {
    const opciones = [
        {
            tipo:'especialidades-medicas',
            titulo:'Con más de 50 especialidades y un plantel médico de reconocida trayectoria nacional e internacional.',
            descripcion:'El 14 de marzo de 1994, el Instituto Alexander Fleming abrió sus puertas a la excelencia médica y científica. Hoy somos una de las instituciones de mayor prestigio en el país.',
            seleccionOpcionesDetalles: [
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

        },
        {
            tipo:'historia-del-instituto',
            titulo:'Con una trayectoria de casi 30 años',
            descripcion:'El 14 de marzo de 1994, el Instituto Alexander Fleming abrió sus puertas a la excelencia médica y científica. Hoy somos una de las instituciones de mayor prestigio en el país.',
            seleccionOpcionesDetalles: [
                {   texto:'STAFF MÉDICO',
                    linkURL:'http://www.google.com'
                },
                {   texto:'CAPACITATE EN IAF',
                    linkURL:'http://www.google.com'
                },
                
            ]

        }
    ]

   let opcionSeleccionada = opciones.filter(opcion=>opcion.tipo === tipo)[0]


    const informacionSeccionPaciente = {
        sedes: [
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
        ],
        seleccionOpcionesPaciente: [
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
        ],

    }




    return { opcionSeleccionada, informacionSeccionPaciente};
}
