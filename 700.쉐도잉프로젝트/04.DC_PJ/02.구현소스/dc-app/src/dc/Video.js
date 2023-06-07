// DC Video 페이지 컴포넌트
import React from 'react';
import isrc from './ImgSrc';
import VidIntro from "./modules/VidIntro";

const Video = () => {
    return(
        <>
            <h2>Video Page</h2>
            <VidIntro pg="VIDEO" /> 
        </>
    );
}; // Video 컴포 //

export default Video;