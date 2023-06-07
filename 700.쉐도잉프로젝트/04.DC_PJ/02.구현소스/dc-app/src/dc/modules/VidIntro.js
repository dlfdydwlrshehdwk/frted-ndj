// VidIntro 컴포넌트 JS - VidIntro.js

/* 
[ 데이터 조건 ]
    link 속성 값 셋팅시 하나의 링크만 셋팅할것
    링크가 있을경우 sum 또는 desc 속성값에 
    단하나의 * 표시만 어디든지 넣는다. 
*/

import $ from "jquery";
import "../css/vidintro.css";
import vidintro_data from "../data/vidintro";

// 제이쿼리 로드구역 함수
function jqFn(){
    $(()=>{

    }); // JQB // 
} // jqFn 함수 //
function VidIntro(props){
    // props.pg - 해당페이지 데이터속성명
    // props.mm - 디자인 CSS클래스'on'성성

    let aa = vidintro_data[props.pg]

    // 링크코드 생성함수 : desc데이터 / sum 데이터에서 처리
    const lcode = (data) => { // data는 desc/sum 둘중에 전달됨
        return(
        <>
            {data.split('*')[0]}
            <a href={aa.link[1]} target='_blank'>{aa.link[0]}</a>
            {data.split('*')[1]}
        </>
        )
    }

    return(
        <>
        {/* 모듈코드 */}
        <section className={'vidbox'+' '+ props.mm}>
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
                <p>
                {
                        aa.sum.indexOf('*') == -1 ?
                        aa.sum : lcode(aa.sum)
                    }
                </p>
                <p>
                    {/* 특수문자 (*) 여부에 따라 처리 
                    indexOf(문자열) -> 없으면 -1 리턴 */}
                    {
                        aa.desc.indexOf('*') == -1 ?
                        aa.desc : lcode(aa.desc)
                    }
                    {/* {aa.desc.split('*')[0]}
                    <a href={aa.link[1]} target='_blank'>{aa.link[0]}</a>
                    {aa.desc.split('*')[1]} */}
                </p>
                {/* 링크있을경우 표시 */}
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드 함수 포함 */}
        {jqFn()}
        </>
        
    )
};

export default VidIntro;