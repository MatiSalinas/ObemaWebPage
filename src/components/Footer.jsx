import logo from '/svgs/logo.svg'
import facebooklogo from '/svgs/facebooklogo.svg'
import instagramlogo from '/svgs/instagramlogo.svg'
import xlogo from '/svgs/xlogo.svg'
function Footer(){
    return(
        <footer>
            <form className="formFooter">
                <label htmlFor="emailFooter"> Ingrese su correo electrónico aquí
                    <input type="email" name="emailFooter" id="emailFooter" />
                </label>
                <button type="button" className='formFooterButton'>Enviar Consulta</button>
            </form>

            <div className="redesFooter">
            <img src={logo} alt="Logo OBEMA"  />
            <h3>Trabajamos a la medida de tus necesidades</h3>

            <div className="logosRedesFooter">
            <img src={facebooklogo} alt="facebookLogo" />
            <img src={instagramlogo} alt="InstragramLogo" />
            <img src={xlogo} alt="XLOGO" />
            </div>
            <p className='light'>2024.Todos los derechos reservados</p>
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