import { Link } from 'react-router-dom'
import  video  from '/video/landscapedemo2.mp4'
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
function Inicio(){
    return (
        <div className="containerInicio">
            <div className="heroLandScape">
                <video autoPlay loop muted className="videoLandScape">
                    <source src={video} type="video/mp4"/>
                </video>
                <h1 className="tituloHero">  Diseño inteligente, <br />construcción conﬁable</h1>
                <p>Trabajamos a la medida de tus necesidades</p>
                <div className="botonesLandScape">
                <Link to='/portfolio' className='botonLS'>CONOCE MAS SOBRE NOSOTROS</Link >
                <Link to='/contacto' className='botonLS'>CONTACTANOS</Link >
                </div>
            </div>
            
            <div className="franjaGris"></div>
            <div className="rubros">
                <div className="rubroSvgs">
                    <div className="imgContainer"><img src={construccion} alt="" /></div>
                    <div className="imgContainer"><img src={mineria} alt="" /></div>
                    <div className="imgContainer"><img src={industria} alt="" /></div>
                    <div className="imgContainer"><img src={vial} alt="" /></div>

                    </div>
                    <div className="rubroTitulos">
                        <h3>Construcción</h3>
                        <h3>Mineria</h3>
                        <h3>Industria</h3>
                        <h3>Vial</h3>
                    </div>

                        <div className="rubroTexto">
                            <p className='rubroP'>Especializados en la ejecucion de obras de infrastuctura ofreciendo solociones integrales y de calidad</p>
                            <p className='rubroP'>Ofrecemos soluciones integrales para proyectos mineros, enfocándonos en la construcción de infraestructuras seguras y eficientes. </p>
                            <p className="rubroP">Proporcionamos soluciones de construcción para el sector industrial, enfocándonos en la creación de infraestructuras funcionales y seguras.</p>
                            <p className="rubroP">Transformamos la movilidad a través de nuestras soluciones de construcción vial, garantizando la seguridad y comodidad de todos los usuarios.</p>
                        </div>
            </div>



            <div className="BloqueInicioPortfolio">
                <div className="lineaAzul"></div>
                <h1>Conocé nuestras obras, <br /> proyectos y servicios</h1>
                <h2>Accedé a nuestro porfolio y conocé los proyectos más relevantes de <span>OBEMA SA.</span></h2>
                <button type="button"></button>
                <Link to="/portfolio" className='botonLink' >PORTFOLIO</Link>
            </div>

            <div className="moduloTuristico">
                <img src="" alt="" className='imgModulo' />
                <h3>Modulo turistico</h3>
            </div>

            <div className="AboutUs">
                <div className="lineaBlanca"></div>
                <div className="quienesSomos">
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
                </div>
                
            </div>


            <div className="historia">
                <div className="lineaAzulHistoria"></div>
                <h1>Nuestra Historia</h1>
                <img src={logoAzul} alt="" className="azul" />

                <div className="scrollHistoria">
                    
                                    <div className="franjaSuperior">
                                        <div className="nodoSup">
                                            <p>Cocina Suboficiales</p>
                                            <div className="circuloNodo">
                                                <div className="circulo"></div>
                                                <div className="lineaCirculo"></div>
                                            </div>
                                        </div>
                                        <div className="nodoSup">
                                            <p>Gimnasio SuperDomo</p>
                                            <div className="circuloNodo">
                                                <div className="circulo"></div>
                                                <div className="lineaCirculo"></div>
                                            </div>
                                        </div>
                                        <div className="nodoSup">
                                            <p>Acueducto San Carlos</p>
                                            <div className="circuloNodo">
                                                <div className="circulo"></div>
                                                <div className="lineaCirculo"></div>
                                            </div>
                                        </div>
                                        <div className="nodoSup">
                                            <p>Polideportivo Evita</p>
                                            <div className="circuloNodo">
                                                <div className="circulo"></div>
                                                <div className="lineaCirculo"></div>
                                            </div>
                                        </div>
                                        <div className="nodoSup">
                                            <p>Club Banco Rioja <br />Estructura IPN</p>
                                            <div className="circuloNodo">
                                                <div className="circulo"></div>
                                                <div className="lineaCirculo"></div>
                                            </div>
                                        </div>
                                        <div className="nodoSup">
                                            <p>Acueducto <br />Totoral de la Siera</p>
                                            <div className="circuloNodo">
                                                <div className="circulo"></div>
                                                <div className="lineaCirculo"></div>
                                            </div>
                                        </div>
                                        <div className="nodoSup">
                                            <p>Presentación de proyectos <br />Subsecretaria de recursos hídricos <br />de la Nación </p>
                                            <div className="circuloNodo">
                                                <div className="circulo"></div>
                                                <div className="lineaCirculo"></div>
                                            </div>
                                        </div>
                    
                                    </div>
                    
                                    <div className="lineaHistoria"></div>
                                    <div className="franjaInferior">
                    
                                        <div className="nodoInf">
                                                <div className="circuloNodo">
                                                    <div className="lineaCirculo"></div>
                                                    <div className="circulo"></div>
                                                <p>Viviendas <br />Barrio Susana Quintela</p>
                                                </div>
                                        </div>
                                        <div className="nodoInf">
                                                <div className="circuloNodo">
                                                    <div className="lineaCirculo"></div>
                                                    <div className="circulo"></div>
                                                <p>Gimnasio <br />Riojano</p>
                                                </div>
                                        </div>
                                        <div className="nodoInf">
                                                <div className="circuloNodo">
                                                    <div className="lineaCirculo"></div>
                                                    <div className="circulo"></div>
                                                <p>Planta Compacta <br /> de Sanamiento Cloacal</p>
                                                </div>
                                        </div>
                                        <div className="nodoInf">
                                                <div className="circuloNodo">
                                                    <div className="lineaCirculo"></div>
                                                    <div className="circulo"></div>
                                                <p>Riachuelo <br /> Zona Norte</p>
                                                </div>
                                        </div>
                                        <div className="nodoInf">
                                                <div className="circuloNodo">
                                                    <div className="lineaCirculo"></div>
                                                    <div className="circulo"></div>
                                                <p>Defensas y protección <br />de márgenes Del Bermejo </p>
                                                </div>
                                        </div>
                                        <div className="nodoInf">
                                                <div className="circuloNodo">
                                                    <div className="lineaCirculo"></div>
                                                    <div className="circulo"></div>
                                                <p>Recuperación de paisajes hídricos <br />y saneamiento rio tajamar</p>
                                                </div>
                                        </div>
                                    </div>
                </div>
                <h2>Accedé a nuestro portfolio y conocé los proyectos más <br />relevantes de <span>OBEMA SA.</span>
                </h2>
                <Link to="/portfolio" className='botonLink' >CONOCE MAS</Link>

            </div>

            <div className="modulosIndustriales">
                <div className="imagenModuloIndustrial"></div>

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
            </div>
            <div className="ventajasBeneficios">
                <div className="lineaAzulVB"></div>
                <h2>Ventajas & Beneficios</h2>
                <p>De nuestros modulos habitacionales</p>
                <div className="franjaSvgVB">

                    <div className="svgVB">
                        <img src={Garantialogo} alt="garantiaLogo" className='VBsvg'  />
                        <p>Garantía de <br />Calidad</p>
                        </div>
                    <div className="svgVB">
                        <img src={facilidadlogo} alt="garantiaLogo" className='VBsvg'  />
                        <p>Facilidad para Modular <br />Estructuras Más Grandes</p>
                        </div>
                    <div className="svgVB">
                        <img src={rayologo} alt="garantiaLogo" className='VBsvg'  />
                        <p>Descentralización  <br />de la Construcción</p>
                        </div>
                    <div className="svgVB">
                        <img src={Aislamientologo} alt="garantiaLogo" className='VBsvg'  />
                        <p>Aislamiento <br />Térmico y Acústico</p>
                        </div>
                    <div className="svgVB">
                        <img src={resistencialogo} alt="garantiaLogo" className='VBsvg'  />
                        <p>Resistencia <br />Sísmica</p>
                        </div>
                </div>
            </div>

            <div className="casaModulIndustrial">

                <div className="infoMI">
                    <div className="lineaAzulMC"></div>
                    <h2>Un nuevo estilo de vida</h2>
                    <p>Nuestras casas modulares se adaptan a diversos estilos de vida y  <br />
                    necesidades, ofreciendo soluciones habitacionales modernas.  <br />
                    Para conocer las distintas tipologías y especiﬁcaciones lo invitamos a  <br />
                    descargar el PDF o contactarnos para más información.
                    </p>
                    <Link to="/modulos" className='botonLink' id='MIBL'>CATALOGO</Link>
                </div>

                <div className="imagenCasaModulo"></div>

            </div>
        </div>
    )
}

export default Inicio