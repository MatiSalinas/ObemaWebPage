import logo from '/svgs/logo.svg'
import { Link } from 'react-router-dom'
function NavBar(){
    return (
        <nav>
        <div className="logo">
            <img src={logo} alt="LOGO OBEMA"  />
            <Link to='/'></Link>
        </div>
        <div className="secciones">
            <Link to='/servicios'>SERVICIOS</Link>
            <Link to='/portfolio' >PORTFOLIO</Link >
            <Link to='/modulos' >MODULOS</Link >
            <Link to='/contacto' >CONCTATO</Link >
        </div>
        </nav>
    )
}

export default NavBar