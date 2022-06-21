import React from 'react';
//ParticleJS
import Particles from "react-tsparticles";
import Config from "../components/config/ParticleConfig.js";
//CSS
import '../components/style.css'
//IMG-LOGO
import logo from '../background/logo-electric.png'

const Home = ()=>{
    return(
        <>
            <Particles className='particles' params={Config}/>
            <div className='home'>
                <img src={logo} alt="logo"></img>
                <h1> plug.sr</h1>
                <p>We are the connection</p>
            </div>
        </>
    );
}
export default Home;