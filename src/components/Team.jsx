import React from "react";
import pic from '../img/myself_circle.jpg'

const Team = () => {
    return(
        <>
            <div className="w-[100vw] h-[60vh] bg-[rgba(0,0,0,0.2)]">
                <div className="ml-10 mt-12 w-fit flex flex-row justify-center items-center gap-20">
                    <img src={pic} alt="" id="pic" width={300} className=" border-4                 border-[rgb(2,132,199)] rounded-full shadow-sm shadow-[#d3d3d3]"/>
                    <div>
                        <p className="text-5xl">Soham Shirke</p>
                        <p className="text-xl mt-5 text-[#b6b6b6]">Junior Web Developer</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Team