// 모듈 연습 메인JS - main.js

// 로딩구역 없이 ... -> script 태그에 defer 속성 사용 하거나 
// type = "module" 사용할 경우 로딩구역 없어도 요소 등 가져 올 수 있다.

// 모듈화 JS파일 import하기
// import { 변수명 } from "경로"  ! / 붙이기 ./ ../ 같은거
// import { mTitle, sTitle } from "./textData.js";
// 하나만 가져올경우 중괄호 생략 가능
// 별칭으로 바꿀때는 한겨어도 중괄호 필수!

// 별칭사용하기 
import { 
    mTitle as mTit,
    sTitle as sTit,
    personInfo as pInfo,
    mvData as mv
 } from "./textData.js";

import {message as msg} from "./msgFormat.js";



/* 
    [import 형식]
    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈JS에서 export를 해줘야함!
    -> from 뒤에 경로는 반드시 상대경로일 경우 
    같은 위치일지라도 ./ 표시를 꼭 해야한다.(없으면 안나옴)
    (/,./,../ 표시 필수 )
    -> 모듈구성은 반드시 서버형식으로 열어야 작동한다.
    (http://...) Live Server로 열기때문에 볼 수 있음.
    -> 로컬파일로 열면 작동안됨

    [ import 시 변수명 변경하기 : 별칭사용하기 ]
    import {전달변수 as 별칭} from 파일경로;
    예) improt {mymymy as m} from 파일경로;   // m 을 사용하면됨
    -> 별칭사용 이유 : 단순변경요구, 같은일므 변수 피하기 
*/


/* 
    [ 모듈화를 위한 구성]
    1. 데이터 처리하기 위한JS 
    -textData.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js
*/


// 1. 출력박스
// (1) 타이틀 출력박스
const tpart = document.querySelector('.tpart');

// (2) 내용 출력박스
const demo = document.querySelector('#demo');

// (3) 영화정보 출력박스
const mvpart = document.querySelector('.mvpart');


console.log(tpart,demo,mvpart);






// 3. 제목넣기
tpart.innerHTML = `
    <h2>${mTit}</h2>
    <h3>${sTit}</h3>
`;

// 4. 내용넣기

demo.innerHTML = msg('공유',43)
demo.innerHTML += msg('톰행크스',453)
demo.innerHTML += msg('졸리',48)

pInfo.forEach((ele)=>{
    // ele[0] 이름 ele[1] 나이
    demo.innerHTML += msg(ele[0],ele[1]);
})


// 5. 영화정보 뿌리기
// ol > li 형식으로 .mvpart 박스에 영화정보로 
// JS클래스 생성하여 화면에 뿌려준다.

// 