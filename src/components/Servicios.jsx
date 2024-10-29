import logo from '/svgs/logo.svg'
import construccion from '/svgs/construccion.svg'
import mineria from '/svgs/mineria.svg'
import industria from '/svgs/industria.svg'
import vial from '/svgs/vial.svg'
import servicio1 from '/images/servicio1.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback } from 'react'
function Servicios (){
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true })
    const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true })
    const [emblaRef4, emblaApi4] = useEmblaCarousel({ loop: true })
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
        <div className="cuadradoServicio">
            <div className="superiorCuadradoServicio">
                <div className="tituloTextoServicio">
                    <h3>Construccion</h3>
                    <p>Ejecutamos proyectos integrales con los <br />más altos estándares de calidad.</p>
                </div>
                    <img src={construccion} alt="" className='imgContainerServicios'/>
            </div>
            <div className="carousel3" >
            <div className="carousel__viewport" ref={emblaRef3}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
            </div>
        </div>


        <div className="cuadradoServicio">
            <div className="superiorCuadradoServicio">
                <div className="tituloTextoServicio">
                    <h3>Mineria</h3>
                    <p>Ejecutamos proyectos integrales con los <br />más altos estándares de calidad.</p>
                </div>
                    <img src={mineria} alt="" className='imgContainerServicios'/>
            </div>
            <div className="carousel1" >
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/cascoAmarillo.jpg" /></div>
                        <div className="carousel__slide"><img src="https://live.staticflickr.com/7285/16415815706_ce95427779_k.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
            </div>
        </div>


        <div className="cuadradoServicio">
            <div className="superiorCuadradoServicio">
                <div className="tituloTextoServicio">
                    <h3>Industria</h3>
                    <p>Ejecutamos proyectos integrales con los <br />más altos estándares de calidad.</p>
                </div>
                    <img src={industria} alt="" style={{fill:"#ffdabe",stroke: "#97380f"}} className='imgContainerServicios'/>
            </div>
            <div className="carousel2" >
            <div className="carousel__viewport" ref={emblaRef2}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/mezcladora.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
            </div>
        </div>


        <div className="cuadradoServicio">
            <div className="superiorCuadradoServicio">
                <div className="tituloTextoServicio">
                    <h3>Vial</h3>
                    <p>Ejecutamos proyectos integrales con los <br />más altos estándares de calidad.</p>
                </div>
                    <img src={vial} alt="" style={{fill:"#FFF",stroke: "#97380f"}} className='imgContainerServicios'/>
            </div>
            <div className="carousel4" >
            <div className="carousel__viewport" ref={emblaRef4}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://live.staticflickr.com/7285/16415815706_ce95427779_k.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
            </div>
        </div>


        </div>

    </div>
    )
}

export default Servicios;