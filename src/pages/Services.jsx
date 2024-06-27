import React from 'react';
import resume from "../assets/Capture.webp"

function Services() {
    return (
        <div id='services'   className='relative flex flex-col lg:flex-row gap-6 place-items-center h-auto  items-center max-w-[1400px] p-5    lg:h-[100vh]     mx-auto' data-aos="fade-up">
            <div className="basis-1/3  ">
                <p className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900">My Awesome </p>
                <p className="font-bold text-yellowbtn text-4xl md:text-5xl lg:text-6xl lg:mt-5">Services</p>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore nisi tenetur quas laudantium veritatis nulla laborum dolores quis minima.</p>
                <div className="mt-8">
                    <a href={resume} className="" download>
                    <button className="block m-5 hover:text-black hover:bg-white text-base md:text-lg lg:text-xl shadow-lg hover:shadow-yellow-600 bg-yellowbtn rounded-full border px-6 py-2 text-white ">
                        Download Cv
                    </button>

                    </a>
                 
                </div>
            </div>

            <div className="grid  grid-cols-1 lg:grid-cols-3    place-items-center   gap-8 ">

                <div data-aos="fade-right" className="  justify-center lg:hover:scale-105  flex flex-col items-center gap-4 border-[4px] rounded-[10px]  border-yellowbtn duration-200 w-[300px] h-[300px]">
                    <p className="font-bold ">Design</p>
                    <p className=" text-center">Figma,Adobe Xd,Photoshop <br /> sketch</p>
                    <button className='border hover:border-0  border-t-black    hover:shadow-lg p-2 rounded-lg'>Learn more</button>

                </div>
                <div data-aos="fade-up" className="   justify-center lg:hover:scale-105  flex flex-col items-center gap-4 border-[4px] rounded-[10px]  border-yellowbtn duration-200 w-[300px] h-[300px]">
                    <p className="font-bold ">Design</p>
                    <p className=" text-center">Figma,Adobe Xd,Photoshop <br /> sketch</p>
                    <button className='border hover:border-0  border-t-black    hover:shadow-lg p-2 rounded-lg'>Learn more</button>

                </div>
                <div data-aos="fade-left" className="    justify-center lg:hover:scale-105  flex flex-col items-center gap-4 border-[4px] rounded-[10px]  border-yellowbtn duration-200 w-[300px] h-[300px]">
                    <p className="font-bold ">Design</p>
                    <p className=" text-center">Figma,Adobe Xd,Photoshop <br /> sketch</p>
                    <button className='border hover:border-0  border-t-black    hover:shadow-lg p-2 rounded-lg'>Learn more</button>

                </div>
               
             
              




            </div>
            <div className="absolute  top-[500px] blur-[100px] z-[-1] bg-purple-600 left-[50%] w-[150px] h-[150px]"></div>
            <div className="absolute right-[0px] blur-[100px] z-[-1] bg-blue-600  w-[150px] h-[150px]"></div>
            <div className="absolute top-[200px] hidden lg:block  blur-[100px] z-[-1] bg-purple-600 left-[200px] w-[150px] h-[150px]"></div>
        </div>
    );
}

export default Services;
