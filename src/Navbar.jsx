import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
    <>
        <div className='flex w-[100vw] h-[10vh] justify-between px-16 py-3  '>
            <Link to='/'>
                <p className='text-3xl select-none'>octacorp</p>
            </Link>
            
            <nav>
                <ul className='grid grid-flow-col gap-5 pt-2'>
                    <li><Link to='/' className='hover:text-[rgba(2,150,199,1)] text-xl text-white'>home</Link></li>
                    <li><Link to='/about' className='hover:text-[rgba(2,150,199,1)] text-xl text-white'>about</Link></li>
                    <li><Link to='/projects' className='hover:text-[rgba(2,150,199,1)] text-xl text-white'>projects</Link></li>
                    <li><Link to='/feedback' className='hover:text-[rgba(2,150,199,1)] text-xl text-white'>feedback</Link></li>
                    <li><Link to='/team' className='hover:text-[rgba(2,150,199,1)] text-xl text-white'>team</Link></li>            
                </ul>
            </nav>
        </div>

        
    </>
    )
}
export default Navbar