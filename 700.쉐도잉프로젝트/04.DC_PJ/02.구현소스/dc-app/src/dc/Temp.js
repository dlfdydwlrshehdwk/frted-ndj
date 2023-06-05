// 템프 모듈 - Temp.js
import $ from "jquery";
import "./css/temp.css";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function Temp(props){
    return(
        <>
        {/* 코드구역 */}
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default Temp;