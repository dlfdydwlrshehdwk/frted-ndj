// DC 메인 페이지 컴포넌트
import React from 'react';
import Ban from './modules/Ban' 
import MenuBtn from './modules/MenuBtn';
import VidIntro from './modules/VidIntro';
import VidSwipe from './modules/VidSwipe';

const Main = () => {
    return(
        <>
            {/* 1. 배너모듈 */}
            <Ban cat="main" />
            {/* 2. 메뉴버튼모듈 */}
            <MenuBtn />
            {/* 3. 비디오소개모듈 */}
            <VidIntro pg="main" mm="" />
            {/* 4. 비디오 스와이퍼 모듈 */}
            <VidSwipe tit="LATEST TRAILERS, CLIPS & MORE" pg="main" />

        </>
    );
}; // Main 컴포 //

export default Main;