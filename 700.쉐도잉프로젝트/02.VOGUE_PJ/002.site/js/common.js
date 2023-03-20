// 보그 PJ - 공통 JS : common.js

window.addEventListener('DOMContentLoaded',()=>{
    console.log('공통JS')

    // 부드러운 스크롤 호출
    startSS();


    // 만약 스크롤바를 직접 드래그 할 경우
    // mouseup(즉, 스크롤바를 놓는경우)
    // 이벤트 발생시 Y축 스크롤바 위치를 pos전역변수에 업데이트한다.
    window.addEventListener('mouseup',()=>{
        pos = window.scrollY;
        console.log(pos)
    });// scroll ////
}); // 로드구역 ////