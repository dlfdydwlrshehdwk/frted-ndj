// DC Video 페이지 컴포넌트
import React from 'react';
import isrc from './ImgSrc';

const Video = () => {
    return(
        <>
            <h2>Video Page</h2>
            <iframe src={isrc.video} /> 
        </>
    );
}; // Video 컴포 //

export default Video;