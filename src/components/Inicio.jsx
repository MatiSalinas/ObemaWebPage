import { Link } from 'react-router-dom'
import  video  from '/video/OBEMAINICIOVIDEO.mp4'
import logoAzul from '/svgs/logo_azul.svg'
import construccion from '/svgs/construccion.svg'
import mineria from '/svgs/mineria.svg'
import industria from '/svgs/industria.svg'
import vial from '/svgs/vial.svg'
import Garantialogo from '/svgs/Garantialogo.svg'
import facilidadlogo from '/svgs/facilidadlogo.svg'
import rayologo from '/svgs/rayologo.svg'
import Aislamientologo from '/svgs/Aislamientologo.svg'
import resistencialogo from '/svgs/resitencialogo.svg'
import scrollHint from '/svgs/swipe-left.svg'
import useEmblaCarousel from 'embla-carousel-react'
import React, {useState,useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { useDraggable } from "react-use-draggable-scroll";
function Inicio(){
    const isMobile = window.innerWidth < 800;
    const [mouseModulos, setMouseModulos] = useState({1:false,2:false,3:false,4:false})
    const [mouseVentajas, setMouseVentaja] = useState({1:false,2:false,3:false,4:false,5:false})
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true },[Autoplay()])
    const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true },[Autoplay()])
    const [historiaHover, setHistoriaHover] = useState({1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false,10:false,11:false,12:false,13:false})

    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
    return (
        <div className="containerInicio">
            <div className="heroLandScape">
                <video autoPlay loop muted playsInline className="videoLandScape">
                    <source src={video} type="video/mp4"/>
                </video>
                <motion.h1 initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="tituloHero">  Diseño inteligente, <br />construcción conﬁable</motion.h1>
                <motion.p initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}}>Trabajamos a la medida de tus necesidades</motion.p>
                <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="botonesLandScape">
                <Link to='/portfolio' className='botonLS'>CONOCE MAS SOBRE NOSOTROS</Link >
                <Link to='/contacto' className='botonLS'>CONTACTANOS</Link >
                </motion.div>
            </div>
            
            <div className="franjaGris"></div>
            <div className="rubros">
            <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="rubroItem">
                <div className="imgContainer"><img src={construccion} alt="Construcción" /></div>
                <h3>Construcción</h3>
                <p className="rubroP">Especializados en la ejecución de obras de infraestructura ofreciendo soluciones integrales y de calidad.</p>
            </motion.div>
            <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}}  transition={{duration:1}} className="rubroItem">
                <div className="imgContainer"><img src={mineria} alt="Campamentos" /></div>
                <h3>Campamentos</h3>
                <p className="rubroP">Ofrecemos soluciones integrales para proyectos mineros, enfocándonos en la construcción de infraestructuras seguras y eficientes.</p>
            </motion.div>
            <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="rubroItem">
                <div className="imgContainer"><img src={industria} alt="Industria" /></div>
                <h3>Industria</h3>
                <p className="rubroP">Proporcionamos soluciones de construcción para el sector industrial, enfocándonos en la creación de infraestructuras funcionales y seguras.</p>
            </motion.div>
            <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="rubroItem">
                <div className="imgContainer" ><img src={vial} alt="Vial" id='cono' /></div>
                <h3>Vial</h3>
                <p className="rubroP">Transformamos la movilidad a través de nuestras soluciones de construcción vial, garantizando la seguridad y comodidad de todos los usuarios.</p>
            </motion.div>
</div>




            <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="BloqueInicioPortfolio">
                <div className="lineaAzul"></div>
                <h1>Conocé nuestras obras,{isMobile ? (""):(<br />)} proyectos y servicios</h1>
                <h2 id='accede'>Accedé a nuestro porfolio y conocé los proyectos más relevantes de <span>OBEMA SA.</span></h2>
                <button type="button"></button>
                <Link to="/portfolio" className='botonLink' >PORTFOLIO</Link>
            </motion.div>

            <div className="moduloTuristico">
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/carouselInicio/1.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/carouselInicio/2.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/carouselInicio/3.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/carouselInicio/4.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/carouselInicio/5A.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/carouselInicio/6A.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/carouselInicio/7A.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/carouselInicio/8A.jpg" /></div>
                        
                </div>
            </div>
            </div>

            <div className="AboutUs">
                <div className="lineaBlanca"></div>
                <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="quienesSomos">
                    <h2>Quienes somos</h2>
                    <div className="quienesSomosP">
                        <span>OBEMA S.A</span> es una empresa nacida en la ciudad de La Rioja, Argentina, que colabora estrechamente con otras empresas para ofrecer soluciones a terceros en términos de proyectos, construcción y una amplia gama de trabajos relacionados con bienes y servicios para la minería. <br />
                        Estas soluciones son una alternativa conveniente, económica y conﬁable.
                    </div>
                    <div className="mYv">
                        <div className="mision">
                            <h2>NUESTRA MISIÓN</h2>
                            <p>Nuestra misión es incorporar una nueva rama de negocio en la empresa que nos  permita generar valor para la provincia y poder comercializar productos manufacturados de La Rioja fuera de la provincia.</p>
                        </div>
                        <div className="vision">
                            <h2>NUESTRA VISIÓN</h2>
                            <p>Nuestra visión es innovar y generar productos sostenibles y respetuosos con el medio ambiente.</p>
                        </div>
                    </div>
                </motion.div>
                
            </div>


            <div className="historia" onClick={()=>setHistoriaHover({1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false,10:false,11:false,12:false,13:false})}>
                <div className="lineaAzulHistoria"></div>
                <h1>Nuestra Historia</h1>
                <img src={logoAzul} alt="" className="azul" />

                <motion.div  initial={{opacity:0,translateX:"200px"}} whileInView={{opacity:1,zoom:1,translateX:0}} viewport={{once:true}} transition={{duration:1}} className="scrollHistoria"  {...events} ref={ref}>
                        <div className="scroll-hint">
                            <motion.img src={scrollHint}  initial={{opacity:1}} whileInView={{opacity:0, translateX:"-200px"}} viewport={{once:true}} transition={{duration:10}} />
                        </div>
                        <div className="franjaSuperior">
                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,1:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,1:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,1:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,1:false})}>
                                    <motion.img src="/images/historia/1Cocina-SUBOFICIALES.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[1]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p>Cocina Suboficiales</p>
                                <div className="circuloNodo">
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>
                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,2:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,2:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,2:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,2:false})}>
                            <motion.img src="/images/historia/3Gimnasio-SUPERDOMO.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[2]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p>Gimnasio SuperDomo</p>
                                <div className="circuloNodo">
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>
                            <div className="nodoSup"  onMouseEnter={()=>setHistoriaHover({...historiaHover,3:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,3:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,3:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,3:false})}>
                            <motion.img src="/images/historia/5Acueducto-SANCARLOS.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[3]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p>Acueducto San Carlos</p>
                                <div className="circuloNodo">
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>
                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,4:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,4:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,4:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,4:false})}>
                            <motion.img src="/images/historia/7Polideportivo-EVITA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[4]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p>Polideportivo Evita</p>
                                <div className="circuloNodo">
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>
                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,5:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,5:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,5:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,5:false})}> 
                            <motion.img src="/images/historia/CLUB-BANCO-RIOJA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[5]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p>Club Banco Rioja <br />Estructura IPN</p>
                                <div className="circuloNodo">
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>
                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,6:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,6:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,6:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,6:false})}>
                            <motion.img src="/images/historia/11Acueducto-TOTORAL-DE-LA-SIERRA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[6]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p>Acueducto <br />Totoral de la Siera</p>
                                <div className="circuloNodo">
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>

                            
                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,7:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,7:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,7:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,7:false})} >
                            <motion.img src="/images/historia/12Recuperacion-PAISAJE-HIDRICO.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[7]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p id='ultimoPnodo'>Recuperación de paisajes hídricos y saneamiento rio tajamar</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,14:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,14:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,14:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,14:false})} >
                            <motion.img src="/images/historia/14-Plan-de-asfaltado-Llano-Riojanos.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[14]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p id="ultimoPnodo">Plan de asfaltado - Zona de los Llanos Riojanos </p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,16:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,16:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,16:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,16:false})} >
                            <motion.img src="/images/historia/16-Iluminacion-POLIVARGAS.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[16]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                            <p id="ultimoPnodo">Iluminación polideportivo de Vargas</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,18:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,18:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,18:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,18:false})} >
                            <motion.img src="/images/historia/18-Refaccion-DOMO.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[18]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                            <p id="ultimoPnodo">Refacción Superdomo - World Paddel Tour</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,20:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,20:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,20:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,20:false})} >
                            <motion.img src="/images/historia/2024-PLANTA-INDUSTRIAL-OBEMA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[20]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p id="ultimoPnodo">2024 Planta Industrial OBEMA SA - La Rioja Capital</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,32:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,32:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,32:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,32:false})} >
                            <motion.img src="/images/historia/MODULO-HABITACIONAL-SANAGASTA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[32]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                <p id="ultimoPnodo">Modulo habitacional Sanagasta La Rioja</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,22:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,22:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,22:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,22:false})} >
                            <motion.img src="/images/historia/22-Nueva-sucursal-Banco-Rioja.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[22]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                            <p id="ultimoPnodo">Nueva sucursal Banco Rioja</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,24:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,24:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,24:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,24:false})} >
                            <motion.img src="/images/historia/24-Reparacion-y-reemplazo-tuberia-de-acero.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[24]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                            <p id="ultimoPnodo">Reparación y reemplazo de tubería de acero en acueducto del Salado - Departamento Juan Facundo Quiroga</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,26:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,26:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,26:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,26:false})} >
                            <motion.img src="/images/historia/26-Limpieza-de-rios.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[26]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                            <p id="ultimoPnodo">Limpieza de Ríos - Llanos de La Rioja</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,28:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,28:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,28:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,28:false})} >
                            <motion.img src="/images/historia/28-Camino-al-salado.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[28]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                            <p id="ultimoPnodo">Camino al Salado</p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>


                            <div className="nodoSup" onMouseEnter={()=>setHistoriaHover({...historiaHover,31:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,31:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,31:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,31:false})} >
                            <motion.img src="/images/historia/MODULO-PEA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoria' initial={{opacity:0, height:0}} animate={(historiaHover[31]) ? {height:"200px", width:"200px", opacity:1, y:0, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                            <p id="ultimoPnodo">Garita de seguridad PEA La Rioja </p>
                                <div className="circuloNodo" >
                                    <div className="circulo"></div>
                                    <div className="lineaCirculo"></div>
                                </div>
                            </div>
        
                        </div>
        
                        <div className="lineaHistoria"></div>
                        <div className="franjaInferior">
        
                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,8:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,8:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,8:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,8:false})}>
                            <motion.img src="/images/historia/2Casas-SUSANAQUINTELA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[8]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                    <p>Viviendas <br />Barrio Susana Quintela</p>
                                    </div>
                            </div>
                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,9:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,9:false})} onTouchStart={()=>setHistoriaHover({...historiaHover,9:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,9:false})}>
                            <motion.img src="/images/historia/4Gimnasio-RIOJANO.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[9]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                    <p>Gimnasio <br />Riojano</p>
                                    </div>
                            </div>
                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,10:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,10:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,10:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,10:false})}>
                            <motion.img src="/images/historia/6Planta-COMPACTADESANEAMIENTO.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[10]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                    <p>Planta Compacta <br /> de Sanamiento Cloacal</p>
                                    </div>
                            </div>
                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,11:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,11:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,11:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,11:false})}>
                            <motion.img src="/images/historia/8Riachuelo-ZONANORTE.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[11]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                    <p>Riachuelo <br /> Zona Norte</p>
                                    </div>
                            </div>
                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,12:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,12:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,12:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,12:false})}>
                            <motion.img src="/images/historia/10Defensas-BERMEJO.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[12]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                    <p>Defensas y protección <br />de márgenes Del Bermejo </p>
                                    </div>
                            </div>

                            
                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,13:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,13:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,13:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,13:false})}>
                            <motion.img src="/images/historia/13-SERVICIOS-NACION.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[13]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                    <p>Presentación de proyectos <br />Subsecretaria de recursos hídricos <br />de la Nación </p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,15:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,15:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,15:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,15:false})}>
                            <motion.img src="/images/historia/15-Administracion-OBEMA.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[15]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>OBEMA SA – Administración </p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,17:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,17:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,17:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,17:false})}>
                            <motion.img src="/images/historia/17-Revestimiento-acueducto.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[17]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Revestimiento acueducto en hormigón armado</p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,19:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,19:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,19:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,19:false})}>
                            <motion.img src="/images/historia/19-Concejo-deli.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[19]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Readecuación y puesta en valor en oficinas del Concejo Deliberante - Municipalidad de La Rioja </p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,21:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,21:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,21:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,21:false})}>
                            <motion.img src="/images/historia/21-Muni-bacheo.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[21]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Plan de bacheo Municipio de La Ciudad Capital de La Rioja </p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,23:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,23:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,23:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,23:false})}>
                            <motion.img src="/images/historia/23-Camino-de-reparacion-toma-el-salado.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[23]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Camino de servicio toma del Salado</p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,25:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,25:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,25:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,25:false})}>
                            <motion.img src="/images/historia/25-Readecuacion-predio.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[25]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Readecuacion de Predio Municipal - Departamento Juan Facundo Quiroga </p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,27:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,27:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,27:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,27:false})}>
                            <motion.img src="/images/historia/27-Acueducto-el-portezuelo.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[27]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Acueducto El portezuelo Santa María 18 km</p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,29:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,29:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,29:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,29:false})}>
                            <motion.img src="/images/historia/29-Puesta-a-punto-Club-Chilecito.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[29]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Puesta en valor Atlético Chilecito - Baños, vestuarios, tribunas e iluminación.</p>
                                    </div>
                            </div>


                            <div className="nodoInf" onMouseEnter={()=>setHistoriaHover({...historiaHover,30:true})} onMouseLeave={()=>setHistoriaHover({...historiaHover,30:false})}onTouchStart={()=>setHistoriaHover({...historiaHover,30:true})} onTouchEnd={()=>setHistoriaHover({...historiaHover,30:false})}>
                            <motion.img src="/images/historia/30-Nucelo-centro-administrativo.jpg" alt="Cocina SubOficiales"  className='ImagenHistoriaInferior' initial={{opacity:0, height:0}} animate={(historiaHover[30]) ? {height:"200px", width:"200px", opacity:1, y:-10, borderRadius:"10px"} : {height:"0px",width:"0px",opacity:0,y:-80,borderRadius:"50%"}} transition={{duration:0.5}}/>
                                    <div className="circuloNodo">
                                        <div className="lineaCirculo"></div>
                                        <div className="circulo"></div>
                                        <p>Construcción de Núcleo de escalera en Nuevo Centro Administrativo Provincial La Rioja</p>
                                    </div>
                            </div>


                        </div>
                </motion.div>
                {/* <h2>Accedé a nuestro portfolio y conocé los proyectos más <br />relevantes de <span>OBEMA SA.</span>
                </h2>
                <Link to="/portfolio" className='botonLink' >CONOCE MAS</Link> */}

            </div>

            {/* <div className="modulosIndustriales">
                <div className="imagenModuloIndustrial">
                <div className="carousel__viewport" ref={emblaRef2}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
                </div>

                <div className="infoMI">
                    <div className="lineaAzulMI"></div>
                    <h2>Modulos industriales</h2>
                    <p>Nuestros modulos son producto de un proceso constructivo <br />
                    industrializado. Están diseñadas para adaptarse a <br />
                    diferentes estilos de vida y necesidades, proporcionando soluciones <br />
                    habitacionales prácticas y modernas.
                    </p>
                    <Link to="/modulos" className='botonLink' id='MIBL'>CONOCE MAS</Link>
                </div>
            </div> */}
            
            <div className="ventajasBeneficios">
    <div className="lineaAzulVB"></div>
    <h2>Ventajas y Beneficios</h2>
    <p>De nuestros módulos habitacionales</p>

    <div className="franjaSvgVB">
        <div className="svgVB">
            <img src={Garantialogo} alt="garantiaLogo" className='VBsvg' onMouseEnter={()=> setMouseVentaja({...mouseVentajas, 1:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas, 1:false})} onTouchStart={()=> setMouseVentaja({...mouseVentajas, 1:true})} onTouchEnd={()=> setMouseVentaja({...mouseVentajas, 1:false})}/>
            <p>Rapidez y <br />Eficacia</p>
            <motion.div className="ocultoVentaja" initial={{ color:"#CCCCCC" }} animate={(mouseVentajas[1]) ? { color:"#000" } : { color:"#CCCCCC" }} transition={{ duration:1 }}>
                <p>Se trata de proyectos fabricados en 60 DÍAS de construcción, (dependiendo la cantidad de m2) e instalados en pocos días, para su rápida puesta en marcha.</p>
            </motion.div>
        </div>

        <div className="svgVB" onMouseEnter={()=> setMouseVentaja({...mouseVentajas, 2:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas, 2:false})} onTouchStart={()=> setMouseVentaja({...mouseVentajas, 2:true})} onTouchEnd={()=> setMouseVentaja({...mouseVentajas, 2:false})}>
            <img src={facilidadlogo} alt="facilidadLogo" className='VBsvg' />
            <p>Económicas y<br />Duraderas</p>
            <motion.div className="ocultoVentaja" initial={{ color:"#CCCCCC" }} animate={(mouseVentajas[2]) ? { color:"#000" } : { color:"#CCCCCC" }} transition={{ duration:1 }}>
                <p>Estas viviendas son rentables y duraderas, ofreciendo fácil mantenimiento a lo largo del tiempo.</p>
            </motion.div>
        </div>

        <div className="svgVB" onMouseEnter={()=> setMouseVentaja({...mouseVentajas, 3:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas, 3:false})}onTouchStart={()=> setMouseVentaja({...mouseVentajas, 3:true})} onTouchEnd={()=> setMouseVentaja({...mouseVentajas, 3:false})}>
            <img src={rayologo} alt="rayoLogo" className='VBsvg' />
            <p>Eficiencia <br />Energética</p>
            <motion.div className="ocultoVentaja" initial={{ color:"#CCCCCC" }} animate={(mouseVentajas[3]) ? { color:"#000" } : { color:"#CCCCCC" }} transition={{ duration:1 }}>
                <p>Proporcionan un gran ahorro energético y tienen un menor impacto ambiental. Son una opción sustentable y sostenible.</p>
            </motion.div>
        </div>

        <div className="svgVB" onMouseEnter={()=> setMouseVentaja({...mouseVentajas, 4:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas, 4:false})}onTouchStart={()=> setMouseVentaja({...mouseVentajas, 4:true})} onTouchEnd={()=> setMouseVentaja({...mouseVentajas, 4:false})}>
            <img src={Aislamientologo} alt="aislamientoLogo" className='VBsvg' />
            <p>Aislamiento <br />Térmico y Acústico</p>
            <motion.div className="ocultoVentaja" initial={{ color:"#CCCCCC" }} animate={(mouseVentajas[4]) ? { color:"#000" } : { color:"#CCCCCC" }} transition={{ duration:1 }}>
                <p>Excelente aislamiento térmico y acústico, eliminan la condensación y previenen el anidamiento de roedores e insectos. Son no tóxicas e ignífugas.</p>
            </motion.div>
        </div>

        <div className="svgVB" onMouseEnter={()=> setMouseVentaja({...mouseVentajas, 5:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas, 5:false})} onTouchStart={()=> setMouseVentaja({...mouseVentajas, 5:true})} onTouchEnd={()=> setMouseVentaja({...mouseVentajas, 5:false})}>
            <img src={resistencialogo} alt="resistenciaLogo" className='VBsvg' />
            <p>Seguridad</p>
            <motion.div className="ocultoVentaja" initial={{ color:"#CCCCCC" }} animate={(mouseVentajas[5]) ? { color:"#000" } : { color:"#CCCCCC" }} transition={{ duration:1 }}>
                <p>No emiten llama, humo ni olor, asegurando un entorno seguro y saludable para sus habitantes.</p>
            </motion.div>
        </div>
    </div>
</div>

            <div className="casaModulIndustrial">

                <motion.div initial={{opacity:0,rotateX:30}} whileInView={{opacity:1, rotateX:0}} viewport={{once:true}} transition={{duration:1}} className="infoMI">
                    <div className="lineaAzulMC"></div>
                    <h2>Un nuevo estilo de vida</h2>
                    <p>Nuestras casas modulares se adaptan a diversos estilos de vida y  <br />
                    necesidades, ofreciendo soluciones habitacionales modernas.  <br />
                    Para conocer las distintas tipologías y especiﬁcaciones lo invitamos a  <br />
                    descargar el PDF o contactarnos para más información.
                    </p>
                    <Link to="/modulos" className='botonLink' id='MIBL'>CATÁLOGO</Link>
                </motion.div>

                <div className="imagenCasaModulo">
                <div className="carousel__viewport" ref={emblaRef3}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/estiloVida/1-2.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/estiloVida/2-2.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/estiloVida/3-2.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/estiloVida/4-2.jpg" /></div>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}

export default Inicio