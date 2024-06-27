import React from 'react'
import { FaInstagram, FaYoutube, FaDiscord, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

function Footer() {
    const Itemsnav = [
        { name: "Home", link: "#" },
        { name: "Services", link: "#" },
        { name: "Experience", link: "#" },
        { name: "Projects", link: "#" },
        { name: "Contact", link: "#" }


    ];
    const Links1 = [
        { icon: <FaInstagram size={25} />, link: "", name: "Instagram" },
        { icon: <FaYoutube size={25} />, link: "", name: "YouTube" },
        { icon: <FaDiscord size={25} />, link: "", name: "Discord" },
        { icon: <FaXTwitter size={25} />, link: "", name: "Twitter" },
        { icon: <FaFacebookF size={25} />, link: "", name: "Facebook" }
    ];


    return (
        <div className="bg-yellowbtn ">
        <div className=' max-w-[1400px] p-5 h-auto mx-auto xl:h-auto xl:py-20  bg-yellowbtn flex flex-col lg:flex-row items-center justify-between   gap-6   text-white'>
            <div className="felx-[0.4]">
                <p className="font-bold text-black text-4xl md:text-5xl lg:text-6xl">LOGO</p>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Iusto tempore nisi tenetur quas laudantium veritatis nulla <br />laborum dolores quis minima.</p>
            </div>


            <div className="flex-[0.7] ">
                <div className="flex  lg:flex-row text-[13px] md:text-[18px]  text-black gap-2 lg:gap-5">
                    {Itemsnav.map((item, index) => (
                        <p key={index} className="">
                            {item.name}
                        </p>
                    ))}

                </div>



            </div>
            <div className=" flex gap-2 ">
                {Links1.map((social, index) => (
                    <p key={index} className="border-[1px] transition-all ease-in hover:scale-125 delay-100 hover:border-black  hover:text-white  rounded-full p-2 ">
                        <a href={social.link} aria-label={social.name}>{social.icon}</a>
                    </p>
                ))}

            </div>



        </div>
        </div>
    )
}

export default Footer