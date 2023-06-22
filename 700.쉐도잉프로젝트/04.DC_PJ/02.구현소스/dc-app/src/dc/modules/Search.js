// 메뉴버튼 모듈 - search.js
import $ from "jquery";
import "../css/search.css";
import menu_data from "../data/cat";
import { Link, Outlet } from 'react-router-dom';
import CatList from "./CatList";
import cat_data from "../data/cat";
import { useState } from "react";


// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{
    }); // JQB // 
} // jqFn 함수 //

function Search(){

    // 데이터 선택하기 : Hook 데이터 구성하기
    let [sdt,setSdt] = useState(cat_data);


    return(
        <>
        <section className="schbx">
            <div className="schopt">

            </div>
            <div className="listbx">
                {/* 결과타이틀 */}
                <h2 className="restit">
                BROWSE CHARACTERS
                </h2>
                {/* 정렬선택박스 */}
                <aside className="sortbx">

                </aside>
                {/* 캐릭터리스트컴포넌트
                전달속성 dt - 리스트 데이터 */}
                <CatList dt={sdt} />

            </div>
        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};


export default Search;