import React, { useState } from 'react'
import Bounce from 'react-reveal/Bounce'
import { Link } from 'react-router-dom'
import Brand from '../components/Brand'
import Button from '../components/Form/Button'
import GoogleSignIn from '../components/Form/GoogleSignIn'
import TextField from '../components/Form/TextField'
import useAuth from '../hooks/useAuth'

const SignUpScreen = () => {
    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        image: '',
        password: '',
    })
    const { signUpUser } = useAuth()

    //form inputs
    const Inputs = [
        { id: 1, type: "text", placeholder: "Name", value: `${userInput.name}`, name: 'name' },
        { id: 2, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
        { id: 3, type: "text", placeholder: "Profile Picture Link", value: `${userInput.image}`, name: 'image' },
        { id: 4, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
    ]

    //handle change 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    //handle submit form 
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUpUser(userInput.email, userInput.password, userInput.name, userInput.image)
    }

    return (
        <main className="bg-black h-screen w-full pt-12 pb-20">
                {/* form  */}
                <Bounce left>
                    <div className="flex flex-row gap-40 justify-center items-center pt-24">
                        {/* logo  */}
                        {/* sign up form  */}
                        <div><div className='text-white pt-20'><span className='flex flex-row'><p className='text-red-500 text-8xl'>Car</p><p className='text-white text-8xl'>bon</p></span><span className='flex flex-row'><p className='text-white text-8xl'>DAT</p><p className='text-red-500 text-8xl'>ING</p></span></div>
</div>
                        <form className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-6">
                                {Inputs.map(input => (
                                    <TextField
                                        key={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        value={input.value}
                                        name={input.name}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                            {/* <button text="Sign Up" /> */}
                            <span className='flex flex-col items-center pt-5'><button className='btn-primary bg-red-500 hover:bg-black  w-36 h-12'>Sign Up</button></span>
                            <Link to="/signin">
                                <p className="text-base text-primary text-center my-6 hover:underline">Already have an account ?</p>
                            </Link>

                            <GoogleSignIn text="Sign Up With Google" />
                        </form>
                    </div>
                    <div className=''><div className='text-white pt-20 pb-10'><span className='flex flex-row'><p className='text-red-500 text-8xl'>Car</p><p className='text-white text-8xl'>bon</p></span><span className='flex flex-row'><p className='text-white text-8xl'>DAT</p><p className='text-red-500 text-8xl'>ING</p></span></div>
</div>
                </Bounce>
        </main>
    )
}

export default SignUpScreen
