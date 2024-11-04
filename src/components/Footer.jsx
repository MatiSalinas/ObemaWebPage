import logo from '/svgs/logo.svg'
import facebooklogo from '/svgs/facebooklogo.svg'
import instagramlogo from '/svgs/instagramlogo.svg'
import xlogo from '/svgs/xlogo.svg'
import { useState } from 'react'

function Footer(){
    const [emailInfo,setEmailInfo] = useState({nombre:"Contacto footer", email:"",consulta:"Quisiera que me contacten"})
    const handleSumbit = async (e) =>{
        e.preventDefault();
        const datos = {
            service_id: import.meta.env.VITE_SECRET_SERVICE_ID,
            template_id: import.meta.env.VITE_SECRET_TEMPLATE_ID,
            user_id: import.meta.env.VITE_SECRET_USER_ID,
            template_params: {
                from_name:emailInfo.nombre,
                from_email:emailInfo.email,
                to_name:"Obema S.A",
                message:emailInfo.consulta
            },
        }
        let peticion = {
            method:"POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(datos)
          }
        const resultado = await fetch('https://api.emailjs.com/api/v1.0/email/send',peticion)
        if (resultado.ok){
            console.log('exito')

        }else{
            respuesta = await resultado.json()
            console.log(resultado)
            
            console.log('aaa')
        }
    }
    return(
        <footer>
            <form className="formFooter" onSubmit={handleSumbit}>
                <label htmlFor="emailFooter"> Ingrese su correo electrónico aquí
                    <input type="email" name="emailFooter" id="emailFooter" placeholder='Correo electrónico de contacto' value={emailInfo.email} onChange={(e)=>setEmailInfo({...emailInfo,email:e.target.value})}/>
                </label>
                <button type='submit' className='formFooterButton'>Enviar Consulta</button>
            </form>

            <div className="redesFooter">
            <img src={logo} alt="Logo OBEMA" id='logoFooter' />
            <h3 id="sloganFooter">Trabajamos a la medida de tus necesidades</h3>

            <div className="logosRedesFooter">
            <a href="https://www.instagram.com/obema_sa/" target='__blank'><img src={instagramlogo} alt="InstragramLogo" /> </a>
            </div>
            <p className='light' id='derechos'>2024.Todos los derechos reservados</p>
            </div>

            <div className="contactoFooter">
                <h4>Contactanos</h4>
                <a href="tel:+543804690203">+54 3804 690203</a>
                <a href="mailto:obemasa.cd@gmail.com">obemasa.cd@gmail.com</a>
            </div>
        </footer>
    )
}

export default Footer