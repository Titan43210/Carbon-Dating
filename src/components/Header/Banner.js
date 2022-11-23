import React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';
import Particle from '../Particle';
import l from "../../left.png"
import r from "../../right.png"
import m from "../../msg.png"
import p from "../../person.png"
const Banner = () => {
    const history = useHistory();

    return (
        <section className= "max-w-screen-xl pt-40 mx-auto px-6">
            <Particle/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-20 pb-20">
                    <Fade left>
                        <div className="order-1 lg:order-1 flex flex-col justify-center">

                                <div className="flex flex-col space-y-2">
                                    <div className='flex flex-row'></div>
                                </div>
            
                            {/* button  */}
                            <div className="flex flex-row">
                                <span className='flex flex-col justify-center'><img src={l} height={350} width={350}></img><span className='flex flex-col justify-center items-center'><button className="btn-primary bg-red-500 py-3 px-4 poppins w-48 mt-6 hover:bg-white text-black justify-center items-center content-center"  onClick={() => history.push('/checkup')}><span className='flex flex-col items-center'><img src={m} height={30} width={30}></img></span></button></span></span>
                                <span className='flex flex-col justify-center'><img src={r} height={350} width={350}></img><span className='flex flex-col justify-center items-center'><button className="btn-primary border-2 border-white bg-transparent py-3 px-4 poppins w-48 mt-6 hover:border2 hover:border-red-500 hover:bg-transparent shadow-lg text-black"onClick={() => history.push('/contact')}><span className='flex flex-col items-center'><img src={p} height={28} width={28}></img></span></button></span></span>
                            </div>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className="order-1 lg:order-2 flex flex-col justify-center">
                            {/* <img src="https://cdn-icons-png.flaticon.com/512/4773/4773193.png" alt="banner" /> */}
                        <div className='text-white'><span className='flex flex-row'><p className='text-red-500 text-8xl'>Car</p><p className='text-white text-8xl'>bon</p></span><span className='flex flex-row'><p className='text-white text-8xl'>DAT</p><p className='text-red-500 text-8xl'>ING</p></span></div>
                        </div>
                    </Fade>
                </div>
        </section>
    )
}

export default Banner
