import reactimg from '../img/react_png.png'
import angularimg from '../img/angular_png.png'
import tsimg from '../img/ts_png.png'
import nodejsimg from '../img/nodejs_png.png'
import bulbimg from '../img/development_png.png'
import {Link} from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <div className="h-full w-[100vw] py-10">
                <div className='h-[30vh] flex items-end justify-center pb-10'>
                    <p className='text-5xl'>Community guided courses & resources</p>
                </div>
                <div className="grid grid-flow-row grid-cols-3 gap-y-4 w-screen justify-center h-[80vh] pl-16 mt-5 mb-10">

                    {/* card 1 - react */}
                    <Link to="/projects/react-course">
                    <div className="card p-0 h-[275px] w-[350px] flex justify-center items-center flex-col text-xl">
                        <section className='bg-black w-[348px] h-[225px] flex justify-center items-center'>
                            <img src={reactimg} alt="" width={120}/>    
                        </section>
                        <p className='h-[90px] text-2xl text-center align-middle bg-slate-900 w-[348px] border-t-0 pt-6'>Advanced React Course</p>
                    </div>
                    </Link>
                    
                    {/* card 2 - angular */}
                    <Link to="/projects/angular-course">
                    <div className="card p-0 h-[275px] w-[350px] flex justify-center items-center flex-col text-xl">
                        <section className='bg-black w-[348px] h-[225px] flex justify-center items-center'>
                            <img src={angularimg} alt="" width={120}/>    
                        </section>
                        <p className='h-[90px] text-2xl text-center align-middle bg-slate-900 w-[348px] border-t-0 pt-2'>Beginner to Advanced Angular </p>
                    </div>
                    </Link>

                    {/* card 4 - typescript */}
                    <Link to="/projects/typescript-course">
                    <div className="card p-0 h-[275px] w-[350px] flex justify-center items-center flex-col text-xl">
                        <section className='bg-black w-[348px] h-[225px] flex justify-center items-center'>
                            <img src={tsimg} alt="" width={120}/>    
                        </section>
                        <p className='h-[90px] text-2xl text-center align-middle bg-slate-900 w-[348px] border-t-0 pt-2'>Comprehensive Typescript Course</p>
                    </div>
                    </Link>
                    
                    {/* card 5 - development */}
                    <Link to="/projects/fullstack-course">
                    <div className="card p-0 h-[275px] w-[350px] flex justify-center items-center flex-col text-xl">
                        <section className='bg-black w-[348px] h-[225px] flex justify-center items-center'>
                            <img src={bulbimg} alt="" width={120}/>    
                        </section>
                        <p className='h-[90px] text-2xl text-center align-middle bg-slate-900 w-[348px] border-t-0 pt-2'>Complete FullStack Development</p>
                    </div>
                    </Link>
                    
                    {/* card 6 - nodejs */}
                    <Link to="/projects/backend-course">
                    <div className="card p-0 h-[275px] w-[350px] flex justify-center items-center flex-col text-xl">
                        <section className='bg-black w-[348px] h-[225px] flex justify-center items-center'>
                            <img src={nodejsimg} alt="" width={120}/>    
                        </section>
                        <p className='h-[90px] text-2xl text-center align-middle bg-slate-900 w-[348px] border-t-0 pt-6'>Complete Backend Course</p>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
export default Projects