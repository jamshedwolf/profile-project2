import React, { useEffect } from 'react';
import { FaInstagram, FaYoutube, FaDiscord, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import pro from "../assets/Capture.webp";
import Aos from 'aos';


function Home() {
  

    const socialLinks = [
        { icon: <FaInstagram size={25} />, link: "", name: "Instagram" },
        { icon: <FaYoutube size={25} />, link: "", name: "YouTube" },
        { icon: <FaDiscord size={25} />, link: "", name: "Discord" },
        { icon: <FaXTwitter size={25} />, link: "", name: "Twitter" },
        { icon: <FaFacebookF size={25} />, link: "", name: "Facebook" }
    ];

    return (
        <div className=" relative flex pt-10 h-auto px-5 xl:h-auto xl:mt-20 items-center max-w-[1400px] md:h-[100vh] mx-auto justify-between flex-col md:flex-row gap-5">
            <div data-aos="fade-right" className="flex flex-col flex-[0.5] justify-center  gap-5">
                <p className="font-bold text-4xl md:text-5xl lg:text-6xl">HI! I AM </p>
                <p className="font-bold text-yellowbtn text-4xl md:text-5xl lg:text-6xl">ANEE </p>


                
                <p className="font-bold text-yellowbtn text-4xl md:text-5xl lg:text-6xl"> </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore nisi tenetur quas laudantium veritatis nulla laborum dolores quis minima.</p>
                <div>
                    <button className="block hover:text-black hover:bg-white  text-base md:text-lg lg:text-xl shadow-lg hover:shadow-yellow-600 bg-yellowbtn rounded-full border px-3 py-1 text-white">
                        hire me
                    </button>
                    <div className="flex gap-5 text-yellow mt-20">
                        {socialLinks.map((social, index) => (
                            <p key={index} className="border-2 transition-all ease-in hover:scale-125 delay-100 hover:border-white hover:bg-yellowbtn hover:text-white border-yellowbtn rounded-full p-2 text-yellowbtn">
                                <a href={social.link} aria-label={social.name}>{social.icon}</a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" className="flex justify-center items-center flex-[0.5] ">
                <div className="rounded-lg border bg-center transition-all ease-linear lg:hover:scale-105 duration-200 drop-shadow-lg shadow-yellowbtn overflow-hidden w-[300px] h-[500px] lg:w-[350px] lg:h-[550px]">
                    <img src={pro} alt="Profile" className="w-full h-full" />
                </div>
            </div>
 {/* <div className="blur-[80px] absolute z-[-1] left-[60%] bg-yellow-500 w-80 h-80 "></div> */}


 <div className="absolute  top-[500px] blur-[200px] z-[-1] bg-purple-600 left-[50%] w-[250px] h-[250px]"></div>
            <div className="absolute right-[0px] blur-[200px] z-[-1] bg-blue-600  w-[250px] h-[250px]"></div>
            <div className="absolute top-[200px] hidden lg:block  blur-[200px] z-[-1] bg-purple-600 left-[300px] w-[250px] h-[250px]"></div>
        </div>
    );
}

export default Home;
