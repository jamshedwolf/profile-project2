import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-scroll"

function Nav() {
    const [nav, setNav] = useState(false);

    function menu() {
        setNav(!nav);
    }

    

    const navItems = [
        { name: "Home", link: "home" },
       
        { name: "Services", link: "services" },
        { name: "Experience", link: "experience" },
        { name: "Projects", link: "projects" },

        { name: "Testamonials", link: "testamonials" }
    ];
    

    return (
        <div className='relative'>

            {/* Laptop screen */}
            <div className="flex max-w-[1400px] mx-auto px-5 py-5 items-center justify-between">
                <div className="text-yellowbtn text-3xl md:text-4xl lg:text-5xl font-bold">
                    Logo
                </div>
                <div className="gap-5 hidden md:flex text-base md:text-lg lg:text-xl items-center justify-evenly">

                    
                    {navItems.map((item, index) => (
                        <Link spy="true"  smooth="true" to={item.link} className='cursor-pointer'>
                        <p key={index} className={item.name === "Home" ? "text-yellowbtn font-bold " : ""}>
                            {item.name}
                        </p>
                          </Link>
                    ))}
                  
                </div>
                <div className="">
                    <button className="hidden border-0 hover:text-black text-white hover:bg-white  md:block text-base md:text-lg lg:text-xl shadow-xl hover:shadow-yellow-600 bg-yellowbtn rounded-full  px-3 py-2 ">
                        Contact us
                    </button>
                    <div className="md:hidden block p-5">
                        {nav ? <RxCross2 size={25} onClick={menu} /> : <IoMenu size={25} onClick={menu} />}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={nav ? "w-[50vw] z-20 absolute md:hidden flex items-center gap-8 flex-col left-0 top-0 border h-[100vh] bg-white border-yellowbtn transition-all ease-in duration-200" : "transition-all ease-in duration-200 fixed left-[-200px]"}>
                <div className="gap-5 mt-20 md:hidden flex-col flex text-base md:text-lg lg:text-xl items-center justify-evenly">
                    {navItems.map((item, index) => (
                          <Link spy="true"  smooth="true" to={item.link} >
                        <p key={index} className=""   onClick={menu}>
                            {item.name}
                        </p>
                        </Link>
                    ))}
                </div>
                <div className="">
                    <a href="tel:+1234567890" className="">
                    <button className="hover:text-black hover:bg-white hover:border hover:border-yellowbtn  mx-auto block text-base md:text-lg lg:text-xl shadow-lg hover:shadow-yellow-600 bg-yellowbtn rounded-full border px-3 py-2 text-black">
                        Contact us
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Nav;
