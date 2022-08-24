import video from '../background/y2mate.com - Drake x Nike NOCTA_1080p.mp4'
import '../components/style.css'
import logo from '../background/logo-electric.png'

const About = ()=>{
   return(
    <>  
    <section style={{ overflow:'hidden', position:'relative'}}>
        <div className='about_section'>
            <div className='about_description'>
                <img src={logo} alt="logo"></img>
                <p>
                    Plug Sr is a NOCTA outlet e-store made thru the nocturnal creative process that caracterize the brand. <br/>
                    Nocta is for people on the move and those who want functional, comfortable fits. Designed for the type ”who are on the road all day, all night – the grinders, the hard workers – trying to accomplish their goals and taking no short cuts.”
                </p>
            </div>
        </div>
    </section>

    </>
    )
}

export default About;
