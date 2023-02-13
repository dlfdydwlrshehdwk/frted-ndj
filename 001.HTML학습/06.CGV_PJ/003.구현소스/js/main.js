// cgv pj 메인페이지 JS - main.js

// 요소선택함수 ///////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료")
   
    /************************************************ 
        [ 포스터 메뉴 클릭시 클래스주기 ]
        - 포스터 메뉴 클릭시 해당li에
        클래스 "on" 을 주고 나머지 li는 
        "on"을 모두 지워서 선택된 li만 일어서 있는 
        css가 적용되게 한다.
    ************************************************/

    // 1. 대상선정 : .mlist ul>li -> 이벤트 + 변경대상 일치
    mlist = qsa(".mlist ul>li");
    // console.log(mlist);

    // 2. 이벤트설정
    // for of 사용 -> 배열 / 컬렉션 일때 사용
    for(let x of mlist){ // x는 각li요소
        x.onclick = () => {
        // 1. li에 클래스 초기화
            mlist.forEach(ele=>ele.classList.remove("on"));
            // forEach((요소,순번,객체)=>{코드})

        // 2. 클릭된 li에 
            // 클릭된 li에 클래스 on넣기
            // classList 객체 사용
            // add() 메서드사용
            x.classList.add("on");


        };///click이벤트 ////

    }////for of 문 ////

    // 극장가는길 구글맵보기 기능
    // 극장가는길 박스 클릭시 구글맵 등장
    // 구글맵박스의 닫기버튼 클릭시 구글맵 퇴장
    // -> 방법 : CSS셋팅된 클래스 "on"넣기/빼기

    // 1. 대상선정
    // 1-1. 이벤트대상 : .anibx -> 애니메이션버튼박스
    const anibx = qs(".anibx");
    // 1-2. 변경대상 : .gmap -> 구글맵박스
    const gmap = qs(".gmap");
    // 이벤트 대상 닫기버튼 .cbtn
    const cbtn = qs(".cbtn");
    // qs(".anibx").onclick=() => {qs(".gmap").classList.toggle("on");}
    // qs(".cbtn").onclick=() => {qs(".gmap").classList.toggle("on");}

    // 2. 버튼에 클릭 이벤트설정하기
    // 왼쪽상단누를시 구글맵박스 내려오기 + 왼쪽상단 커튼 올려주기
    anibx.onclick=() => {
        anibx.classList.add("on");
        gmap.classList.add("on")};
    // 닫기버튼 누를시 사라지기 + 왼쪽상단 커튼내려주기
    cbtn.onclick=() =>{
        gmap.classList.remove("on");
        anibx.classList.remove("on");
    } 


    /* 
        sns버튼 링크 이동하기
    */

    // 1. 대상 : .sns a
    const sns = qsa(".sns a");
    // 2. 클릭이벤트설정
    // forEach((요소,순번,객체)=>{코드})
    sns.forEach((ele)=>{
        ele.onclick = () => {
            // 1. 내부텍스트읽기

            let btxt = ele.innerText;
            // console.log(btxt);
            
            let url="";
            // 2. 분기문 url 할당하기
            switch(btxt){
                case "페이스북바로가기": url = "https://www.facebook.com/CJCGV"; break;
                case "트위터바로가기": url = "https://twitter.com/CGV_ID"; break;
                case "인스타그램바로가기": url = "https://www.instagram.com/cgv_korea/"; break;
            }//// switch 문 ////

            // 3. 페이지 이동하기 : 새창으로
            // 새창 ->window.open()
            // 페이지이동 -> location.href = url값
            window.open().location.href = url;

        };///click함수
    }); ///// forEach 문 ///

}); //// 로드구역 ////