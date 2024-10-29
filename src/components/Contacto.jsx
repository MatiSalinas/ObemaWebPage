import logo from '/svgs/logo.svg'

function Contacto(){
    return (
        <div className="containerContacto">
            <div className="containerTopContacto">
                <h1>Contactanos</h1>
                <p>Contáctanos y te asesoramos con tus proyectos.</p>

                <form className="contactoForm">
                    <div className="labelInputForm">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" className="inputForm" placeholder="Ingresa tu nombre aquí" />
                    </div>
                    <div className="labelInputForm">
                        <label htmlFor="email">Correo electrónico de consulta</label>
                        <input type="email" name="email" id="email" className="inputForm" placeholder="Dejanos tu correo"/>
                    </div>
                    <div className="labelInputForm">
                        <textarea name="Consulta" id="consulta" placeholder="Escribí tu mensaje aquí"></textarea>
                    </div>
                    <button className="botonLink">Enviar</button>
                </form>
            </div>
            <div className="containerContactoUbi">
                <img src={logo} alt="logo Obema" className="logoFondoUbi" />
                <div className="donde">
                    <h2>Donde encontrarnos?</h2>
                    <p>Visítanos para conocer nuestros módulos para <br />campamentos mineros y turísticos, así como <br />nuestros servicios de construcción e industria.
                    </p>
                    <h2>Ubicación</h2>
                    <p>Av 2 de Abril y Ruta Nacional 5</p>
                    <h2>Horario</h2>
                    <p>Lunes a Viernes de 09:00 a 20:00</p>
                    <a href="https://maps.app.goo.gl/4i54QUHXsEPJUKKb6" target="_blank" className="botonUbicacion">Ubicación</a>
                </div>
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.7946553554657!2d-66.8467156237829!3d-29.405562575251466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427db6381b85311%3A0x3713b9dd56d1bf1d!2sOBEMA%20S.A.!5e0!3m2!1ses-419!2sar!4v1730144187891!5m2!1ses-419!2sar" width="600" height="280" style={{border:0, borderRadius:"1rem"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacto;