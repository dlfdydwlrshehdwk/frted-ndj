// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    console.log("로딩완료");

    // 1 대상선정
    // 1-1. 이벤트대상: .abtn
    const abtn = document.querySelectorAll(".abtn");

    // 1-2. 변경대상: #slide
    const slide = document.querySelector("#slide");

    // 광클금지 변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    // 2. 슬라이드 변경함수 만들기
    // 호출시 seq에 들어오는 값중 1은 오른쪽, 0은 왼쪽
    const goSlide = (seq) => {
        console.log("슬고우:", seq);

        console.log('못들어갔어!')
        // 광클금지 설정하기 ////
        if(prot) return ;
        prot = 1; // 잠금!
        console.log("나 들어왔어!")
        setTimeout(()=>{
            prot=0; // 잠금해제!
        },400); // 0.4초 후 해제!


        // 0. 현재의 슬라이드 li수집하기
        let clist = slide.querySelectorAll('li');
        // clist -> current list 현재 리스트

        // 1. 방향에따른 분기
        // 1-1. 오른쪽버튼 클릭시
        if (seq) {
            console.log("오른");

            // (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            //     나타나도록 슬라이드 박스의 left값을
            //     -100%로 변경시킨다.
            slide.style.left = "-100%";
            slide.style.transition = ".4s ease-in-out";

            // (2) 슬라이드 이동후!!! (0.4초후)
            setTimeout(() => {
                // (2-1) 바깥에 나가있는 첫번째 슬라이드
                //     li를 잘라서 맨뒤로 보낸다!
                slide.appendChild(clist[0]);
                // (2-2) 동시에 left값을 0으로 변경한다!
                slide.style.left = "0";
                // (2-3) 트랜지션 없애기.
                slide.style.transition = "none";
            }, 400); // timeout ///
        }//if////

        // 1-2. 왼쪽버튼 클릭시
        else {
            console.log("왼");

            // (1) 왼쪽버튼 클릭시 이전 슬라이드가
            // 나타나도록 하기위해 우선 맨뒤 li를
            // 맨앞으로 이동한다.
            // slide.insertBefore(넣을놈,넣을놈전놈)
            // slide.insertBefore(맨끝li,맨앞li)

            slide.insertBefore(clist[clist.length-1],clist[0]);
            
            // (2) 동시에 left값을
            // -100%로 변경한다.
            slide.style.left = '-100%';
            // 이때 트랜지션을 없애준다(한번실행후 부터 생기므로)
            slide.style.transition='none';


            // (3) 그 후 left값을 0으로 애니메이션하여
            // 슬라이드가 왼쪽에서 들어온다.
            // 동일 속성인 left가 같은 코딩처리 공간에 동시에 있으므로
            // 이것을 분리해야 효과가 있다.
            // setTimeout을 사용한다.
            setTimeout(()=>{
                slide.style.left = "0";
                slide.style.transition = ".4s ease-in-out";
            },0);//timeout////

        }//else : 왼클릭시 - 끝////

    }; //goSlide 함수////

    // 3. 대상에 이벤트 설정하기
    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            goSlide(idx);
        }; //onclick////
    }); //foreach////

    ////////////////////////
    // 자동넘김 설정하기 ////
    ////////////////////////

    // 일정시간간격 넘어가기 
    // -> setInterval(함수,시간)

    // [ 인버발함수의 함수전달값 사용예]
    // 1. 함수에 전달값이 없으면 함수명만 사용가능
    // setInterval(goSlide,3000);
    // 2. 전달값이 있다면 익명함수구역에 코딩
    // setInterval(function(){goSlide(1)},3000);
    //3. 화살표함수사용가능
    // setInterval(()=>{goSlide(1)},3000);
    // 4. 화살표함수 중괄호생략가능
    setInterval(()=>goSlide(1),3000);



}
//////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
