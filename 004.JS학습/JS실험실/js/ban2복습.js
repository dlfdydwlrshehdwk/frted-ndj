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

function loadFn() {
    console.log("로딩완료!");

    // 1. 대상선정 //////////////////////////
    // 1-1. 이벤트 대상: .abtn
    const abtn = document.querySelectorAll(".abtn");

    // 1-2. 변경 대상: #slide
    const slide = document.querySelector("#slide");

    // 1-3. 블릿 대상: .indic li
    const indic = document.querySelectorAll(".indic li");
    console.log(indic);

    // 1-4. 슬라이드 li리스트
    let slist = document.querySelectorAll("#slide>li");
    !
    slist.forEach((ele, idx) => {
        ele.setAttribute("data-seq", idx);
    }); ////// forEach /////////////////
    const chgSeq = () => {
        slist = document.querySelectorAll("#slide>li");
        slide.insertBefore(slist[slist.length-1],slist[0]);        
    }; ////////// chgSeq함수 ///////////

    for(let i=0;i<2;i++) chgSeq();

    let prot = 0;

    const goSlide = (seq) => {
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400);
        let clist = slide.querySelectorAll("li");
        if (seq) {

            slide.appendChild(clist[0]);
            slide.style.left = "-110%";
            slide.style.transition = "none";
            setTimeout(() => {
                slide.style.left = "-220%";
                slide.style.transition = "left .4s ease-in-out";                
            }, 1); //// 타임아웃 //////

        } //////////// if : 오른쪽클릭시 //////

        // 1-2. 왼쪽버튼 클릭시 //////////////
        else {
            slide.insertBefore(clist[clist.length - 1], clist[0]);

            slide.style.left = "-330%";
            slide.style.transition = "none";
            setTimeout(() => {
                slide.style.left = "-220%";
                slide.style.transition = "left .4s ease-in-out";
            }, 0); ////// 타임아웃 /////////

        } //////////// else : 왼쪽클릭시 //////

        clist = slide.querySelectorAll("li");

        let cseq = clist[2].getAttribute("data-seq");

        for (let x of indic) x.classList.remove("on");

        indic[cseq].classList.add("on");
    }; ////////// goSlide함수 ///////////

    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            event.preventDefault();
            clearAuto();
            goSlide(idx);
        }; ///// click함수 //////
    }); /////// forEach //////////

    // 인터발함수 지우기위한 변수
    let autoI;
    // 타임아웃함수 지우기위한 변수
    let autoT;

   function autoSlide(){
        autoI = setInterval(()=>goSlide(1),3000);
   } ////////////// autoSlide함수 //////////

   autoSlide();

   function clearAuto(){
    console.log("인터발멈춤!");
    // 1. 인터발 지우기
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(autoSlide,5000);

   } ///////// clearAuto 함수 /////////////
   
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////