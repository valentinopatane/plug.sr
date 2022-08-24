import React from 'react';
//IMGs
import one from '../background/1.png'
import two from '../background/2.png'
import three from '../background/3.png'
import four from '../background/4.png'
import five from '../background/5.png'
import six from '../background/6.png'
//CSS
import '../components/style.css'

const Archive =()=>{
    return(
    <>
        <section style={{ overflow:'hidden', position:'relative', height:'max-content'}}>
            <div className='archive_cont'>
                <div className='archive_title'>
                    <h2>Season 2021</h2>
                </div>

                <div className='archive_gallery'>
                    <img src={one} alt="img"></img>
                    <img src={two} alt="img"></img>
                    <img src={three} alt="img"></img>
                    <img src={four} alt="img"></img>
                    <img src={five} alt="img"></img>
                    <img src={six} alt="img"></img>
                </div>
            </div>
        </section>

        
    </>
    )
}
export default Archive;
