///  검색 모듈 - Search.js
import $ from 'jquery';
import { useState } from 'react';
import cat_data from '../data/cat';
import "../css/search.css";
import CatList from './CatList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Search(){

    // 데이터 선택하기 : Hook 데이터 구성하기
    // -> 데이터 정렬을 반영하기 위해 정렬상태값을 같이설정함
    // 데이터구성 : [배열데이터, 정렬상태값]
    // 정렬상갑값 : 0 - 오름차순, 1 - 내림차순, 2 - 정렬전
    // 설정이유 : 데이터 정렬만 변경될 경우 
    // 배열데이터가 변경되지 않은것으로 Hook상태관리에서 인식함
    let [sdt,setSdt] = useState([cat_data,2]);
    // sdt[0] -> 배열데이터만 가져갈 경우 0번째로 선택함
    // 데이터 건수 : Hook 데이터 구성하기 
    let [tot , setTot] = useState(cat_data.length);

    // 데이터 검색함수 ///
    const schList = () => {
        // 검색요소 대상 : #schin
        let inp = document.querySelector("#schin");
        // 1. 검색어 읽기
        let keyword = inp.value;
        // 2. 검색어 입력확인분기
        if(keyword.trim()=="") { 
            // 입력창으로 다시 보내기
            inp.focus();
            return ; 
        }
        // console.log("검색어",keyword)
        // 3. 데이터 검색하기 
        // 배열값 다중검색 메서드 - filter()
        // 검색대상 : 전체원본데이터 (cat_data)
        let newList = cat_data.filter(v=>{
            if(v.cname.toLowerCase().indexOf(keyword) !== -1 
            // && v.alignment === 'hero'
            ) return true;
        });
        console.log('검색결과',newList)

        // 4. 검색결과 리스트 업데이트하기
        // Hook변수인 데이터변수와 데이터건수 변수를 업데이트함
        setSdt([newList,2]);
        setTot(newList.length)

    }; // schList //

    // 입력창에서 엔터키를 누르면 검색함수 호출
    const enterKey = (e) => {
        console.log(e.key)
        if(e.key === 'Enter') schList();
    }; // enterKey //

    // 리스트 정렬 변경함수 //
    const sortList = (e) => {
        // 1. 선택옵션값 : 0 - 오름차순 / 1 - 내림차순 
        let opt = e.target.value
        console.log('선택옵션',opt);

        // 임시변수 : 배열데이터만가져옴
        let temp = sdt[0];
        console.log(temp)
        
        temp.sort((x,y)=>{
        // 2. 옵션에 따른 정렬반영하기 
        if(opt==1){ // 내림차순(1)
            return x.cname == y.cname ? 0 : x.cname > y.cname ? -1 : 1
        
        } // if //
        else{ // 올림차순(0)
            return x.cname == y.cname ? 0 : x.cname > y.cname ? 1 : -1
        } // else //
        })
        console.log(temp)

        // 3. 데이터 정렬변경 반영하기
        // setSdt([배열데이터,정렬상태값])
        setSdt([temp,opt]);
    }; // sortList //

    return(
        <>
        {/* 모듈코드 */}
        <section className='schbx'>

            {/* 1. 옵션선택박스 */}
            <div className='schopt'>
                {/* 검색박스 */}
                <div className='searching'>
                <FontAwesomeIcon onClick={schList}
                title='Open search' className='schbtn' icon={faSearch}/>
                {/* 입력창 */}
                <input onKeyUp={enterKey} id='schin' type='text' placeholder='Filter by Keyword'></input>
                </div>
            </div>

            {/* 2. 결과리스트박스 */}
            <div className='listbx'>
                {/* 결과타이틀 */}
                <h2 className='restit'>
                    BROWSE CHARACTERS({tot})
                </h2>
                {/* 정렬선택박스 */}
                <aside className='sortbx'>
                    <select className='sel' name='sel' id='sel'
                    onChange={sortList}>
                        <option value='0'>A-Z</option>
                        <option value='1'>Z-A</option>
                    </select>
                </aside>
                {/* 캐릭터 리스트 컴포넌트 
                전달속성 dt - 리스트 데이터 */}
                <CatList dt={sdt[0]} />
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Search;