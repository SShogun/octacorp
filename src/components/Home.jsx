import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Downloads from './Downloads'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className='w-[100vw] h-[90vh] flex flex-col'>
                <div className='flex justify-center h-[45vh] w-full items-end'>
                    <p className='text-7xl'>Improve how you write <br />your <span className='text-9xl text-sky-500'><b>code</b></span></p>
                </div>
                 <div className='h-[12.5vh] w-full items-center mt-9 text-[18px]'>
                    <p>octacorp is a free online & downloadable open source extension for<br /> VSCode which enables you to build powerful web apps with React or other modern frameworks</p>
                </div>
                <div className='h-[10vh] w-full items-center align-middle'>
                    <button type="button" onClick={() => alert('There is no downloadable content as of now, Sorry!')} className='selection-none bg-gray-600 px-5 py-3 mx-1 hover:bg-gray-500 transition-colors'>Download Extension</button>
                    <Link to="/projects">
                        <button type="button" className='bg-sky-600 px-5 py-3 mx-1 hover:bg-sky-500 transition-colors'>View Projects</button>
                    
                    </Link>
                    
                </div>

            </div>
        </>
    )
}
export default Home