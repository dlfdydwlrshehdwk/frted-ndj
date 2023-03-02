// 보그 PJ 카테고리 페이지 JS -category.js

// 넘어온 url 받기 pm -> parameter(전달값변수)
let pm = location.href;
// location.href 이 이퀄 오른쪽에 있으면 url주소 읽어옴
// 문자열 잘라서 값 읽어오기
// -> 물음표로 잘라서 두번쨰값, 이퀄로 잘라서 두번째값
pm = pm.split('?')[1].split('=')[1];
// pm값 특수문자 복원
pm = decodeURIComponent(pm);
console.log(pm);

// 로딩구역 ////
window.addEventListener('DOMContentLoaded', loadFn);

// 로드함수////
function loadFn(){
    console.log('카테고리 로딩완료');

    // 1. 변경대상선정
    // (1) 서브타이틀
    const stit = document.querySelector(".stit");
    // (2) 서브메뉴
    const lnb = document.querySelector(".lnb");
    // (3) 내용 타이틀 
    const contit = document.querySelectorAll('.icont h2')
    // (4) 컨텐츠 상위박스(카테고리 클래스 넣기위함)
    const cont = document.querySelector(".cont");
    // (5) title요소(타이틀내용에 카테고리명 앞에추가)
    const titag = document.querySelector("title");
    
    // console.log(stit,lnb,cont,contit,titag);

    // 2. 메뉴데이터 (sinfo변수) 객체에서 카테고리값 선택하기.
    const mdata = sinfo[pm];
    console.log(mdata);

    // 3. 대상에 변경 적용하기
    // (1) 카테고리 페이지 타이틀 넣기
    stit.innerText = mdata["제목"]


    // 메뉴값 담기
    let mvalue = mdata['메뉴'];
    
    // (2) LNB 메뉴넣기 
    // 대상: .lnb -> lnb변수
    // 코드넣기 : 
    // <ul><li><a href="#">메뉴</a></li></ul>
    if(mvalue =='없음'){
        // lnb태그 삭제 - 있으면 lnb에 있는 패딩이있음 
        lnb.remove();
        // return;
    }
    else{
        let temp = "<ul>";//임시변수
        // 메뉴배열만큼 돌아서 코드생성
        mvalue.forEach((ele)=>{
            console.log(ele);
            temp += `
            <li>
                <a href="#">${ele}</a>
            </li>
            `;
        })   
        
        // 닫는 ul
        temp += `</ul>`;
        lnb.innerHTML = temp;
    }
    // (3) 내용 타이틀넣기 : h2 개수만큼 순번대로 mdata["타이틀"][순번] 
    // mdata.타이틀[순번] 도 가능
    // h2를 forEach 로 순번을 알아옴
    // forEach((요소,순번)=>{코드})
    contit.forEach((ele,idx)=>{
        ele.innerHTML = mdata["타이틀"][idx];
    })

    // (4) 컨텐츠 박스에 pm과 같은 이름의 클래스넣기
    cont.classList.add(mdata['경로']);
    // '경로' 속성의 값이 실제 클래스명과 일치함.
    // cont.classList.add(pm.replace(" & ","-"));
    // replace(바뀔값,바꿀값)

    // (5) 탭메뉴 출력 title 요소 데이터 넣기
    // 기존값을 앞에 "제목"속성값을 넣어준다.
    // 대상: title요소 -> titag 변수
    titag.innerText = mdata["제목"] + titag.innerText;









}// loadFn ////