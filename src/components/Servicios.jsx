import logo from '/svgs/logo.svg'
import construccion from '/svgs/construccion.svg'
import mineria from '/svgs/mineria.svg'
import industria from '/svgs/industria.svg'
import vial from '/svgs/vial.svg'

function Servicios (){
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
            <div className="tituloTextoServicio">
                <h3>Construccion</h3>
                <p></p>
                <img src={construccion} alt="" className='imgContainerServicios'/>
            </div>
        </div>
        <div className="cuadradoServicio">
            <div className="tituloTextoServicio">
                <h3>Construccion</h3>
                <p></p>
                <img src={mineria} alt="" className='imgContainerServicios'/>
            </div>
        </div>
        <div className="cuadradoServicio">
            <div className="tituloTextoServicio">
                <h3>Construccion</h3>
                <p></p>
                <img src={industria} alt="" style={{fill:"#ffdabe",stroke: "#97380f"}} className='imgContainerServicios'/>
            </div>
        </div>
        <div className="cuadradoServicio">
            <div className="tituloTextoServicio">
                <h3>Construccion</h3>
                <p></p>
                <img src={vial} alt="" style={{fill:"#FFF",stroke: "#97380f"}} className='imgContainerServicios'/>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Servicios;