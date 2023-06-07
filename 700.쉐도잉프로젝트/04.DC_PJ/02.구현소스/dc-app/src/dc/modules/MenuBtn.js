// 메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "../css/menubtn.css";
import menu_data from "../data/menubtn";
import { Link, Outlet } from 'react-router-dom';


// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{
    }); // JQB // 
} // jqFn 함수 //

function MenuBtn(){
    return(
        <>
        <section className="menubtn">
            {
                menu_data.map((x,i) => 
            <div key={i}> 
                <div className="imbx">
                    <img src={x['isrc']} alt="" />
                </div>
                <div className="titbx">
                    <h3>{x.tit.split("^")[0]}</h3>
                    <h2>{x.tit.split("^")[1]}</h2>
                </div>
                <div className="btnbx">
                    {/* 라우터를 이용한 이동은 반드시 Link를 사용하자 */}
                    <Link to={x.link}>
                    <button>{x['btn']}</button>
                    </Link>
                </div>
            </div>
                )
            }
        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};


export default MenuBtn;