import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리넣기 */
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/* 폰트어썸 임포트 */
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./swipercat.css";

// import required modules
import { Navigation } from "swiper";
// 데이터 가져오기
import cat_data from "../data/cat";
import { Link } from "react-router-dom";

export default function SwiperCat(props) {
    // 데이터 셋팅
    const sdt = cat_data;

    return (
        <>
            <Swiper
                // slidesPerView={2}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                // 스와이퍼 사이즈별 슬라이드수 변경!
                breakpoints={{
                    400: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 5,
                    },
                    1000: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                }}
                className="mySwiper">
                {sdt.map((v, i) => (
                    <SwiperSlide key={i}>
                        <Link to="/det" style={{textDecoration : "none"}}>
                        <section className="swinbx">
                            {/* 캐릭터이미지영역 */}
                            <div className="catimg">
                                <img src={v.tmsrc} alt={v.cname} />
                            </div>
                            {/* 동영상타이틀영역 */}
                            <div className="cattit">
                                <h3>{v.cname}</h3>
                            </div>
                        </section>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}