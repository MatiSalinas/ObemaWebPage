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
    const [emblaRef6, emblaApi6] = useEmblaCarousel({ loop: true },[Autoplay({delay:4500})])
return(
    <div className="containerPorfolio">
        <div className="fondoTopPorfolio">
            <p>
            Conocé alguno de los proyectos que hemos desarrollado, tanto en el ámbito público <br />como privado. Cada obra reﬂeja nuestro compromiso con la innovación, la calidad y la <br />satisfacción de nuestros clientes, tanto en el ámbito público como en el privado.
            </p>
            <a href='/pdf/PortfolioOBEMANov.pdf' download={'portfolio-ObemaNov'} className='botonLink' >CARPETA COMERCIAL</a>
        </div>


        <div className="cuadradosPortfolio">
            <div className="wrapperServicio">
                <div className="cuadradoPortfolio">
                    <div className="carouselPortfolio">
                        <div className="carousel__viewport" ref={emblaRef}>
                            <div className="carousel__container">
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-1/1-OBEMA.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-1/2-OBEMA.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-1/2-OBEMA.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="cuadradoPortTitulo">OBEMA SA - Administración </h2>
                    <p className="cuadradoPortP">2024 - OBEMA S.A. se llevó a cabo la construcción de modernas oficinas administrativas y un área técnica funcional. Este proyecto fue diseñado para optimizar las operaciones internas de la empresa, brindando espacios eficientes, cómodos y adecuados para las actividades administrativas y técnicas.</p>
                </div>
                

                <div className="cuadradoPortfolio">
                    <div className="carouselPortfolio">
                        <div className="carousel__viewport" ref={emblaRef2}>
                            <div className="carousel__container">
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-2/1-Chilecito.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-2/2-Chilecito.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-2/2-Chilecito.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="cuadradoPortTitulo">Club Atlético Chilecito - Puesta en valor </h2>
                    <p className="cuadradoPortP">2024 - En la localidad de Chilecito, La Rioja, se llevó a cabo la puesta en valor del Club Atlético de Chilecito. El proyecto incluyó la construcción y mejora de baños, vestuarios, tribunas, y la instalación de un moderno sistema de iluminación, contribuyendo al desarrollo deportivo y comunitario de la región.</p>
                </div>
            </div>
            <div className="wrapperServicio">
                <div className="cuadradoPortfolio">
                    <div className="carouselPortfolio">
                        <div className="carousel__viewport" ref={emblaRef3}>
                            <div className="carousel__container">
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-3/1-Readecuacion.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-3/2-Readecuacion.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-3/2-Readecuacion.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="cuadradoPortTitulo">Dpto. Juan Facundo Quiroga - Readecuación de predio municipal</h2>
                    <p className="cuadradoPortP">2024 - En el Departamento Juan Facundo Quiroga se realizó la readecuación integral del predio municipal, incluyendo mejoras en la infraestructura, acondicionamiento de espacios y reorganización funcional. Este proyecto busca optimizar el uso del lugar, promoviendo un entorno más eficiente y accesible para el servicio y desarrollo comunitario.</p>
                </div>
                

                <div className="cuadradoPortfolio">
                    <div className="carouselPortfolio">
                        <div className="carousel__viewport" ref={emblaRef4}>
                            <div className="carousel__container">
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-4/1-Club-BR.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-4/2-Club-BR.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-4/2-Club-BR.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="cuadradoPortTitulo">Club Banco Rioja - Cancha de básquet </h2>
                    <p className="cuadradoPortP">2024 - En el Club Banco Rioja se desarrolló la construcción integral de su cancha, abarcando desde las fundaciones y la estructura, hasta la colocación de un moderno parquet y un avanzado sistema de iluminación, brindando un espacio deportivo de alta calidad para la comunidad.</p>
                </div>
            </div>
            

            <div className="wrapperServicio">
                <div className="cuadradoPortfolio">
                    <div className="carouselPortfolio">
                        <div className="carousel__viewport" ref={emblaRef5}>
                            <div className="carousel__container">
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-5/1-Acueducto-JFQ.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-5/2-Acueducto-JFQ.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-5/2-Acueducto-JFQ.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="cuadradoPortTitulo">Acueducto del Salado - Reparación y reemplazo de tubería de acero</h2>
                    <p className="cuadradoPortP">2024 - En el Departamento Juan Facundo Quiroga, La Rioja, se realizó la reparación y el reemplazo de la tubería de acero en el acueducto del Salado. Esta obra mejoró significativamente la infraestructura hídrica, garantizando un suministro más eficiente y confiable para el dique del Portezuelo.</p>
                </div>
                

                <div className="cuadradoPortfolio">
                    <div className="carouselPortfolio">
                        <div className="carousel__viewport" ref={emblaRef6}>
                            <div className="carousel__container">
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-6/1-EVITA.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-6/2-evita.jpg" /></div>
                                <div className="carousel__slide"><img src="/images/portfolio/Obra-6/2-evita.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="cuadradoPortTitulo">Polideportivo Evita - Puesta en valor </h2>
                    <p className="cuadradoPortP">2024 - En el Polideportivo Evita se llevó a cabo un proyecto integral que incluyó la construcción y mejora de baños y vestuarios, la instalación de un canal pluvial, la creación de un estacionamiento, una cancha de hándbol y un sistema de iluminación moderno. Estas obras fortalecen la infraestructura deportiva y comunitaria, promoviendo el acceso a instalaciones de calidad.</p>
                </div>
            </div>
        </div>





    </div>
)
}
export default Portfolio;