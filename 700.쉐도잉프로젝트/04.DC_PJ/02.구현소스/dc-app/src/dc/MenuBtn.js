// 메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "./css/menubtn.css";
import menu_data from "./data/menubtn";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //

function MenuBtn(props){
    return(
        <>
        <section className="menubtn">
            <div> 
                <div className="imbx">
                    <img src={menu_data[0]['isrc']} alt="" />
                </div>
                <div className="titbx">
                    <h3>{menu_data[0]['tit'.split('^',)]}</h3>
                    <h2>THE FLASH IS ONLY IN <br/>
                    THEATERS JUNE 16</h2>
                </div>
                <div className="btnbx">
                    <button>TICKETS ONSALE NOW</button>
                </div>
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};


export default MenuBtn;