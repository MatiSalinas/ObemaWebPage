import { Link } from 'react-router-dom'
import  video  from '/video/landscapedemo2.mp4'
import construccion from '/svgs/construccion.svg'
import mineria from '/svgs/mineria.svg'
import industria from '/svgs/industria.svg'
import vial from '/svgs/vial.svg'
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
            {/* rubros */}
            <div className="franjaGris"></div>
            <div className="rubros">
                <div className="rubro">
                    <img src={construccion} alt="" />
                    <div className="tituloYtextoRubro">
                        <h3>Construcción</h3>
                        <p className='rubroP'>Especializados en la ejecucion de obras de infrastuctura ofreciendo solociones integrales y de calidad</p>
                    </div>
                    </div>
                <div className="rubro">
                    <img src={mineria} alt="" />
                    <h3>Mineria</h3>
                </div>
                <div className="rubro">
                    <img src={industria} alt="" />
                    <h3>Industria</h3>
                    </div>
                <div className="rubro">
                    <img src={vial} alt="" />
                    <h3>Vial</h3>
                    </div>
            </div>
        </div>
    )
}

export default Inicio