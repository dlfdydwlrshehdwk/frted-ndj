// 큐브트립 메인 JS ///////////////////////

/************************************************* 
    [ 구현 요구사항 ]
    - 도시별 메뉴버튼을 클릭시 해당도시의 데이터를
    큐브회전후 도시와 매칭하여  정보를 화면에 출력한다.

*************************************************/

// 로딩구역 설정 ////////////////////////
window.addEventListener("DOMContentLoaded",loadFn) 
/////////////// load 구역 ///로드함수 ///////////

function loadFn(){
    console.log("로딩완료");

    // 1. 대상선정 
    // 1-1. 이벤트대상 : .city a
    const menu = document.querySelectorAll(".city a");
    
    // 1-2. 변경대상 : .cube
    const cube = document.querySelector(".cube");

    // 1-3. 변경대상2 : 도시명 - .cname
    const cname = document.querySelector(".cname");

    // 1-4. 변경대상3 : 도시정보 - .cinfo
    const cinfo = document.querySelector(".cinfo");

    // 1-5. 변경대상4 : 도시박스 - .cbx
    const cbx = document.querySelector(".cbx");

    // 
    
    // console.log("menu는:",menu,"cube는:",cube,"cbx는:",cbx);

    // 2. 메뉴에 클릭이벤트 설정하기
    // for of문 
    for(let x of menu){
        // 1. 클릭이벤트설정
        x.onclick = () => {//x는 각각의 a요소

            // 0. 도시정보박스 숨기기(트랜지션 없애기)
            cbx.style.opacity = 0;
            cbx.style.transition = "none";

            // 도시정보 스크롤 맨위로 초기화
            // 도시정보 스크롤 생길경우 내려놓고 다른 도시로가면
            // 스크롤위치가 내려가 있기 때문에 스크롤 위치를 
            // 맨위로 셋팅잡아주기
            cinfo.scrollTo(0,0);
            // scrollTo(가로스크롤위치),세로스크롤위치)
    

        // 1. 메뉴 텍스트 읽기
            let mtxt = x.innerText;
            // console.log(mtxt);

        // 2. 회전값 셋팅하기
        // 회전값변수
        let setval;
        // switch case문
        switch(mtxt){
            case "출발" : setval = "rotateX(0deg) rotateY(0deg)"; break; 
            case "서울" : setval = "rotateX(-90deg) rotateY(-360deg)"; break; 
            case "뉴욕" : setval = "rotateX(360deg) rotateY(-90deg)"; break; 
            case "파리" : setval = "rotateX(-360deg) rotateY(90deg)"; break; 
            case "베를린" : setval = "rotateX(720deg) rotateY(-180deg)"; break; 
            case "런던": setval = "rotateX(450deg) rotateY(360deg)"; break; 
            default : setval = "rotateX(0deg) rotateY(0deg)";
        } /////////////switch case문 ////
        // console.log(mtxt+":"+setval);

        // 3. 회전값 적용하기(트랜스폼에 setval변수값 할당하기)
        cube.style.transform = setval;
        cube.style.transition = "transform 1.5s ease-in-out";

        // 만약 "출발"을 클릭한 경우 아래코드 실행안하기
        if(mtxt==="출발") return; ////if문 ///
        // return 키워드는 함수를 빠져나간다.

        // 4. 도시정보 셋팅하기
        // data.js에 셋팅된 객체의 속성값이 메뉴의 도시명과 같다.
        // 따라서 이 속성명으로 속성값을 가져와서 도시정보를 
        // 아래요소에 셋팅한다.
        // 변경대상1: .cname - 도시명 -> mtxt 변수에 있음
        // 변경대상2: .cinfo - 도시정보 -> city[mtxt]에 있음
        // innerText 로 할당
        console.log(city[mtxt]);

        // 도시명 넣기
        cname.innerText = mtxt;
        cinfo.innerText = city[mtxt];
        
        
        // 5. 도시 정보박스보이기
        // 대상: .cbx
        // 내용: 큐브 1.5초간 회전후 도시정보박스가 보여야한다.
        // setTimeout(함수,시간)
        setTimeout(() => {
            cbx.style.opacity = 1;
            cbx.style.transition = "opacity .8s ease-in-out";
        }, 1500);  ////타임아웃 /////
        
    };/////onclick 함수 ////////
        
    }///for of 문 ///




}//////////////// loadFn 함수 ////////