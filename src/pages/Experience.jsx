import React from 'react'

function Experience() {
    return (


        <div className=" relative max-w-[1400px] mx-auto h-auto " id='experience'>
            <p data-aos="fade-right" className=" font-bold text-yellowbtn text-4xl md:text-5xl lg:text-6xl p-5 text-center">Experience</p>

        <div className='flex flex-col lg:flex-row items-center justify-evenly lg:justify-center  h-[1100px] lg:h-[70vh] xl:h-auto xl:mt-20  gap-5'>

            <div data-aos="fade-right" className="">
                <div className="border-[7px] border-yellowbtn  h-[200px] w-[200px] rounded-full text-black">
                <p className="font-bold flex items-center justify-center text-5xl w-full h-full ">7+</p>
                </div>

                <p className="font-bold text-center ">years</p>
                <p className="font-bold text-center  text-yellowbtn ">Experience</p>
            </div>
            <div data-aos="fade-up" className="">
                <div className="border-[7px] border-yellowbtn  h-[200px] w-[200px] rounded-full text-black">
                <p className="font-bold flex items-center justify-center text-5xl w-full h-full ">200+</p>
                </div>

                <p className="font-bold text-center ">Completed </p>
                <p className="font-bold text-center  text-yellowbtn ">Projects</p>
            </div>
            <div data-aos="fade-left" className=" pb-">
                <div className="border-[7px] border-yellowbtn  h-[200px] w-[200px] rounded-full text-black">
                <p className="font-bold flex items-center justify-center text-5xl w-full h-full ">4+</p>
                </div>

                <p className="font-bold text-center ">Worked with</p>
                <p className="font-bold text-center  text-yellowbtn ">Companies</p>
            </div>

        </div>
        {/* <div className="absolute  top-[500px] blur-[200px] z-[-1] bg-purple-600 left-[50%] w-[250px] h-[250px]"></div> */}
            <div className="absolute right-[0px] blur-[200px] z-[-1] bg-blue-600  w-[250px] h-[250px]"></div>
            <div className="absolute top-[200px] hidden lg:block  blur-[200px] z-[-1] bg-purple-600 left-[300px] w-[250px] h-[250px]"></div>
        </div>
    )
}

export default Experience