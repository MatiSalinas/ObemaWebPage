import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback } from 'react'
import logo from "/svgs/logo.svg"
import Garantialogo from '/svgs/Garantialogo.svg'
import facilidadlogo from '/svgs/facilidadlogo.svg'
import rayologo from '/svgs/rayologo.svg'
import Aislamientologo from '/svgs/Aislamientologo.svg'
import resistencialogo from '/svgs/resitencialogo.svg'

function Modulos(){
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true })
    const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true })
    const [emblaRef4, emblaApi4] = useEmblaCarousel({ loop: true })
    
    return (
        <div className="containerModulos">
            <div className="containerModulosTop">
                <div className="carouselModulosHero">
                <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
                </div>
                <h1>Modulos industriales</h1>
                <img src={logo} alt="Logo Obema" className="logo" />
                <p>Trabajamos a la medida de tus necesidades</p>
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
                <div className="lineaAzul"></div>
            </div>

            <div className="sistemaConstructivo">
                <h2>Sistema Constructivo</h2>
                <div className="lineAzul"></div>
            </div>

            <div className="tipologias">
                <h2>Tipologías</h2>
                <div className="tipologias2modulos">
                <div className="moduloTipologia">
                    <h3>Modulos <br />Habitacionales familiares</h3>
                    <div className="carousel1">
                    <div className="carousel__viewport" ref={emblaRef2}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
                    </div>
                </div>

                <div className="moduloTipologia">
                    <h3>Modulos <br /> Turisticos</h3>
                    <div className="carousel2">
                    <div className="carousel__viewport" ref={emblaRef3}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
                    </div>
                </div>
                </div>
                <div className="moduloTipologia">
                    <h3>Mineria</h3>
                    <div className="carousel3">
                    <div className="carousel__viewport" ref={emblaRef4}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modulos;