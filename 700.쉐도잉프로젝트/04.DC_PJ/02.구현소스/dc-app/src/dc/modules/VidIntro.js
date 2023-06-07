// VidIntro 컴포넌트 JS - VidIntro.js

import $ from "jquery";
import "../css/vidintro.css";
import vidintro_data from "../data/vidintro";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //
function VidIntro(props){
    let aa = vidintro_data
    return(
        <>
        {/* 모듈코드 */}
        <section className="vidsc">
            {/* 비디오파트 */}
            <div>
            <iframe  src={vidintro_data.main.vsrc} 
            title={vidintro_data.main.btit}>
            </iframe>
            </div>
            {/* 타이틀파트 */}
            <div>
                <h3>{vidintro_data.main.stit}</h3>
                <h2>{vidintro_data.main.btit}</h2>
                <p>{vidintro_data.main.sum1}</p>
                <p>{vidintro_data.main.desc}</p>
                {/* <p>{aa}</p> */}
                {/* 링크있을경우 표시 */}
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default VidIntro;