// 인트로 페이지 JS - intro.js 

// 로딩호출 ////
window.addEventListener('DOMContentLoaded', loadFn);

// 로딩실행함수
function loadFn(){
    console.log("로딩완료")

    // 동영상 시간을 체크하여 일정시간후 메인페이지로 넘길 수 있음
    // setTimeout(()=>{
    //     location.href = "main.html";
    // },40000);
    // 그러나 
    // 동영상시간 이벤트를 사용하여 넘기자

    // 동영상재생중 발생하는 이벤트s
    // timeupdate -> 동영상재생 시간이 계속 업데이트시 발생

    // 대상 : #myvid 
    const myvid = document.querySelector("#myvid");
    myvid.addEventListener("timeupdate",chkVid);

    function chkVid(){
        console.log("멈췄니?",myvid.paused)
        // 비디오가 멈추면 재생끝 이므로
        // 비디오 멈춤상태 체크함
        // paused 속성은 멈추면 true/ 아니면 false 리턴
        // 주의 : 비디오가 loop면 안된다. 

        // 멈춤상태가 true이면 메인페이지로 이동
        if(myvid.paused){
            location.href="main.html";
        }
    }// chkVid 함수////


}// loadFn 함수 ////