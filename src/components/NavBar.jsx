import logo from '/svgs/logo.svg'
import { Link } from 'react-router-dom'
function NavBar(){
    const isMobile = window.innerWidth < 800;
    return (
        <nav>
        <div className="logo">
            <Link to='/'>
            <img src={logo} alt="LOGO OBEMA"  />
            
            </Link>
        </div>
        {/* <div className="menu-icon" onClick={toggleMenu}>
        ☰ 
    </div> */}
        <div className="secciones">
            <Link to='/servicios'>SERVICIOS</Link>
            <Link to='/portfolio' >PORTFOLIO</Link >
            <Link to='/modulos' >MODULOS</Link >
            <Link to='/contacto' >CONTACTO</Link >
        </div>
        </nav>
    )
}

export default NavBar