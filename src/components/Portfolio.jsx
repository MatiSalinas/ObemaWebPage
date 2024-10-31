import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'
import Autoplay from 'embla-carousel-autoplay'
function Portfolio(){
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true },[Autoplay({delay:3000})])
    const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true },[Autoplay({delay:3500})])
    const [emblaRef4, emblaApi4] = useEmblaCarousel({ loop: true },[Autoplay({delay:2500})])
    const [emblaRef5, emblaApi5] = useEmblaCarousel({ loop: true },[Autoplay({delay:4500})])
return(
    <div className="containerPorfolio">
        <div className="fondoTopPorfolio">
            <p>
            Conocé alguno de los proyectos que hemos desarrollado, tanto en el ámbito público <br />como privado. Cada obra reﬂeja nuestro compromiso con la innovación, la calidad y la <br />satisfacción de nuestros clientes, tanto en el ámbito público como en el privado.
            </p>
            <Link to="/portfolio" className='botonLink' >Carpeta comercial</Link>
        </div>
        <div className="containerCarouselesPortfolio">
            <div className="carousel1" >
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/cascoAmarillo.jpg" /></div>
                        <div className="carousel__slide"><img src="https://live.staticflickr.com/7285/16415815706_ce95427779_k.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
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
            <div className="carousel3" >
            <div className="carousel__viewport" ref={emblaRef3}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/obreros.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/galponPortfolio.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
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
            <div className="carousel5" >
            <div className="carousel__viewport" ref={emblaRef5}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/capuchaAzul.jpg" /></div>
                        <div className="carousel__slide"><img src="https://live.staticflickr.com/7285/16415815706_ce95427779_k.jpg" /></div>
                        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg" /></div>
                </div>
            </div>
            </div>
            
        </div>

    </div>
)
}
export default Portfolio;