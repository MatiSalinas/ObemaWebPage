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
            <a href='/pdf/PortfolioOBEMANov.pdf' download={'portfolio-ObemaNov'} className='botonLink' >CARPETA COMERCIAL</a>
        </div>
        <div className="containerCarouselesPortfolio">
            <div className="carousel1" >
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">
                        <div className="carousel__slide"><img src="/images/portfolio/1-1.jpg" /></div>
                        <div className="carousel__slide"><img src="/images/portfolio/1-2.jpg" /></div>
                </div>
            </div>
            </div>
            <div className="carousel2" >
            <div className="carousel__viewport" ref={emblaRef2}>
                <div className="carousel__container">
                <div className="carousel__slide"><img src="/images/portfolio/2-1.jpg" /></div>
                <div className="carousel__slide"><img src="/images/portfolio/2-2.jpg" /></div>
                </div>
            </div>
            </div>
            <div className="carousel3" >
            <div className="carousel__viewport" ref={emblaRef3}>
                <div className="carousel__container">
                <div className="carousel__slide"><img src="/images/portfolio/3-1.jpg" /></div>
                <div className="carousel__slide"><img src="/images/portfolio/3-2.jpg" /></div>
                </div>
            </div>
            </div>
            <div className="carousel4" >
            <div className="carousel__viewport" ref={emblaRef4}>
                <div className="carousel__container">
                <div className="carousel__slide"><img src="/images/portfolio/4-1.jpg" /></div>
                <div className="carousel__slide"><img src="/images/portfolio/4-2.jpg" /></div>
                </div>
            </div>
            </div>
            <div className="carousel5" >
            <div className="carousel__viewport" ref={emblaRef5}>
                <div className="carousel__container">
                <div className="carousel__slide"><img src="/images/portfolio/5-1.jpg" /></div>
                <div className="carousel__slide"><img src="/images/portfolio/5-2.jpg" /></div>
                </div>
            </div>
            </div>
            
        </div>

    </div>
)
}
export default Portfolio;