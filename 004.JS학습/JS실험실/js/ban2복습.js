// JS실험실: 03.배너스타일 JS -  ban.js

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:
        -> left 이동의 기준값이 -220% 인것이 포인트!
        (이유: 2장의 슬라이드가 앞에 나가있음. 잘라내는 것이
            숨겨져야하므로 셋팅한것임!)

        (1) 오른쪽 버튼 클릭시

            ※ 변경된부분!!!
            {   트랜지션 중앙 커지기를 적용한 경우이므로
                왼쪽버튼과 같이 잘라내기를 먼저하여
                슬라이드 주인공 순서를 일치 시킨다!!!! }

            -> 슬라이드 이동전!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 -110%으로 변경한다!
        
            다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -220%로 변경시킨다.
            

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -330%로 변경한다.
            그 후 left값을 -220%으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/* 
    버튼 2개를 각각 설정해줌
    
    오른버튼을 누르면?
    ul이 -110% 움직인다.
    + 왼쪽 맨 끝 사진이 오른쪽으로간다.
    트랜지션을 없앤다.

    코드를 분리해서 슬라이드를 -220%한다. -> ul이 넘어가도록 보이게하기위해
    트랜지션을주어 넘어가는거처럼보이게한다.

    왼쪽버튼을 누르면?
    오른쪽으로나가는 슬라이드를 왼쪽으로 넣는다.
    동시에 슬라이드를 -330%한다.
    이때 트랜지션을 없앤다.

    그 후 left값을 -220%로 애니메이션(트랜지션줌)한다. 슬라이드가 왼쪽에서 들어오도록보이게하기위해

    이동버튼에 누르면 실행되게 버튼2개설정을 변수안에 담아준다.
*/

function loadFn() {
    console.log("로딩완료!");

    // 1-1. 이벤트 대상: .abtn
    const abtn = document.querySelectorAll(".abtn");
    // 1-2. 변경 대상: #slide
    const slide = document.querySelector("#slide");
    // 1-3. 블릿 대상: .indic li
    const indic = document.querySelectorAll(".indic li");
    // 1-4. 슬라이드 li리스트
    let slist = document.querySelectorAll("#slide>li");
    
    // list 에 data라는 속성으로 순번을 넣어준다.
    // 불릿과 연동하기위함 미리설정
    slist.forEach((ele, idx) => {
        // data-seq 라는 사용자정의 속성 넣기
        ele.setAttribute("data", idx);
    }); ////// forEach /////////////////
    
    const chg = () => {
        slist = document.querySelectorAll("#slide>li");
        slide.insertBefore(slist[slist.length-1],slist[0]);
    };//chg 함수 ////
    for(let i = 0 ; i <2 ; i++){
        chg();
    }
    
    // 광클방지변수
    let prot = 0;

    const goSlide = (q)=>{
        //오른쪽클릭, 왼쪽클릭, 블릿초기화 및 블릿 출력


        // console.log("슬라이드시작",q);
        // 광클방지
        // console.log("광클막기")
        if (prot) return;
        prot = 1;
        setTimeout(()=>{prot=0;},400); 
        // console.log("잠금해제")

        // list수집
        let clist = slide.querySelectorAll('li');

        if(q){//오른쪽클릭
            // 슬라이드 이동전 맨왼쪽거 잘라서 오른쪽으로 넣음
            // 슬라이드가 -110% 
            console.log('오른쪽클릭')
            slide.appendChild(clist[0]);
            slide.style.left = '-110%';
            slide.style.transition = 'none';

            setTimeout(()=>{
                slide.style.left = '-220%'
                slide.style.transition='.4s ease-in-out';
            },20);//setTimeout////
        }
        else {//왼쪽버튼
            // 슬라이드 이동전 맨오른쪽거 잘라서 왼쪽으로 넣음
            // 슬라이드를 -330%로 이동 이때 트랜지션 x
            // 그 후 슬라이드를 -220%로 이동
            // 동시에 트랜지션준다.  
            console.log("왼쪽버튼")

            slide.insertBefore(clist[clist.length-1],clist[0]);
            slide.style.left='-330%'
            slide.style.transition='none';

            setTimeout(()=>{
                slide.style.left='-220%';
                slide.style.transition='.4s ease-in-out';
            });//timeout////
        }  //else ////


        // 블릿이랑 맞추기
        // 현재 화면수집
        clist = slide.querySelectorAll('li');
        console.log(clist);
        // 화면3에 블릿0을 맞춤
        let cseq = clist[2].getAttribute("data");
        console.log('cseq',cseq)
        // 블릿 초기화
        for (let x of indic) x.classList.remove("on");
        indic[cseq].classList.add('on');
    }//goSlide////

    // 실행버튼
    abtn.forEach((ele,idx)=>{
        console.log(ele);
        event.preventDefault;
        ele.onclick=()=>{
            clear();
            goSlide(idx);
        };
    });//forEach////

    // 자동넘김 ////


    // 인터발함수 지우기위한 변수
    let autoI;
    // 타임아웃함수 지우기위한 변수
    let autoT;

    function autoSlide(){
        // 인터발함수로 슬라이드함수 호출하기
        autoI = setInterval(()=>{goSlide(1)},3000)
    }
    // 최초실행
    autoSlide();


    // 인터발함수를 지우고 다시셋팅
    function clear () {
        clearInterval(autoI);
        clearTimeout(autoT);
        autoT = setTimeout(autoSlide,3000);
    }


    
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////