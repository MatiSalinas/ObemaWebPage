import logo from '/svgs/logo.svg'
import construccion from '/svgs/construccion.svg'
import mineria from '/svgs/mineria.svg'
import industria from '/svgs/industria.svg'
import vial from '/svgs/vial.svg'
import React, {  useState } from 'react'
import {motion} from 'framer-motion'
function Servicios (){
    const [mouseModulos, setMouseModulos] = useState({1:false,2:false,3:false,4:false})
    return (
    <div className="containerServicios">
        <div className="heroServicios">
        <img src={logo} alt="Logo Obema" className='logoServicios' />
        <div className="lineaAzulServicios"></div>
        <h2>Nuestros servicios</h2>
        <p>Ofrecemos soluciones integrales y personalizadas que abarcan desde la <br />
        planiﬁcación y ejecución de proyectos de construcción, hasta el desarrollo de <br />
        obras modulares y la provisión de bienes y servicios especializados para la <br />
        industria minera. </p>
        </div>

        <div className="cuadradosServiciosC">
        <motion.div className="wrapperServicio" initial={{opacity:0,translateX:"200px"}} whileInView={{opacity:1, translateX:"0"}} viewport={{once:true}} transition={{duration:1}}>
            <div className="cuadradoServicio" onMouseEnter={()=>setMouseModulos({...mouseModulos,1:true})} onMouseLeave={()=>setMouseModulos({...mouseModulos,1:false})} >
                <div className="superiorCuadradoServicio">
                    <div className="tituloTextoServicio">
                        <h3>Construcción</h3>
                        <motion.p initial={{opacity:1,height:"1rem"}} animate={(mouseModulos[1]) ? {height:'0rem' , opacity:0}:{height:'1rem' , opacity:1}}>Ejecutamos proyectos integrales con los más altos estándares de calidad</motion.p>
                    </div>
                        <img src={construccion} alt="" className='imgContainerServicios'/>
                </div>
                <div className="wraperTyS">
            
                    <div className="textoOcultoServicio"  style={(mouseModulos[1])? {opacity:1} : {opacity:0}}>
                        OBEMA se especializa <br /> en la construcción de obras de gran envergadura, <br />  priorizando la calidad,  seguridad <br /> y  el cumplimiento de los plazos establecidos <br /> Nuestro equipo profesional garantiza <br /> resultados eficientes y duraderos  <br />en cada proyecto que emprendemos
                    </div>
                    <img src="/images/servicios/CONSTRUCCION-NUEVA.png" className='imgServicio' />
                </div>
            
            </div>
            <div className="cuadradoServicio"  onMouseEnter={()=>setMouseModulos({...mouseModulos,2:true})} onMouseLeave={()=>setMouseModulos({...mouseModulos,2:false})}>
                <div className="superiorCuadradoServicio">
                    <div className="tituloTextoServicio">
                        <h3>Campamentos</h3>
                        <motion.p initial={{opacity:1,height:"1rem"}} animate={(mouseModulos[2]) ? {height:'0rem' , opacity:0}:{height:'1rem' , opacity:1}}>Soluciones modulares eficientes y personalizados para la industria minera
                        </motion.p>
                    </div>
                        <img src={mineria} alt="" className='imgContainerServicios'/>
                </div>
                <div className="wraperTyS">
            
                    <div className="textoOcultoServicio"  style={(mouseModulos[2])? {opacity:1} : {opacity:0}}>OBEMA se especializa en la <br /> construcción de módulos habitacionales para la minería, <br /> diseñados para proporcionar comodidad <br /> y funcionalidad en entorno exigentes. <br /> Nuestro compromiso con la calidad <br /> y la seguridad asegura que cada módulo <br />cumpla con los estándares requeridos, <br /> ofreciendo un espacio seguro y eficiente para los trabajadores
                    </div>
                    <img src="/images/servicios/CAMPAMENTO-NUEVA.png" className='imgServicio' />
                </div>
            </div>
        </motion.div>

<motion.div className="wrapperServicio" initial={{opacity:0,translateX:"-200px"}} whileInView={{opacity:1, translateX:"0"}} viewport={{once:true}} transition={{duration:1}}>
    
            <div className="cuadradoServicio" onMouseEnter={()=>setMouseModulos({...mouseModulos,3:true})} onMouseLeave={()=>setMouseModulos({...mouseModulos,3:false})}>
                <div className="superiorCuadradoServicio">
                    <div className="tituloTextoServicio">
                        <h3>Industria</h3>
                        <motion.p initial={{opacity:1,height:"1rem"}} animate={(mouseModulos[3]) ? {height:'0rem' , opacity:0}:{height:'1rem' , opacity:1}}>Módulos innovadores y sostenibles adaptados a las necesidades de cada destino
                        </motion.p>
                    </div>
                        <img src={industria} alt="" style={{fill:"#ffdabe",stroke: "#97380f"}} className='imgContainerServicios'/>
                </div>
                <div className="wraperTyS">
    
                    <div className="textoOcultoServicio"  style={(mouseModulos[3])? {opacity:1} : {opacity:0}}>OBEMA se enfoca en el desarrollo <br /> de proyectos de construcción para la industria, <br /> ofreciendo soluciones personalizadas  <br />que combinan innovación y eficiencia.<br /> Nuestro compromiso es entregar obras <br /> que cumplen con los más altos estándares <br /> de calidad y seguridad,<br /> asegurando la satisfacción del cliente <br /> en cada etapa del proceso.
                    </div>
                    <img src="/images/servicios/Industria-750.png" className='imgServicio' />
                </div>
            </div>
    
    
            <div className="cuadradoServicio" onMouseEnter={()=>setMouseModulos({...mouseModulos,4:true})} onMouseLeave={()=>setMouseModulos({...mouseModulos,4:false})}>
                <div className="superiorCuadradoServicio">
                    <div className="tituloTextoServicio">
                        <h3>Vial</h3>
                        <motion.p initial={{opacity:1,height:"1rem"}} animate={(mouseModulos[4]) ? {height:'0rem' , opacity:0}:{height:'1rem' , opacity:1}}>Trabajamos y mantenemos infraestructuras viales seguras y modernas</motion.p>
                    </div>
                        <img src={vial} alt="" style={{fill:"#FFF",stroke: "#97380f"}} className='imgContainerServicios'/>
                </div>
                <div className="wraperTyS">
    
                    <div className="textoOcultoServicio"  style={(mouseModulos[4])? {opacity:1} : {opacity:0}}>
                    OBEMA se dedica a la construcción <br /> de obras viales, garantizando  <br />la creación de infraestructuras seguras y eficientes. <br /> Nuestro enfoque en la calidad<br /> y la planificación meticulosa <br /> nos permite cumplir con los plazos establecidos,<br /> brindado soluciones adaptadas a <br />las necesidades de cada proyecto.
                    </div>
                    <img src="/images/servicios/Vial-750.png" className='imgServicio' />
                </div>
            </div>
</motion.div>


        </div>

    </div>
    )
}

export default Servicios;