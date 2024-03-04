import React from "react";
import vscode from '../img/vscode_img.png'
import sublime from '../img/sublime_png.png'
import pycharm from '../img/pycharm_png.png'

const About = () => {
    return (
        <>
        <div className="w-[100vw] h-[90vh] flex flex-col">
            <div className="w-[100vw] h-[40vh] flex items-end justify-center ">
                <p className="text-7xl">We enable developers<br />to build incredible things</p>
            </div>
            <div className="mt-10 text-xl">
                We are available on multiple text editors like <br />
                <div className="w-full flex flex-row gap-5 justify-center mt-2">
                    <a href="https://code.visualstudio.com/" target="_blank"><img src={vscode} alt="vscode" width={70} /></a>
                    <a href="https://www.sublimetext.com/"><img src={sublime} alt="sublime" width={70}/></a>
                    <a href="https://www.jetbrains.com/pycharm/"><img src={pycharm} alt="pycharm" width={70}/></a>
                </div>
            </div>

        </div>
        </>
    )
}
export default About