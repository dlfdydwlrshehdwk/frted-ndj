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
    let aa = vidintro_data[props.pg]
    let b =`<a>${aa.btit}</a>`
    // let bb = aa.desc.split('^')[0]
    // let cc = aa.desc.split('^')[1]
    // let dd = aa.desc.split('^')[2]
    return(
        <>
        {/* 모듈코드 */}
        <section className="vidsc">
            {/* 비디오파트 */}
            <div className="divone">
            <iframe  src={aa.vsrc} 
            title={aa.btit}>
            </iframe>
            </div>
            {/* 타이틀파트 */}
            <div className="divtwo">
                <h3>{aa.stit}</h3>
                <h2>{aa.btit}</h2>
                <p>{aa.sum1}</p>
                <p>{aa.desc}</p>
                <p>{b}</p>
                {/* 링크있을경우 표시 */}
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default VidIntro;