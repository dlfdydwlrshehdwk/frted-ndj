
window.addEventListener('DOMContentLoaded', 함수실행());


function 함수실행(){
    const myvid = document.querySelector("#myvid");
    myvid.addEventListener("timeupdate",영상시간체크);

    function 영상시간체크(){
        if(myvid.paused){
            location.href="main.html";
        }
    }
}