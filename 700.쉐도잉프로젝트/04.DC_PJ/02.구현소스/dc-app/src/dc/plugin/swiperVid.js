import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swipervid.css";

// import required modules
import {  Navigation } from "swiper";

// 데이터가져오기
import swipervid_data from "../data/swipervid";


export default function SwiperVid(props) {
    const sdt = swipervid_data;
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >

        {
            sdt.map((x,i)=>
            <SwiperSlide key={i}>
                <section className="swsec">
                    {/* 동영상이미지 */}
                    <div>
                        <img src={x.isrc}/>
                    </div>
                    {/* 동영상 타이틀영역 */}
                    <p className="pone">{x.cat}</p>
                    <p className="ptwo">{x.tit}</p>
                    <a href="">
                        <div className="play">▶</div>
                    </a>
                </section>
            </SwiperSlide>
            )
        }

      </Swiper>
    </>
  );
}
