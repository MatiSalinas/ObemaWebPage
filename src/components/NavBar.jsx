import { useState } from 'react';
import logo from '/svgs/logo.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function NavBar(){
    const isMobile = window.innerWidth < 800;
    const [isOpen,setIsOpen] = useState(false)
    return (
        <nav>
        <div className="logo">
            <Link to='/'>
            <img src={logo} alt="LOGO OBEMA"  />
            
            </Link>
        </div>
        
    {
        (isMobile) ? (
            <div className="menuHamburguesa">
                <div className="menu-icon" onClick={()=>setIsOpen(!isOpen)}>
                ☰ 
                </div>
                <motion.div className="secciones" initial={{opacity:0,width:0,}} animate={(isOpen) ? {display:'flex', height:"200px",width:"100%" ,opacity:1,y:0}:{display:'none',width:0,opacity:0,}} transition={{ease:"easeOut"}}>
                
                <Link to='/servicios' onClick={()=>setIsOpen(!isOpen)}>Servicios</Link>
                <Link to='/portfolio'  onClick={()=>setIsOpen(!isOpen)}>Portfolio</Link >
                <Link to='/modulos'  onClick={()=>setIsOpen(!isOpen)}>Módulos</Link >
                <Link to='/contacto'  onClick={()=>setIsOpen(!isOpen)}>Contacto</Link >
                        </motion.div>
            </div>) : (
            <div className="secciones">
            <Link to='/servicios'>Servicios</Link>
            <Link to='/portfolio' >Portfolio</Link >
            <Link to='/modulos' >Módulos</Link >
            <Link to='/contacto' >Contacto</Link >
        </div>
        )
    }
        </nav>)
}

export default NavBar