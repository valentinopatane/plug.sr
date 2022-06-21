import React from 'react';
//PARTICLE JS
import Particles from "react-tsparticles";
import Config from "../components/config/ParticleConfig.js";
//COMPONENTS
import ItemListContainer from '../components/ItemListContainer';
import SubMenu from "../components/SubMenu";
//CSS
import "../components/style.css"

function Shop(){
    return(
        <>
            <div className='particles' >
                <Particles params={Config} style={{zIndex:-1}}/>
            </div>
            
            <SubMenu/>
            <ItemListContainer/>
        </>
    )
}
export default Shop;


            