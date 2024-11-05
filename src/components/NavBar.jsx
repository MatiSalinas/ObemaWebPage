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
                
                <Link to='/servicios' onClick={()=>setIsOpen(!isOpen)}>SERVICIOS</Link>
                <Link to='/portfolio'  onClick={()=>setIsOpen(!isOpen)}>PORTFOLIO</Link >
                <Link to='/modulos'  onClick={()=>setIsOpen(!isOpen)}>MODULOS</Link >
                <Link to='/contacto'  onClick={()=>setIsOpen(!isOpen)}>CONTACTO</Link >
                        </motion.div>
            </div>) : (
            <div className="secciones">
            <Link to='/servicios'>SERVICIOS</Link>
            <Link to='/portfolio' >PORTFOLIO</Link >
            <Link to='/modulos' >MODULOS</Link >
            <Link to='/contacto' >CONTACTO</Link >
        </div>
        )
    }
        </nav>)
}

export default NavBar