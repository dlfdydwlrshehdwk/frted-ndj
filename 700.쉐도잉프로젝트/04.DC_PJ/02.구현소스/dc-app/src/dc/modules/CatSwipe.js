// CatSwipe 모듈 - CatSwipe.js
import $ from "jquery";
import "../css/catswipe.css";
import SwiperCat from "../plugin/SwiperCat";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function CatSwipe(props){
    // props.pg - 페이지별 데이터 구분
    // props.tit - 모듈타이틀
    return(
        <>
        {/* 코드구역 */}
        <section className="catswbox">

        {/* 1. 모듈타이틀 */}
        <h2 className="tit">{props.tit}</h2>
        {/* 2. 스와이퍼 컴포넌트 */}
        <SwiperCat></SwiperCat>

        

        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default CatSwipe;