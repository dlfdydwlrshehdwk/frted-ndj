// VidSwipe 모듈 - VidSwipe.js
import $ from "jquery";
import "../css/vidswipe.css";
import SwiperVid from "../plugin/SwiperVid";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function VidSwipe(props){
    // props.pg - 페이지별 데이터 구분
    // props.tit - 모듈타이틀
    return(
        <>
        {/* 코드구역 */}
        <section className="vidswbox">

        {/* 1. 모듈타이틀 */}
        <h2 className="tit">{props.tit}</h2>
        {/* 2. 스와이퍼 컴포넌트 */}
        <SwiperVid></SwiperVid>

        {/* 3. 비디오 재생창 */}
        <section className="vidbx">
            {/* 비디오중앙박스 */}
            <div className="playvid">
                {/* 비디오타이틀 */}
                <h2 className="ifrtit"></h2>
                {/* 동영상 */}
                <iframe src="" allow="autoplay"></iframe>
                {/* 닫기버튼 */}
                <button className="cbtn">×</button>
            </div>
        </section>

        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default VidSwipe;