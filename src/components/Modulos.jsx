import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useState } from 'react'
import logo from "/svgs/logo.svg"
import Garantialogo from '/svgs/Garantialogo.svg'
import facilidadlogo from '/svgs/facilidadlogo.svg'
import rayologo from '/svgs/rayologo.svg'
import Aislamientologo from '/svgs/Aislamientologo.svg'
import resistencialogo from '/svgs/resitencialogo.svg'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import puntoAzul from '/svgs/PuntoAzul.svg'
function Modulos(){

    const [mouseModulos, setMouseModulos] = useState({1:false,2:false,3:false,4:false})
    const [mouseVentajas, setMouseVentaja] = useState({1:false,2:false,3:false,4:false,5:false})
    const [mousePuntos, setMousePunto ] = useState({1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false,10:false,11:false,12:false,13:false,14:false,15:false,16:false,17:false})

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true },[Autoplay()])
    const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true },[Autoplay()])
    const [emblaRef4, emblaApi4] = useEmblaCarousel({ loop: true },[Autoplay()])
    
    return (
        <div className="containerModulos">
            <div className="containerModulosTop">
                <div className="carouselModulosHero">
                <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/Modulos/1-3.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/Modulos/2-3.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/Modulos/3-3.jpg" /></div>
                </div>
            </div>
                </div>

                <div className="textoModuloTop">
                    <h1>Modulos Habitacionales</h1>
                    <div className="logoYp">
                        <img src={logo} alt="Logo Obema" className="logo" />
                        <p>Trabajamos a la medida de tus necesidades</p>
                    </div>
                </div>
            </div>
            <div className="futuroModular">
                <div className="lineaAzul"></div>
                <h2>Tu futuro, modular</h2>
                <p>Nuestras casas modulares ofrecen soluciones rápidas y eﬁcientes, <br />
                adaptables a cualquier terreno y necesidad. Con un diseño moderno, <br />
                materiales de alta calidad y una instalación rápida, garantizamos comodidad, <br />
                durabilidad y eﬁciencia energética. Ideales para proyectos residenciales, <br />
                turismo o minería, construimos tu espacio en tiempo récord sin <br />
                comprometer la calidad.
                </p>
                <div className="lineaAzul"></div>
            </div>

            <div className="ventajasBeneficios blanco">
                <div className="lineaAzulVB"></div>
                <h2>Ventajas & Beneficios</h2>
                <p>De nuestros modulos habitacionales</p>
                <div className="franjaSvgVB">

                    <div className="svgVB">
                        <img src={Garantialogo} alt="garantiaLogo" className='VBsvg' onMouseEnter={()=> setMouseVentaja({...mouseVentajas,1:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas,1:false})} />
                        <p>Rapidez y <br />Eficacía</p>
                        </div>
                    <div className="svgVB">
                        <img src={facilidadlogo} alt="garantiaLogo" className='VBsvg' onMouseEnter={()=> setMouseVentaja({...mouseVentajas,2:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas,2:false})}  />
                        <p>Económicas y<br />Duraderas</p>
                        </div>
                    <div className="svgVB">
                        <img src={rayologo} alt="garantiaLogo" className='VBsvg' onMouseEnter={()=> setMouseVentaja({...mouseVentajas,3:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas,3:false})}  />
                        <p>Eficiencia <br />Energética</p>
                        </div>
                    <div className="svgVB">
                        <img src={Aislamientologo} alt="garantiaLogo" className='VBsvg' onMouseEnter={()=> setMouseVentaja({...mouseVentajas,4:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas,4:false})}  />
                        <p>Aislamiento <br />Térmico y Acústico</p>
                        </div>
                    <div className="svgVB">
                        <img src={resistencialogo} alt="garantiaLogo" className='VBsvg' onMouseEnter={()=> setMouseVentaja({...mouseVentajas,5:true})} onMouseLeave={()=> setMouseVentaja({...mouseVentajas,5:false})}  />
                        <p>Seguridad</p>
                        </div>
                </div>
                <motion.div className="franjaTextoOculto" initial={{height:0, opacity:0}} animate={(mouseVentajas[1] || mouseVentajas[2] || mouseVentajas[3] || mouseVentajas[4] || mouseVentajas[5] ) ? {height:"5rem",opacity:1}:{height:"0rem", opacity:0}} transition={{duration:1}}>
                <motion.div className="ocultoVentaja" initial={{ color:"#fff"}} animate={(mouseVentajas[1]) ? {color:"#000"}:{ color:"#fff"}} transition={{duration:1}}>
                        <p>Se trata de proyectos fabricados en 60 DÍAS de construcción, (dependiendo la cantidad de m2) e instalados en pocos días, para su rápida puesta en marcha.</p>
                        </motion.div>
                        <motion.div className="ocultoVentaja" initial={{color:"#fff"}} animate={(mouseVentajas[2]) ? {color:"#000"}:{color:"#fff"}} transition={{duration:1}}>
                        <p>Estas viviendas son rentables y duraderas, ofreciendo fácil mantenimiento a lo largo del tiempo.</p>
                        </motion.div>
                        <motion.div className="ocultoVentaja" initial={{color:"#fff"}} animate={(mouseVentajas[3]) ? {color:"#000"}:{color:"#fff"}} transition={{duration:1}}>
                        <p>Proporcionan un gran ahorro energético y tienen un menor impacto ambiental. Son una opción sustentable y sostenible.</p>
                        </motion.div>
                        <motion.div className="ocultoVentaja" initial={{color:"#fff"}} animate={(mouseVentajas[4]) ? {color:"#000"}:{color:"#fff"}} transition={{duration:1}}>
                        <p>Excelente aislamiento térmico y acústico, eliminan la condensación y previenen el anidamiento de roedores e insectos. Son no tóxicas e ignífugas.</p>
                        </motion.div>
                        <motion.div className="ocultoVentaja" initial={{color:"#fff"}} animate={(mouseVentajas[5]) ? {color:"#000"}:{ color:"#fff"}} transition={{duration:1}}>
                        <p>No emiten llama, humo ni olor, asegurando un entorno seguro y saludable para sus habitantes.</p>
                        </motion.div>
                </motion.div>
                <div className="lineaAzul F"></div>
            </div>

            <div className="sistemaConstructivo">
                <h2>Sistema Constructivo</h2>
                <div className="casa">
                    <img src="svgs/Casa.svg" alt="casa" className="casaImagen" />
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoTecho1' onMouseEnter={()=>setMousePunto({...mousePuntos,1:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,1:false})}/>
                    <motion.div className="textoPunto" id="tPuntoTecho1" initial={{width:0,opacity:0,originX:1}} animate={(mousePuntos[1]) ? {width:"300px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Plancha Aluzinc 0.45mn</motion.div>
                    </div>

                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoTecho2' onMouseEnter={()=>setMousePunto({...mousePuntos,2:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,2:false})}/>
                    <motion.div className="textoPunto" id="tPuntoTecho2" initial={{width:0,opacity:0}} animate={(mousePuntos[2]) ? {width:"300px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Lana Mineral Fibra de Vidrio</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoTecho3' onMouseEnter={()=>setMousePunto({...mousePuntos,3:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,3:false})}/>
                    <motion.div className="textoPunto" id="tPuntoTecho3" initial={{width:0,opacity:0}} animate={(mousePuntos[3]) ? {width:"250px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Estructura de acero <br />Galvanizado</motion.div>
                    </div>

                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoTecho4' onMouseEnter={()=>setMousePunto({...mousePuntos,4:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,4:false})}/>
                    <motion.div className="textoPunto" id="tPuntoTecho4" initial={{width:0,opacity:0}} animate={(mousePuntos[4]) ? {width:"350px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Perfiles de Acero Galvanizado <br />Tipo Omega</motion.div>
                    </div>

                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoTecho5' onMouseEnter={()=>setMousePunto({...mousePuntos,5:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,5:false})}/>
                    <motion.div className="textoPunto" id="tPuntoTecho5" initial={{width:0,opacity:0}} animate={(mousePuntos[5]) ? {width:"300px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Parantes y Rieles de acero <br />Galvanizado</motion.div>
                    </div>


                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPiso1' onMouseEnter={()=>setMousePunto({...mousePuntos,6:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,6:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPiso1" initial={{width:0,opacity:0}} animate={(mousePuntos[6]) ? {width:"300px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Apoyos de Concreto</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPiso2' onMouseEnter={()=>setMousePunto({...mousePuntos,7:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,7:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPiso2" initial={{width:0,opacity:0}} animate={(mousePuntos[7]) ? {width:"280px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Estructura principal en <br /> Acero Galvanizado</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPiso3' onMouseEnter={()=>setMousePunto({...mousePuntos,8:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,8:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPiso3" initial={{width:0,opacity:0}} animate={(mousePuntos[8]) ? {width:"400px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Correas de Acero Galvanizado</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPiso4' onMouseEnter={()=>setMousePunto({...mousePuntos,9:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,9:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPiso4" initial={{width:0,opacity:0}} animate={(mousePuntos[9]) ? {width:"400px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Tablero de Triplay Fenolico de 18mm</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPiso5' onMouseEnter={()=>setMousePunto({...mousePuntos,10:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,10:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPiso5" initial={{width:0,opacity:0}} animate={(mousePuntos[10]) ? {width:"400px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Piso Ceramico Tipo Madera</motion.div>
                    </div>
                    
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPared1' onMouseEnter={()=>setMousePunto({...mousePuntos,11:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,11:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPared1" initial={{width:0,opacity:0}} animate={(mousePuntos[11]) ? {width:"200px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Lamina mineral de <br />Fibra de Vidrio</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPared2' onMouseEnter={()=>setMousePunto({...mousePuntos,12:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,12:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPared2" initial={{width:0,opacity:0}} animate={(mousePuntos[12]) ? {width:"200px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Placa exterior de<br />Fibrocemento 10mm</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPared3' onMouseEnter={()=>setMousePunto({...mousePuntos,13:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,13:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPared3" initial={{width:0,opacity:0}} animate={(mousePuntos[13]) ? {width:"300px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Acabado de exterior con<br />enchape de madera</motion.div>
                    </div>

                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoPared4' onMouseEnter={()=>setMousePunto({...mousePuntos,14:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,14:false})}/>
                    <motion.div className="textoPunto" id="tPuntoPared4" initial={{width:0,opacity:0}} animate={(mousePuntos[14]) ? {width:"230px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Parantes Y Rieles de<br />Acero Galvanizado</motion.div>
                    </div>
                    


                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoVentana2' onMouseEnter={()=>setMousePunto({...mousePuntos,15:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,15:false})}/>
                    <motion.div className="textoPunto" id="tPuntoVentana2" initial={{width:0,opacity:0}} animate={(mousePuntos[15]) ? {width:"300px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Puerta Batiente de<br />Vidrio con marco <br />Metalico</motion.div>
                    </div>
                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoVentana3' onMouseEnter={()=>setMousePunto({...mousePuntos,16:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,16:false})}/>
                    <motion.div className="textoPunto" id="tPuntoVentana3" initial={{width:0,opacity:0}} animate={(mousePuntos[16]) ? {width:"300px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Ventana corrediza<br />de Alumnio Negro</motion.div>
                    </div>

                    <div className="puntoYtexto"><img src={puntoAzul} alt="" className="puntoAzul" id='puntoVentana1' onMouseEnter={()=>setMousePunto({...mousePuntos,17:true})} onMouseLeave={()=>setMousePunto({...mousePuntos,17:false})}/>
                    <motion.div className="textoPunto" id="tPuntoVentana1" initial={{width:0,opacity:0}} animate={(mousePuntos[17]) ? {width:"270px",opacity:1} : {width:0,opacity:0}} transition={{duration:.3}} >Placa Interior de Yeso <br />de 12.7mm</motion.div>
                    </div>


                    </div>
            </div>

            <div className="tipologias">
                <div className="lineaAzul F"></div>
                <h2>Tipologías</h2>
                <div className="tipologias2modulos">
                <div className="moduloTipologia">
                    <h3>Modulos <br />Habitacionales familiares</h3>
                    <div className="carousel1" onMouseEnter={()=>setMouseModulos({...mouseModulos,1:true})} onMouseLeave={()=>setMouseModulos({...mouseModulos,1:false})}>
                    <div className="textoOcultoTipologia"  style={(mouseModulos[1])? {opacity:1} : {opacity:0}}>Ofrecemos casas modulares <br /> diseñadas para proporcionar un <br /> hogar cómodo y moderno, con <br /> una construcción rápida y <br /> eficiente. Estas viviendas son <br /> personalizables, energéticamente <br /> eficientes y fabricadas con <br /> materiales de alta calidad, <br /> garantizando durabilidad y confort. <br />
Ideales para quienes buscan una <br /> solución habitacional ágil sin <br /> comprometer el diseño o la <br /> funcionalidad.

</div>
                    <div className="carousel__viewport" ref={emblaRef2}>
                <div className="carousel__container">
                <div className="carousel__slide"><img src="/images/Habitacionales/1.png" /></div>
                <div className="carousel__slide"><img src="/images/Habitacionales/2.png" /></div>
                </div>
            </div>
                    </div>
                </div>

                <div className="moduloTipologia">
                    <h3>Modulos <br /> Turisticos</h3>
                    <div className="carousel2"  onMouseEnter={()=>setMouseModulos({...mouseModulos,2:true})} onMouseLeave={()=>setMouseModulos({...mouseModulos,2:false})}>
                    <div className="textoOcultoTipologia"  style={(mouseModulos[2])? {opacity:1} : {opacity:0}}>Nuestros módulos habitacionales <br /> para turismo ofrecen confort y <br /> funcionalidad en cualquier <br /> entorno. Con un diseño moderno <br /> y adaptable, son ideales para <br /> zonas urbanas o rurales. Rápidos <br /> de instalar y personalizables, <br /> brindan una experiencia cómoda, <br /> con interiores bien equipados y <br /> eficientes energéticamente. <br />
Perfectos para alojamientos en <br /> parques naturales o áreas de <br /> difícil acceso, combinan <br /> durabilidad y estilo.

</div>
                    <div className="carousel__viewport" ref={emblaRef3} >
                <div className="carousel__container">
                <div className="carousel__slide"><img src="/images/ModulosTuristicos/1.png" /></div>
                <div className="carousel__slide"><img src="/images/ModulosTuristicos/2.png" /></div>
                </div>
            </div>
                    </div>
                </div>
                </div>
                <div className="moduloTipologia">
                    <h3>Campamentos</h3>
                    <div className="carousel3" onMouseEnter={()=>setMouseModulos({...mouseModulos,3:true})} onMouseLeave={()=>setMouseModulos({...mouseModulos,3:false})} >
                        <div className="textoOcultoTipologia"  style={(mouseModulos[3])? {opacity:1} : {opacity:0}}>Nuestros módulos para <br /> campamentos mineros están <br /> diseñados para ofrecer soluciones <br /> habitacionales rápidas, resistentes <br /> y cómodas en entornos extremos. <br />
Fabricados con materiales <br /> duraderos y de fácil instalación, <br /> garantizan un espacio seguro y <br /> funcional para el personal en sitios <br /> remotos. Los módulos son <br /> personalizables, eficientes  <br /> energéticamente y adaptables a <br /> las necesidades del proyecto, <br /> asegurando confort y <br /> productividad.
</div>
                    <div className="carousel__viewport" ref={emblaRef4}>
                <div className="carousel__container">
                <div className="carousel__slide"><img src="/images/Campamentos/1.png" /></div>
                <div className="carousel__slide"><img src="/images/Campamentos/2.png" /></div>
                </div>
            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modulos;