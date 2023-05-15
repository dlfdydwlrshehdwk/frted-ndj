// 파일럿 PJ 카테고리 서브페이지 JS - sub.js

// 메뉴기능함수 가져오기 
import menuFn from "./mainjs/menu.js";
// 공통데이터 가져오기
import comData from "./tempData/data-common.js";
// 서브데이터 가져오기
import subData from "./tempData/data-sub.js" 
// 신상정보 가져오기
import sinsang from "./gdsData/sinsang.js";


// 뷰엑스스토어 JS가져오기
// 중요! 반드시 메인 JS파일 한군데서 불러와 써야 상태관리됨
// -> 이 JS파일에 Vue 인스턴스 생성코드가 같이 있어야한다.
import store from "./store.js"; 


// 스와이퍼변수
let swiper;
// 상단영역 메뉴 뷰 템플릿 셋팅 //
// Vue.component(작명,{옵션})
Vue.component("top-comp",{
    template : comData.tareaSub,
}); // 상단영역 Vue 컴포넌트 //

// 1. 배너파트 템플릿 셋팅
// Vue.component(작명,{옵션})
Vue.component("ban-comp",{
    template : subData.banner,
}); // 서브영역 Vue 컴포넌트 //

// 2. 컨텐츠1 템플릿 셋팅
// Vue.component(작명,{옵션})
Vue.component("cont1-comp",{
    template : subData.cont1,
}); // 2. 컨텐츠1 Vue 컴포넌트 //

// 3. 컨텐츠2 템플릿 셋팅
// Vue.component(작명,{옵션})
Vue.component("cont2-comp",{
    template : subData.cont2,
}); // 2. 컨텐츠1 Vue 컴포넌트 //


// 서브영역 뷰 인스턴스 셋팅하기 //
new Vue({
    el:'#cont',
    store, // 뷰엑스 스토어 등록 필수!
}) // 서브영역 뷰 인스턴스 //

// 하단영역 메뉴 뷰 템플릿 셋팅 //
// Vue.component(작명,{옵션})
Vue.component("foot-comp",{
    template : comData.barea,
}); // 하단영역 Vue 컴포넌트 // 


// 상단영역 뷰 인스턴스 생성하기

// new Vue({옵션})
new Vue({
    el : "#top",
    store, // 뷰엑스 스토어 사용하려면 등록필수
    data:{},
    // create 실행구역 : DOM연결전 
    created:function(){
        // DOM연결전 데이터 가공작업
        console.log('create구역')
    },
    // mounted 실행구역 : DOM연결 후 
    mounted:function(){
        // 제이쿼리코드
        console.log('mounted구역')
        // 메뉴기능호출
        menuFn();

        // 스와이퍼 생성함수 호출
        makeSwiper();

        // 부드러운스크롤
        startSS();

        // 신상품 기능함수 호출
        sinsangFn();

        // 패럴렉스 함수 호출
        setParallax('.c2',0.5)
        // setParallax(적용대상,속도)
        // 속도는 0.1 ~ 0.9

        // 스크롤리빌 플러그인 적용 호출
        $.fn.scrollReveal(); 

        // 메뉴클릭시 전체 메뉴창 닫기
        $('.mlist a').click(
            ()=>{
                $('.ham').trigger('click');
                // 위치값 - 부드러운 스크롤 위치값 업데이트
                sc_pos=0;
            });
            // $(선택요소).trigger('이벤트명')
            // 제이쿼리문법임
            // -> 선택요소의 이벤트를 강제발생
            // 참고) JS 클릭이벤트 강제발생
            // document.querySelector(요소).click();
    },
}) // 상단영역 뷰인스턴스

// 하단영역 뷰인스턴스 생성하기
new Vue({
    el : "#info",
}) // 하단영역 뷰인스턴스


// 스와이퍼 플러그인 인스턴스 생성하기
// 스와이퍼 생성함수
function makeSwiper() {
    
    
        swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
            // 가만히 두면 다시작동 
            // 인터렉션 비활성화 false -> 인터렉션 활성화 (가만히 두면 다시 자동넘김)
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 블릿클릭 이동여부
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

} // makeSwiper 함수 //

// 신상품 기능구현 함수 //
function sinsangFn(){



/**************************************************    
    함수명 : moveList
    기능 : 신상품 리스트박스를 연속하여 왼쪽방향으로 흘러가도록 함
**************************************************/
// 대상 : .flist 
const flist = $(".flist");
// 위치값 변수
let lpos = 0;
// 재귀호출 상태값 변수 1이면 호출가능 0이면 호출불가
let call_sts = 0; 
// 스크롤시 상태값변수 1이면 호출가능 0이면 호출불가
let sc_sts = 0; // - 안써도될듯
// 재귀호출 어쩌구
let callT;
function moveList(){

    // 1. 이동위치값 (left값) 감소하기
    lpos--;
    // console.log('위치값',lpos)

    // 2. 한계값 초기화하기 + 첫번째요소 맨뒤로 이동하기
    if(lpos < -300) {
        // 위치값 초기화
        lpos = 0;
        // 첫번째 li맨뒤로이동
        flist.append(flist.find("li").first())
    
    }

    // 3. 이동하기
    flist.css({
        left : lpos + 'px'
    })

    // 타임아웃비우기
    clearTimeout(callT)

    // 재귀호출하기 ( 비동기 호출 - setTimeout)
    // 조건 
    if(call_sts)callT = setTimeout(moveList,40)


}  // moveList 함수 //

// 신상품 이동함수 최초호출  
moveList();

// 신상품 리스트에 마우스 오버시 멈춤
// 신상품 리스트에 마우스 아웃시 이동
// hover(함수1,함수2)
flist.hover(
    function(){ // 오버
        call_sts = 0; // 콜백중단
    },
    function(){ // 아웃
        call_sts = 1; // 콜백허용
        moveList(); // 함수재호출
    }); // 호버 //

    /***************************************** 
        신상품 리스트 li에 마우스 오버시 정보 보이기 
        1. 대상 : .flist li
        2. 정보구분법 : li의 클래스명으로 
                        신상품정보와 매칭하여 상품정보박스를 동적으로 생성하여
                        애니메이션을 주어 보이게함
    *****************************************/
    flist.find('li').hover(
    function(){ // 오버
        // 1. 클래스정보 알아내기
        let clsnm = $(this).attr("class");
        // 2. 클래스 이름으로 셋팅된 신상정보 객체 데이터 가져오기
        // ^는 특수문자이므로 정규식에 넣을때 역슬래쉬와 함께씀
        // 중간 객체속성명 상위부모박스 #c1의 data-cat 속성값 
        // 읽어와서 sinsang[요기][] -> 요기 에 넣기
        let cat =$(this).parents('#c1').attr('data-cat')
        let gd_info = sinsang[cat][clsnm];

        console.log("data-cat",cat)
        
        // console.log(gd_info)
        // 3. 상품정보박스 만들고 보이게하기
        // 마우스 오버된 li자신 (this)에 넣는다
        $(this).append(`
        <div class="ibox"></div>
        `);
        // .ibox에 상품정보넣기
        // ^는 특수문자이므로 정규식에 넣을때 역슬래쉬와 함께씀
        // -> /\^/
        $(".ibox").html(gd_info.replace(/\^/g,'<br>'))
        .animate({
            opacity : 1,
            top : '110%'
        },300,"easeOutCirc");
        // $(".ibox").html(gd_info.replaceAll('^','<br>'))
    },
    function(){ // 아웃
        // ibox 나갈때 지우기 
        $(".ibox").remove()
    }); // hover //

    /* 
        스크롤위치가 신상품 박스가 보일때만 움직이기
    */
    // JS의 getBoundingClientRect() 와 같은것은? 
    // 적용박스 offset().top위치값 - scroll바 위치값

    // 1. 대상요소 위치값
    let tgpos = flist.offset().top;

    // 2. 스크롤위치변수
    let scTop = 0;

    // 3. 화면높이값
    let winH = $(window).height();

    // 4. 스크롤 이벤트 함수
    $(window).scroll(function(){
        // 스크롤 위치값
        scTop = $(this).scrollTop();
        console.log(scTop)
        // getBoundingClientRect 값 구하기
        let gBCR = tgpos-scTop;
        console.log("getBoundingClientRect",gBCR)

        // 3. 신상품 리스트 이동/멈춤 분기하기
        // (1) 이동기준 gBCR값이 화면높이보다 작고 0보다클때 이동
        if(gBCR < winH && gBCR > 0 && call_sts === 0){
            call_sts = 1; // 콜백허용! (한번만실행)
            moveList(); // 함수재호출!
        }   // if //
        // (2) 기타경우 멈춤
        // (조건 : 윈도우높이보다 크거나 0보다 작고 call_sts===1일때)
        else if((gBCR > winH || gBCR) < 0 && call_sts === 1){
            call_sts = 0; // 콜백중단!
        }   // else // 

        // 서브배너 스와이퍼 API를 이용한 작동멈춤셋팅하기
        // 기준 : 화면높이값 보다 스크롤위치가 크면 멈춤
        // 스와이퍼API : swiper.autoplay.stop()
        //        스크롤위치가 작으면 자동넘김
        // 스와이퍼API : swiper.autoplay.start()       
        if(scTop>winH){
            swiper.autoplay.stop()
        }
        else{
            swiper.autoplay.start()
        }
    }); // scroll // 
    
} // sinsangFn 함수 //

// 패럴랙스 플러그인 적용함수
function setParallax(ele,speed){
    // 대상 : .c2
    $(ele).parallax("50%",speed)
    // parallax(배경위치,속도)
}