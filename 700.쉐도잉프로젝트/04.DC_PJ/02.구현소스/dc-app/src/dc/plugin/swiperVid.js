import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 폰트어썸 임포트 */
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery'
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
    // 데이터셋팅
    const sdt = swipervid_data;

    // 비디오 보이기 함수
    const showVid = (src,tit) => { // srt-비디오경로, tit-비디오제목
        console.log(src,tit)
        const ifr = $('.playvid iframe')
        // 1. iframe src넣기
        ifr.attr('src',src+"?autoplay=1") // <- 이렇게 해야 자동플레이됨 allow="autoplay" 해놓고

        // 2. title 넣기
        $('.ifrtit').text(tit)

        // 3. 비디오전체박스 보이기
        $('.vidbx').fadeIn(300);
        // 4. 닫기버튼
        $('.cbtn').click(()=>{
            $('.vidbx').fadeOut(300);
            ifr.attr('src',''); // 영상을 멈추기위해 그냥 소스자체를빼버림!
        })
    }; // showVid 함수 //
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
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
                <section className="swsec" onClick={()=>showVid(x.vsrc,x.tit)}>
                    {/* 동영상이미지 */}
                    <div>
                        <img src={x.isrc}/>
                    </div>
                    {/* 동영상 타이틀영역 */}
                    <p className="pone">{x.cat}</p>
                    <p className="ptwo">{x.tit}</p>
                    {/* 폰트어썸을 이용한 재생버튼 만들기 */}
                    {/* <FontAwesomeIcon icon={faPlayCircle} 
                                style={{
                                    position:"absolute",
                                    bottom:"55%",
                                    left:"10%",
                                    color:"#fff",
                                    fontSize:"50px"
                                    }} /> */}
                    <div className="play">▶</div>
                </section>
            </SwiperSlide>
            )
        }

      </Swiper>
    </>
  );
}
