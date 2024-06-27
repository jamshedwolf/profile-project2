import React from 'react'
import profilePic1 from "../assets/profile1.jpg"
import profilePic2 from "../assets/profile2.jpg"
import profilePic3 from "../assets/profile3.jpg"
import profilePic4 from "../assets/profile4.jpg"
import profilePic5 from "../assets/profile5.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/pagination';



function Testamonials() {


    const clients = [
        {
            img: profilePic1,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic2,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic3,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic4,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic5,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
    ];
    return (



        <div id='testamonials' className="  relative lg:h-auto max-w-[1400px]  p-0 mx-auto my-20 md:pt-0  lg:p-20">
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >


                <SwiperSlide className=''>
                    <div className="mx-auto p-5   w-[250px]   lg:h-[300px] flex flex-col gap-5 rounded-lg border-2 border-yellowbtn px-4 items-center justify-center  lg:w-[700px] ">
                        <div className="rounded-full overflow-hidden mx-auto w-[60px] h-[60px] ">
                            <img src={profilePic1} alt="" className="w-full h-full" />
                        </div>
                        <p className="text-center">. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.<br/></p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="mx-auto p-5  w-[250px]   lg:h-[300px] flex flex-col gap-5 rounded-lg border-2 border-yellowbtn px-4 items-center justify-center  lg:w-[700px] ">
                        <div className="rounded-full overflow-hidden mx-auto w-[60px] h-[60px] ">
                            <img src={profilePic2} alt="" className="w-full h-full" />
                        </div>
                        <p className="text-center"> officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="mx-auto p-5  w-[250px]   lg:h-[300px] flex flex-col gap-5 rounded-lg border-2 border-yellowbtn px-4 items-center justify-center  lg:w-[700px] ">
                        <div className="rounded-full overflow-hidden mx-auto w-[60px] h-[60px] ">
                            <img src={profilePic3} alt="" className="w-full h-full" />
                        </div>
                        <p className="text-center"> officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="mx-auto p-5  w-[250px]   lg:h-[300px] flex flex-col gap-5 rounded-lg border-2 border-yellowbtn px-4 items-center justify-center  lg:w-[700px] ">
                        <div className="rounded-full overflow-hidden mx-auto w-[60px] h-[60px] ">
                            <img src={profilePic4} alt="" className="w-full h-full" />
                        </div>
                        <p className="text-center"> molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="mx-auto p-5  w-[250px]   lg:h-[300px] flex flex-col gap-5 rounded-lg border-2 border-yellowbtn px-4 items-center justify-center  lg:w-[700px] ">
                        <div className="rounded-full overflow-hidden mx-auto w-[60px] h-[60px] ">
                            <img src={profilePic5} alt="" className="w-full h-full" />
                        </div>
                        <p className="text-center"> officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.</p>
                    </div>

                </SwiperSlide>




            </Swiper>



            <div className="absolute hidden lg:block top-[500px] blur-[200px] z-[-1] bg-purple-600 left-[50%] w-[250px] h-[250px]"></div>
            <div className="absolute  hidden lg:block right-[0px] blur-[200px] z-[-1] bg-blue-600  w-[250px] h-[250px]"></div>
            <div className="absolute   top-[200px] hidden lg:block  blur-[200px] z-[-1] bg-purple-600 left-[300px] w-[250px] h-[250px]"></div>


        </div>

    )
}

export default Testamonials