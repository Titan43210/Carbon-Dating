import React from 'react';
import Bounce from 'react-reveal/Bounce';
import ContactForm from '../components/Contact/ContactForm';
import A from "../Heartcheckup.png"
import B from "../diabetes.png"
import C from "../braintumor.png"
import D from "../multiplediseases.png"
const CheckupScreen = () => {
    return (
        <section className="max-w-screen-xl py-36 mx-auto px-6  overflow-y-hidden">
            {/* heading  */}
            <Bounce left>
                <div className="flex flex-col items-center space-x-2 pb-4">
                    <h1 className="text-gray-700 poppins text-3xl">Check {" "} <span className="text-blue-500 font-semibold select-none">Up</span></h1>
                    <div className="bg-blue-500 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                    <div className='flex flex-row gap-3 w-4/5 justify-center'>
                        <div className='bg-white w-1/5 h-3/5 mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300'><span className='gg'><img className="" height= {250} width={250} src={A}></img></span><span className='text-red-500'>Heart Diseases</span></div>
                        <div className='bg-white w-1/5 h-3/5 mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'><span className='gg'><img className="" height= {250} width={250} src={B}></img></span><span className='text-red-500'>Diabetes</span></div>
                    </div>
                    <div className='flex flex-row gap-3 w-4/5 justify-center'>
                        <div className='bg-white w-1/5 h-3/5 mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'><span className='gg'><img className="" height= {250} width={250} src={C}></img></span><span className='text-red-500'>Brain Tumor</span></div>
                        <div className='bg-white w-1/5 h-3/5 mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'><span className='gg'><img className="" height= {250} width={250} src={D}></img></span><span className='text-red-500'>Multiple Diseases</span></div>
                    </div>
                </div>
            </Bounce>

            {/* form  */}
            {/* <ContactForm /> */}
        </section>
    )
}

export default CheckupScreen